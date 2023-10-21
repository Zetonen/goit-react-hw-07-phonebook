import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { deleteContact, getContacts } from 'redux/contactsThunk';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <List>
      {loading && error ? (
        <Loader />
      ) : contacts.length === 0 && !error ? (
        <p>Phonebook empty</p>
      ) : (
        contacts.map(contact => {
          const { id, name, phone } = contact;
          return (
            <Item key={id}>
              {name + ' : ' + phone}
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </Item>
          );
        })
      )}
    </List>
  );
};

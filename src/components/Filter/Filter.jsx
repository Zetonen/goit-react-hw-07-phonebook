import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { search } from 'redux/sliceFilter';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const handleChangeFilter = (e) =>{
    dispatch(search(e.target.value.trim()))
  }
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={handleChangeFilter}
        />
      </Label>
    </div>
  );
};

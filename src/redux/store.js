import { configureStore } from '@reduxjs/toolkit';
import { sliceContact } from './sliceContact';
import { sliceFilter } from './sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: sliceContact,
    filter: sliceFilter,
  },
});

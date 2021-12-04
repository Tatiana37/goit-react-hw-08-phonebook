import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterAction(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: action.payload,
      };
    },

    [fetchContacts.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContact.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        contacts: [...state.contacts, action.payload],
      };
    },
    [addContact.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [deleteContact.fulfilled](state, action) {
      console.log(state, action);
      return {
        ...state,
        isLoading: true,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    },
  },
});

export const { filterAction } = contactSlice.actions;
export default contactSlice.reducer;

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
        error: null,
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
    [addContact.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
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
    [deleteContact.pending](state) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        isLoading: true,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    },
    [deleteContact.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { filterAction } = contactSlice.actions;
export default contactSlice.reducer;

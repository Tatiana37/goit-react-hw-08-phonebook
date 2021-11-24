import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6195417d74c1bd00176c6c9b.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const item = { name: contact.name, number: contact.number };
            const { data } = await axios.post('/contacts', item);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactsId, { rejectWithValue }) => {
        try {
            const {data: {id}} =
            await axios.delete(`/contacts/${contactsId}`);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);





import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const Base_Url = 'https://connections-api.herokuapp.com';
// const contactsFetch = "/contacts";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            token.set(data.token);
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
            const data =
                await axios.delete(`/contacts/${contactsId}`);
            token.set(data.token);
            return data.id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.contacts.token;
        if (persistToken === null) {
            return rejectWithValue();
        }
        try {
            const { data } = await axios.get('/contacts');
            token.set(data.token);
            console.log({data})
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



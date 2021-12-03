import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


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
    async (contact, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;
        try {
            token.set(persistToken);
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactsId, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;
        try {
            token.set(persistToken);
                await axios.delete(`/contacts/${contactsId}`);
            return contactsId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue, getState  }) => {
        const state = getState();
        const persistToken = state.auth.token;
        if (persistToken === null) {
            return rejectWithValue();
        }
        try {
            token.set(persistToken);
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);



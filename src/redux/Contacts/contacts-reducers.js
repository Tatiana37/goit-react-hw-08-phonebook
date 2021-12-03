import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "./contact-actions";
import { fetchContacts, addContact, deleteContact } from "./contacts-operations";



const contacts = createReducer([], {
    [fetchContacts.fulfilled]:(_, {payload})=>payload,
    [addContact.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteContact.fulfilled]: (state, { payload }) =>
        state.filter(({id}) => id !== payload)
});

const filter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
})

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, { payload }) => payload,
    [fetchContacts.pending]: () => null,
});


export default combineReducers({
    contacts,
    filter,
    isLoading,
    error,
})


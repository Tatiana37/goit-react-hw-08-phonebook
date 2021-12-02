import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contacts-operations";
import { filterContact } from "./contact-actions";

const initialState = {
    items: [],
    token: null,
    filter: "",
    isLoading: false,
    isAuth: false,
    error: null,
};

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            };
        },
        [fetchContacts.fulfilled](state, action)  {
            return {
        ...state,
        isLoading: false,
                items: action.payload,
                token: action.payload.token,
                isAuth: true,
    };
        },
        
        [fetchContacts.rejected](state, action){
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
                error: null,
            };
        },
        [addContact.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                items: action.payload.items,
                token: action.payload.token,
                error: null,
            };
        },
        [addContact.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        },
        [deleteContact.fulfilled](state, action) {
            return {
                ...state,
                isLoading: true,
                items: state.filter((contact) => contact.id !== action.payload),
                token: action.payload.token,
                error: null,
            }
        },
        [filterContact.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                filter: action.payload.filter,
            }
        },
    },
});

export const { filterAction } = contactSlice.actions;
export default contactSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, current, logOut } from "./auth-operations";

const initState = {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
    isFetchingCurrentUser: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initState,
    extraReducers: {
        [register.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            };
        },
        [register.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };
        },
        [register.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
        [logIn.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            };
        },
        [logIn.fulfilled]:(state, action) =>{
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };
        },
        [logIn.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
        [current.pending](state, action) {
            return {
                ...state,
                isLoading: true,
                isFetchingCurrentUser: true,
            };
        },
        [current.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                isAuth: true,
                isFetchingCurrentUser: false,
            };
        },
        [current.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isAuth: false,
                isFetchingCurrentUser: false,
            };
        },
        [logOut.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            };
        },
        [logOut.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                user: { name: null, email: null },
                token: null,
                isAuth: false,
            };
        },
        [logOut.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
    }
});
export default authSlice.reducer;
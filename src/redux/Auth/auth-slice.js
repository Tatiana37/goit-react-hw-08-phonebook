import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./auth-operations";

const initState = {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
}
console.log(initState);

const authSlice = createSlice({
    name: "auth",
    initState,
    extraReducers: {
        [register.pending](state, action) {
            // state.isLoading = true;
            return {
                ...state,
                isLoading: true,
            };
        },
        [register.fulfilled](state, action) {
            // state.isLoading = false;
            // state.user = action.payload.user;
            // state.token = action.payload.token;
            // state.isAuth = true;
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };
        },
        [register.rejected](state, action) {
            // state.isLoading = false;
            // state.error = action.payload;
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        },
        [logIn.pending](state, action) {
            // state.isLoading = true;
            return {
                ...state,
                isLoading: true,
            };
        },
        [logIn.fulfilled](state, action) {
            // state.isLoading = false;
            // state.user = action.payload.user;
            // state.token = action.payload.token;
            // state.isAuth = true;
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };
        },
        [logIn.rejected](state, action) {
            // state.isLoading = false;
            // state.error = action.payload;
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
    }
});
// export const { renameProp } = authSlice.action;
console.log(authSlice.reducer)
export default authSlice.reducer;
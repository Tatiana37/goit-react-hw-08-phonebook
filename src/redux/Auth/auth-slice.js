import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, current, logOut } from './auth-operations';

const initState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoading: false,
  isAuth: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  extraReducers: {
    [register.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
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
        error: null,
      };
    },
    [logIn.fulfilled](state, action) {
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
    [logOut.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [logOut.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: null, email: null },
        token: null,
        isAuth: false,
        error: null,
        isFetchingCurrentUser: false,
      };
    },
    [logOut.rejected](state, action) {
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
        error: null,
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
  },
});
export default authSlice.reducer;

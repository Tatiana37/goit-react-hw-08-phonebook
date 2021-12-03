import { createAsyncThunk } from '@reduxjs/toolkit';

const Base_Url = 'https://connections-api.herokuapp.com';
const userRegister = '/users/signup';
const userLogin = '/users/login';
const userCurrent = '/users/current';
const userLogout = '/users/logout';

export const register = createAsyncThunk(
  'user/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(Base_Url + userRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);

export const logIn = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(Base_Url + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  },
);

export const current = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return rejectWithValue();
    }
    try {
      const response = await fetch(Base_Url + userCurrent, {
        headers: {
          Authorization: `Bearer ${persistToken}`,
        },
      });
      const data = await response.json();
      console.log('response', data);
      return data;
    } catch (err) {
      console.log(err.message);
      rejectWithValue(err.message);
    }
  },
);

export const logOut = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;
    if (persistToken === null) return;
    try {
      await fetch(Base_Url + userLogout, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${persistToken}`,
        },
      });
    } catch (err) {
      console.log(err.message);
      rejectWithValue(err.message);
    }
  },
);

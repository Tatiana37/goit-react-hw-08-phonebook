// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const Base_Url = "https://connections-api.herokuapp.com";
const userRegister = "/users/signup";
const userLogin = "/users/login";
const userCurrent = "/users/current";
const userLogout = "/users/logout";



export const register =  createAsyncThunk("user/register",
async (user, { rejectWithValue }) => {
    try {
        const response = await fetch(Base_Url + userRegister, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data)
            return data;
        } catch (err) {
            rejectWithValue(err.message);
    }
    })


export const logIn = createAsyncThunk("user/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await fetch(Base_Url + userLogin, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log(data)
            return data;
        } catch (err) {
            rejectWithValue(err.message);
        }
    })
    
    
    // axios.defaults.baseURL = "https://connections-api.herokuapp.com";
// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     },
// };
// export const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
//     try {
//         const { data } = await axios.post('/users/signup', credentials);
//         // token.set(data.token);
//         return data;
//     } catch (error) {
//         // rejectWithValue(err.message);
//     }
// });

    // export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
//     try {
//         const { data } = await axios.post('/users/login', credentials);
//         // token.set(data.token);
//         return data;
//     } catch (error) {
//         //  rejectWithValue(err.message);
//     }
// });
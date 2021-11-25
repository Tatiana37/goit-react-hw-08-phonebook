import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/auth-slice';
import contactsReducer from './Contacts/contacts-reducers';
// console.log(authReducer)

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
}
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
    reducer: {
        // auth: authReducer,
        auth: authPersistReducer,
        contacts: contactsReducer,
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



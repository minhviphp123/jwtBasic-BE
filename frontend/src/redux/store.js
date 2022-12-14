import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import deleteReducer from './deleteSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer,
        delete: deleteReducer
    }
});
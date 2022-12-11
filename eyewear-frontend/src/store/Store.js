import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './AdminSlice';

const redux = require('redux');
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

const store = configureStore({ reducer: AuthReducer }, applyMiddleware(thunkMiddleware));

export default store;
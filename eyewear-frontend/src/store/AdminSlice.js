import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.withCredentials = true;

const initialAuthState = { isLoggedIn: false, isLoading: true, name: null };

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.isLoading = false;
            state.name = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.name = null;
        },
    }
});

const authenticateUser = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:3000/api/admin/refreshToken", {
                withCredentials: true
            });
            const data = res.data;
            dispatch(AuthSlice.actions.login(data.admin.name));
        } catch (err) {
            dispatch(AuthSlice.actions.logout());
        }
    }
}

export const AuthActions = AuthSlice.actions;
export const AuthenticateUser = authenticateUser;
export const AuthReducer = AuthSlice.reducer;
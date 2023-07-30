'use client';

import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "not-authenticated", // 'authenticated, checking'
        user: {},
        userRegistered:{},
        token: null,
        errorMessage: undefined,
        statusRegister: "not-registered", // 'registered' , 'checking'
        registerMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = "checking";
            state.user = {};
            state.token = null;
            state.errorMessage= undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = "authenticated";
            state.user = payload.user;
            state.token = payload.token;
            state.errorMessage= undefined;
            //console.log(payload)
        },
        onLoginError: (state, {error}) => {
            state.status = "not-authenticated";
            state.user = {};
            state.token = null;
            state.errorMessage = error;
            //console.log(payload)
        },
        onLogout: (state) => {
            state.status = "not-authenticated";
            state.user = {}
            state.token = null
            state.errorMessage= undefined
        },
        onCheckingRegister: (state) => {
            state.statusRegister = 'checking'
            state.registerMessage = undefined
        },
        onRegister: (state, {payload}) => {
            console.log(payload, "payload de register")
            state.statusRegister = "registered"
            state.registerMessage = undefined
            state.userRegistered = payload;
        },
        onRegisterError: (state, {error}) => {
            console.log(error, "error")
            state.statusRegister = "not-registered"
            state.registerMessage = error
        },
        onDeleteRegister: (state) => {
            state.statusRegister = "not-registered"
            state.registerMessage = undefined
        }
    }
});

export const {
  onChecking,
  onLogin,
  onLogout,
  onLoginError,
  onCheckingRegister,
  onRegister,
  onRegisterError,
  onDeleteRegister,
} = authSlice.actions;
export default authSlice.reducer;

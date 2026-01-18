import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        name:null,
        token:null,
        isAuthChecked:false,
        isAuthenticated:false
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.name = action.payload.name,
            state.token = action.payload.token,
            state.isAuthenticated = true
        },
        authChecked: (state) => {
            state.isAuthChecked = true
        }

    }
})

export const {loginSuccess, authChecked} = authSlice.actions
export default authSlice.reducer
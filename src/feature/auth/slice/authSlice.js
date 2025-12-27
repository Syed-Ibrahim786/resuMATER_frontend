import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        name:null,
        token:null
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.name = action.payload.name,
            state.token = action.payload.token
        }
    }
})

export const {loginSuccess} = authSlice.actions
export default authSlice.reducer
import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../feature/auth/slice/authSlice.js'

export const store = configureStore({
    reducer:{
        auth:authReducer
    }

})
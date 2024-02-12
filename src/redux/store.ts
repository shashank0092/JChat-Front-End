import { configureStore } from "@reduxjs/toolkit";
import GoogleLoginReducer from "./slice/GoogleLogin"
export const store=configureStore({
    reducer:{
        googleLogin:GoogleLoginReducer
    },
    devTools:true
})
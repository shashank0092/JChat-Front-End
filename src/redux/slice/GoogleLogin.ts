import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";


const Login=async()=>{
    try{
        const { loginWithRedirect, user } = useAuth0();
        await loginWithRedirect({ authorizationParams: { connection: "google-oauth2" } });
        return user
    }
    catch(err){
        console.log(err,"this is error")
    }
}

export const GoogleLogin = createAsyncThunk('GoogleLogin', async (_,{rejectWithValue}) => {
    
   
   try{
    await Login()
   }
   catch(err){
    return rejectWithValue(err)
    
   }
    
    
    
});

export interface GoogleLoginState{
    isLoading:boolean,
    data:any,
    isError:boolean
}

const GoogleLoginSlice = createSlice({
    name: "GoogleLogin",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    }as GoogleLoginState  ,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(GoogleLogin.fulfilled, (state, action) => {
                console.log("i am in fufiled section")
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(GoogleLogin.pending, (state) => {
                console.log("i am pending section")
                state.isLoading = true;
            })
            .addCase(GoogleLogin.rejected, (state, action) => {
                console.log("i am rejected setion")
                console.log(action.error, "Error while Google Login");
                state.isError = true;
            });
    },
});

export default GoogleLoginSlice.reducer
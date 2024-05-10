import axios from "axios"
import { LocalStorage } from "../utills"


const apiClient=axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL,
    withCredentials:true,
    timeout:120000
})

apiClient.interceptors.request.use(
    function(config){
        const token=LocalStorage.get("token")
        config.headers.Authorization=`Bearer ${token}`
        return config
    },

    function(error){
        return Promise.reject(error)
    }
)

const loginUser=(data:{email:string,password?:string})=>{
    return apiClient.post("/user/login",data)
}

const registerUser=(data:{name:string,about:string,email:string,phoneNumber:string,password:string,imagePath:string})=>{
    return apiClient.post("/user/register",data)
}

const requestForgetPassword=(data:{email:string})=>{
    return apiClient.post("/user/forgot-password",data)
}

const resetPassword=(data:{resetToken:string,newPassword:string})=>{
    return apiClient.post("/user/reset-password",data)
}

const uploadImage=()=>{
    return apiClient.get("user/imageauth")
}

const SearchUser=(data:{email:string})=>{
    return apiClient.post("/chat/serch_users",data)
}

const CreateAndGetOneOnOneChat=(data:{email:string})=>{
    return apiClient.post("/chat/create_one_chat",data)
}


const GetAllChat=()=>{
    return apiClient.get("/chat/")
}
export {
    loginUser,
    registerUser,
    uploadImage,
    requestForgetPassword,
    resetPassword,
    SearchUser,
    CreateAndGetOneOnOneChat,
    GetAllChat  
}
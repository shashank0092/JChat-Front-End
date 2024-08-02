import axios from "axios"
import { LocalStorage } from "../utills"

console.log(import.meta.env.VITE_SERVER_URL)

const apiClient=axios.create({
    baseURL:"http://192.168.89.156:8000/api/v1/",
    // withCredentials:true,
    // timeout:120000
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
    console.log("there is happening api call")
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


const SendMessage=(data:{chatId:string,content:string,attachments:File[]})=>{

    const formData=new FormData()
    if(data.content){
        formData.append("content",data.content)
    }
    data.attachments.map((file:File)=>{
        console.log(file)
        formData.append("attachments",file)
    })
    console.log(data.attachments,"this all are attcha api")
    return apiClient.post(`/message/sendMessage/${data.chatId}`,formData)
}
const getAllMessages=(chatId:string|undefined)=>{
    return apiClient.get(`/message/getMessages/${chatId}`)
}
export {
    loginUser,
    registerUser,
    uploadImage,
    requestForgetPassword,
    resetPassword,
    SearchUser,
    CreateAndGetOneOnOneChat,
    GetAllChat,
    SendMessage,
    getAllMessages
}
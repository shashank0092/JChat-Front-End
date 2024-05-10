import { createContext, useContext, useEffect, useState } from "react";
import { UserInterface } from "../interface/user"
import React from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utills";
import { requestHnadler } from "../utills/index"
import { loginUser, registerUser,requestForgetPassword,resetPassword} from "../api";
import {TailSpin} from "react-loader-spinner"


const AuthContext = createContext<
    {
        user: UserInterface | null,
        token: string | null,
        login: (data: { email: string, password?: string }) => Promise<void>
        register: (data: { name: string, about: string, email: string, phoneNumber: string, password: string,imagePath:string }) => Promise<void>,
        requestforgetpassword:(data:{email:string})=>Promise<void>,
        resetpassword:(data:{resetToken:string,newPassword:string})=>Promise<void>
        logout: () => Promise<void>,
        
    }


>({
    user: null,
    token: null,
    login: async () => { },
    register: async () => { },
    requestforgetpassword:async()=>{},
    resetpassword:async()=>{},
    logout: async () => { },
    
})


const useAuth = () => useContext(AuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {



    const [isLoading, setLoading] = useState(false)
    const [user, setUser] = useState<UserInterface | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const _token = LocalStorage.get("token")
        const _user = LocalStorage.get("user")
        if (_token && _user?._id) {
            setUser(_user)
            setToken(_token)
        }
        setLoading(false)
    }, [])

    const login = async (data: { email: string, password?: string }) => {
        // console.log(data,"this is consoling data")
        await requestHnadler(
            async () => await loginUser(data),
            setLoading,
            (res) => {
                const { data } = res
                console.log(res, "this is response")
                if (res.statusCode == 200) {
                    setUser(data.user)
                    setToken(data.accessToken)
                    LocalStorage.set("user", data.user)
                    LocalStorage.set("token", data.accessToken)
                    navigate("/chat")
                }
            },
            alert
        )
    }

    const register = async (data: { name: string, about: string, email: string, phoneNumber: string, password: string,imagePath:string }) => {
        await requestHnadler(
            async () => await registerUser(data),
            setLoading,
            (res) => {
                const { data } = res
                console.log("this is response", data)
            },
            alert
        )

    }

    const logout = async () => {
        console.log("running logout system")
    }

    const requestforgetpassword=async(data:{email:string})=>{
        await requestHnadler(
            async()=>await requestForgetPassword(data),
            setLoading,
            (res)=>{
                const {data}=res
                console.log("this is data",data)
            },
            alert
        )
    }

    const resetpassword=async(data:{resetToken:string,newPassword:string})=>{
        await requestHnadler(
            async()=>await resetPassword(data),
            setLoading,
            (res)=>{
                const {data}=res
                console.log(data,"this is data")
            },
            alert
        )
    }

   
    return (
        <AuthContext.Provider value={{ user, login, register, logout, token,requestforgetpassword,resetpassword }} >

            {
                isLoading ? 
                (<div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center" >
                    <div>
                    <TailSpin
                    visible={true}
                    height={80}
                    width={80}
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius={1}
                    
                    />
                    </div>
                    <div>
                        <p className="text-xl" >Loading...</p>
                    </div>
                
                </div>) : 
                (children)
            }

        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider, useAuth }
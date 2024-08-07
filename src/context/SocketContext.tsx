import { createContext, useContext, useEffect, useState } from "react";
import socketio from "socket.io-client"
import {LocalStorage} from "../utills/index"


const getSocket=()=>{
    const token=LocalStorage.get("token")
    return socketio("https://jchat-backend.onrender.com/",{
        // withCredentials:true,
        auth:{token}
    })
}

const SocketContext=createContext<{socket:ReturnType<typeof socketio>|null}>({socket:null})

const useSocket=()=>useContext(SocketContext)

const SocketProvider:React.FC<{children:React.ReactNode}> =({children})=>{

    const[socket,setSocket]=useState<ReturnType<typeof socketio>|null>(null)

    useEffect(()=>{
        setSocket(getSocket())
    },[])

    return(
        <SocketContext.Provider value={{socket}} >
            {children}
        </SocketContext.Provider>
    )
}

export {SocketProvider,useSocket}
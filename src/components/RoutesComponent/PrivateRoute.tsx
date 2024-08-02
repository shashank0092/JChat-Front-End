import React,{ReactNode} from "react"
import { Navigate } from "react-router-dom"
import { LocalStorage } from "../../utills"

const PrivateRoute:React.FC<{children:ReactNode}>=({children})=>{
    
    const token=LocalStorage.get("token")
    const user=LocalStorage.get("user")
    console.log(children,"this is childrenms")
    if(!token||!user?._id) return <Navigate to="/login" replace />
    return children as React.ReactElement
}   

export default PrivateRoute
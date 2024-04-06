import {AxiosResponse} from "axios"
import {FreeAPISuccessResponseInterface} from "../interface/api"
import { useNavigate } from "react-router-dom"


export class LocalStorage{
    static get(key:string){
        const value=localStorage.getItem(key)
        if(value){
            try{
                return JSON.parse(value)
            }
            catch(err){
                return err
            }
        }
        return null;
    }

    static set(key:string,value:any){
        localStorage.setItem(key,JSON.stringify(value))
    }

    static remove(key:string){
        localStorage.removeItem(key)
    }

    static clear(){
        localStorage.clear()
    }
}


export const requestHnadler=async(

    api:()=>Promise<AxiosResponse<FreeAPISuccessResponseInterface,any>>  ,
    setLoading:((loading:boolean)=>void)|null,
    onSuccess:(data:FreeAPISuccessResponseInterface)=>void,
    OnError:(error:string)=>void
)=>{

    setLoading && setLoading(true)
    try{
        const response=await api()
        const {data}=response

       
        if(data?.success){
            onSuccess(data)
        }
    }
    catch(err:any){
        
        if([401,403].includes(err?.response.data?.statusCode)){
            localStorage.clear()
            const navigate=useNavigate()
            setLoading && setLoading(false)
            navigate("/login")
        }
        OnError(err?.response?.data?.message||"Something went wrong")
    }
    finally{
        setLoading && setLoading(false)
    }
}
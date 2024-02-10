import { FaGoogle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react"
import {TailSpin} from "react-loader-spinner"
import { useState } from "react";
const LoginGoogle=()=>{
    const[isCustomeLoading,setisCustomeLoading]=useState(false)
    const { loginWithRedirect,user,isLoading }=useAuth0()
    console.log(user,"this is user")
    console.log(isLoading,"this is for loading")

    const handleLogin=async()=>{
        setisCustomeLoading(true)
        try{
            await loginWithRedirect({authorizationParams:{connection:"google-oauth2"}})
        }
        catch(err){
            console.log("An Error Occured While Login",err)
        }
        finally{
            setisCustomeLoading(false)
        }
    }
    return(
        <>
            <button 
                className="bg-red-300 p-5 px-14 flex gap-5 items-center rounded-full text-xl font-some-type-mono font-bold xsm:py-5 xsm:px-5" 
                onClick={handleLogin} 
                disabled={ isCustomeLoading} // Disable button when loading
            > 
                { isCustomeLoading ? (
                    <TailSpin
                        visible={true}
                        height={30}
                        width={80}
                        color="black"
                        ariaLabel="tail-spin-loading"
                        radius={1}
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) : (
                    <>
                        <FaGoogle/>  Google Login <FaArrowRight/>
                    </>
                )}
            </button>
            
        </>
    )
}

export default LoginGoogle;
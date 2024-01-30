import { FaGoogle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react"
const LoginGoogle=()=>{
    const { loginWithRedirect }=useAuth0()
    const { user }=useAuth0()
    console.log(user,"this is user")
    return(
        <>
            <button className="bg-red-300 p-5 px-14 flex gap-5 items-center rounded-full text-xl font-bold xsm:py-5 xsm:px-5" onClick={()=>loginWithRedirect()} > <FaGoogle/>  Google Login <FaArrowRight/> </button>
            ;as;
        </>
    )
}

export default LoginGoogle;
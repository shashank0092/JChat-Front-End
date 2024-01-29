import { FaGoogle } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const LoginGoogle=()=>{
    return(
        <>
            <button className="bg-red-300 p-5 px-14 flex gap-5 items-center rounded-full text-xl font-bold xsm:py-5 xsm:px-5" > <FaGoogle/>  Google Login <FaArrowRight/> </button>
        </>
    )
}

export default LoginGoogle;
import MAINLOGO from "../assets/MainLogo.png"
import { IoMdChatboxes } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoMdVideocam } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
const Navbar=()=>{
    return(
        <>
            <div className="flex items-center justify-between bg-green-300 ml-5 mr-5 mt-5 rounded-full py-3" >
                <div className="w-1/2 " >
                    <img src={MAINLOGO} className="w-1/6" />
                </div>
                <div className="flex gap-5" >
                    <div className="hover:cursor-pointer" >
                        <p className="text-white font-medium text-xl flex items-center gap-2" >Chat <IoMdChatboxes color="black" /> </p>
                    </div>
                    <div className="hover:cursor-pointer" >
                        <p className="text-white font-medium text-xl flex items-center gap-2" >Voice Call <IoCall color="black"/> </p>
                    </div>
                    <div className="hover:cursor-pointer">
                        <p className="text-white font-medium text-xl flex items-center gap-2" >Video Call <IoMdVideocam color="black"/> </p>
                    </div>
                    <div className="hover:cursor-pointer">
                        <p className="text-white font-medium text-xl flex items-center gap-2" >About Us <IoInformationCircle color="black"/> </p>
                    </div>
                    <div>
                        <div className="hover:cursor-pointer">
                            <img src={`https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c`} alt="" className="rounded-full w-1/3" />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Navbar
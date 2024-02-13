
import { IoCall } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
const UserNavbar=()=>{
    return(
        <>
            <div className="flex items-center bg-chat-child-container w-[61.9vw] justify-between py-5 pl-5 pr-20" >
                <div className="flex items-center gap-2" >
                    <div className="" >
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="" className="rounded-full  w-16 "  />
                    </div>
                    <div>
                        <div>
                            <p className="text-white font-some-type-mono text-xl font-bold" >SHASHANK SHUKLA</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-12" >
                      
                        <div className="hover:cursor-pointer">
                            <IoCall size={25} color="white"/>
                        </div>
                        <div className="hover:cursor-pointer">
                            <MdVideoCall size={25} color="white"/>
                        </div>
                        <div className="hover:cursor-pointer">
                            <CiMenuKebab size={25} color="white"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserNavbar
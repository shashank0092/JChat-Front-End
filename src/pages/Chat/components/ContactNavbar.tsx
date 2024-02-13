import { BsChatLeftTextFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
const ContactNavbar = () => {
    return (
        <>
            <div className="flex items-center bg-chat-child-container w-[35vw] justify-between py-5 pl-5 pr-20" >
                <div>
                    <div className="" >
                        <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="" className="rounded-full  w-16 "  />
                    </div>
                </div>
                <div>
                    <div className="flex gap-12" >
                        <div className="hover:cursor-pointer" >
                            <BsChatLeftTextFill size={25} color="white"/>
                        </div>
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

export default ContactNavbar;
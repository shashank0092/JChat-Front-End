import { IoMdSend } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
const ChatFooter=()=>{
    return(
        <>
             <div className="flex items-center bg-chat-child-container w-[61.9vw] justify-between py-3 pl-5 pr-20" >
                <div className="flex items-center gap-5" >
                    <div className="" >
                        <MdEmojiEmotions size={20} color="white" />
                    </div>
                    <div>
                        <div>
                            <FaPlus size={20} color="white"/>
                        </div>
                    </div>
                </div>

                <div className="pl-5" >
                    <div>
                        <input type="text" className="w-[50vw] py-3 bg-[#262B36] outline-none rounded-xl font-some-type-mono text-white" placeholder="Type A Message" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-5 pl-5" >

                        <div className="hover:cursor-pointer bg-green-600 py-2 px-2 rounded-full">
                            <IoMdSend size={20} color="white"/>
                        </div>
                        <div className="hover:cursor-pointer">
                           <FaMicrophone size={20} color="white"/>
                        </div>
                       
                    </div>
                </div>
            </div>          
        </>
    )
}

export default ChatFooter       
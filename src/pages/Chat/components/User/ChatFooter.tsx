import { IoMdSend } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import SendIcon from '@mui/icons-material/Send';
import { FaMicrophone } from "react-icons/fa";
import  { Socket } from "socket.io-client"
import { useState } from "react";
import {ChatListInterface} from "../../../../interface/chat"
import { IconButton } from "@mui/material";
import { LocalStorage, requestHnadler } from "../../../../utills";
import SocketEvents from "../../../../utills/SocketEvents";


const ChatFooter=({socket,currentChat}:{socket:Socket|null,currentChat:ChatListInterface|null})=>{
    const[message,setMessage]=useState("")

    
    const MessageSend=()=>{
        
        if(!currentChat?._id || !socket ) return
        socket.emit(SocketEvents.STOP_TYPING_EVENT,currentChat._id)
        



    }
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
                        <input type="text" className="w-[50vw] py-3 bg-[#262B36] outline-none rounded-xl font-some-type-mono text-white" placeholder="Type A Message" onChange={(e)=>{setMessage(e.target.value)}} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-5 pl-5" >

                        <div className="">
                           <IconButton  sx={{backgroundColor:"green",color:"white"}} onClick={(e)=>MessageSend()}  >
                           <SendIcon  />
                           </IconButton>
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
import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import SendIcon from '@mui/icons-material/Send';
import { FaMicrophone } from "react-icons/fa";
import  { Socket } from "socket.io-client"
import { useEffect, useState } from "react";
import {ChatListInterface} from "../../../../interface/chat"
import { IconButton } from "@mui/material";
import { requestHnadler } from "../../../../utills";
import SocketEvents from "../../../../utills/SocketEvents";
import { SendMessage } from "../../../../api";

const ChatFooter=({socket,currentChat}:{socket:Socket|null,currentChat:ChatListInterface|null})=>{
    const[message,setMessage]=useState("")
    const[isTyping,setIsTyping]=useState(false)
    const[selfTyping,setSelfTyping]=useState(false)

    const handleOnSocketTyping=(chatId:string)=>{
        if(chatId!==currentChat?._id) return
        setIsTyping(true)
        
    }
    const handleOnSocketStopTyping=(chatid:string)=>{
        if(chatid!==currentChat?._id) return
        setIsTyping(false)
    }
    

    useEffect(()=>{
        socket?.on(SocketEvents.TYPING_EVENT,handleOnSocketTyping)
        socket?.on(SocketEvents.STOP_TYPING_EVENT,handleOnSocketStopTyping)

        return()=>{
            socket?.off(SocketEvents.TYPING_EVENT,handleOnSocketTyping)
            socket?.off(SocketEvents.STOP_TYPING_EVENT,handleOnSocketStopTyping)
        }
    },[])

    
    const MessageSend=async()=>{
        
        if(!currentChat?._id || !socket ) {
            console.log(socket,'this is it')
            console.log("indise if block")
            return
        }
        console.log(socket,"this is socket footer")
        console.log(typeof currentChat._id,"this is curr")
        socket.emit(SocketEvents.STOP_TYPING_EVENT,currentChat._id)
        
        await requestHnadler(
            async()=>await SendMessage({chatId:currentChat._id,content:message}),
            null,
            (res)=>{
                setMessage("")
                console.log(res)
            },
            alert

        )
        
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
                           <IconButton  sx={{backgroundColor:"green",color:"white"}} onClick={()=>MessageSend()}  >
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
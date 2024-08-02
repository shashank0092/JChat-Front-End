import Typing from "../../../../../components/Typing/Typing"
import { ChatMessageInterface } from "../../../../../interface/chat"
import ChatDate from "./component/ChatDate"
import { LocalStorage } from "../../../../../utills"
import { useEffect } from "react"


const UserChat=({isTyping,messages}:{isTyping:boolean,messages:ChatMessageInterface[]})=>{
    useEffect(()=>{
        console.log("changing in messages in user chat file",messages)
    },[messages])

    
    return(
        <>
            <div className="px-5 pt-3" >
                <div>
                    <ChatDate/>
                </div>
               {
                messages.length==0?(<></>):(
                    <>
                        <div className="flex flex-col gap-5 " >
                            {
                                messages.map((message:ChatMessageInterface)=>{
                                  return(
                                    <>
                                        {
                                            message.sender?.email==LocalStorage.get("user").email?
                                            (
                                                message.attachments.length>0?(
                                                    message.attachments.map((attachment)=>{
                                                        return(
                                                            <div className="w-1/4  h-1/4 bg-white p-5 rounded-3xl" >
                                                                <img src={attachment.url} alt="send-image" className="h-1/2"   />
                                                            </div>
                                                        )
                                                    })
                                                )
                                                :
                                                (<><div className="bg-white w-fit p-3 rounded-xl " >
                                                <p>{message.content}</p>
                                            </div></>)
                                            ):
                                            (
                                            message.attachments?.length>0?(
                                                message.attachments.map((attachment)=>{
                                                    return(
                                                        <div className="w-1/4 h-1/4 bg-yellow-700 p-5 rounded-3xl" >
                                                            <img src={attachment.url} alt="send-image" className="h-1/2"   />
                                                        </div>
                                                    )
                                                }) 
                                            ):(
                                                <div className="bg-yellow-700 w-fit p-3 rounded-xl place-self-end " >{message.content}</div>
                                            )
                                            )
                                        }
                                    </>
                                  )
                                })
                            }
                        </div>
                    </>
                )
               }
               {
                isTyping?( <> <Typing/> </> ):(<></>)
               }
            </div>
        </>
    )
}

export default UserChat
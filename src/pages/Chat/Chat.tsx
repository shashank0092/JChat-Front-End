import ChatFooter from "./components/ChatFooter"
import ContactNavbar from "./components/ContactNavbar"
import Contacts from "./components/Contacts"
import SearchContact from "./components/SearchContact"
import UserNavbar from "./components/UserNavbar"
import BGIMAGE from "../../assets/chatbg.jpg"
import UserChat from "./components/UserChat"
import io from "socket.io-client"
import { useEffect } from "react"


const Chat = () => {

   useEffect(()=>{
    console.log("there is me")
    const socket=io("http://localhost:8000/")
    return()=>{
        socket.disconnect()
    }
   },[])

    const contactValue=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <>
            <div className="bg-[#0a1014] h-[100vh] w-[100vw]   " >
                <div className="flex  bg-chat-container h-[95vh] absolute w-[97vw] top-5 ml-5 mr-5 gap-[0.1px]" >
                    <div className="flex flex-col gap-5">
                        <div  >
                            <ContactNavbar />
                        </div>
                        <div>
                            <SearchContact/>
                        </div>
                        <div  >
                           <div className="flex flex-col gap-3 overflow-y-auto h-[68vh] scrollbar-none" >
                                {
                                    contactValue.map((key)=>{
                                        return(
                                            <>
                                                <Contacts key={key}  />
                                            </>
                                        )
                                    })
                                }
                           </div>
                        </div>
                    </div>
                    <div className="bg-custome-paper w-[0.1px] h-[95vh]" ></div>
                    <div className="flex flex-col " >
                        <div>
                            <UserNavbar/>
                        </div>
                        <div className=" flex-1 bg-cover bg-center  " style={{backgroundImage:`url(${BGIMAGE})`}} >
                            <UserChat/>
                        </div>
                        <div>
                            <ChatFooter/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
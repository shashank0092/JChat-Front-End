import ChatFooter from "./components/User/ChatFooter";
import ContactNavbar from "./components/Contact/ContactNavbar";
import Contacts from "./components/Contact/Contacts";
import SearchContact from "./components/Contact/SearchContact";
import UserNavbar from "./components/User/UserNavbar";
import BGIMAGE from "../../assets/chatbg.jpg";
import UserChat from "./components/User/UserChat/UserChat";
import {ChatListInterface} from "../../interface/chat"
import SocketEvents from "../../utills/SocketEvents"
import { GetAllChat } from "../../api/index";
import { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../../context/AuthContext";
import { LocalStorage } from "../../utills";
import { useSocket } from "../../context/SocketContext";



interface AvlaibleChat {
    participants: Array<{
        email: string;
        about: string;
        imagePath: string;
        name: string;
        phoneNumber:string,
        createdAt:string,
        updatedAt:string,
        _id:string
    }>;
    admin:string;
    isGroupChat:boolean;
    lastMessage:string|null,
    _id:string;
    name:string;
    createdAt:string,
    updatedAt:string

}

const Chat = () => {

  const {user}=useAuth()
  const {socket}=useSocket()

  const [avliableChats, setAvliableChats] = useState([]);
  const[isConnected,setIsConnected]=useState(false)
  const[chatSelected,setChatSelected]=useState<string>()
  const currentChat=useRef<ChatListInterface|null>(null)

  

  const getChats = async () => {
    const chats = await GetAllChat();
    const res = await chats.data?.data;
    setAvliableChats(res);
    console.log(avliableChats, "this is our all chats");
  };

  const onConnect=()=>{
    setIsConnected(true)
  }

  const onDisConnect=()=>{
    setIsConnected(false)
  }
 

  useEffect(() => {
    getChats();
  }, []);

  useEffect(()=>{},[chatSelected])

  useEffect(()=>{

    if(!socket) return;

    socket.on(SocketEvents.CONNECTED_EVENT,onConnect)
    socket.on(SocketEvents.DISCONNECT_EVENT,onDisConnect)

    return()=>{
      socket.off(SocketEvents.CONNECTED_EVENT,onConnect)
      socket.off(SocketEvents.DISCONNECT_EVENT,onDisConnect)
    }
    
  },[socket,avliableChats])

 
  return (
    <>
      <div className="bg-[#0a1014] h-[100vh] w-[100vw]   ">
        <div className="flex  bg-chat-container h-[95vh] absolute w-[97vw] top-5 ml-5 mr-5 gap-[0.1px]">
          <div className="flex flex-col gap-5">
            <div>
              <ContactNavbar />
            </div>
            <div>
              <SearchContact />
            </div>
            <div>
              <div className="flex flex-col gap-3 overflow-y-auto h-[68vh] scrollbar-none">
                
                
                {

                    avliableChats?
                    (
                        <div>
                            {
                                avliableChats.map((chats:AvlaibleChat)=>{
                                    console.log(chats,"this is chats")
                                    return(
                                        <div className="" >
                                            {
                                                chats.participants.map((participant,key)=>{
                                                    return participant.email!==user?.email?
                                                    (

                                                    <div key={key} className="hover:cursor-pointer" onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>):void=>{
                                                      if(currentChat.current?._id && currentChat.current._id===chats._id) return
                                                      console.log("running else block")
                                                      LocalStorage.set("currentchat",chats)
                                                      setChatSelected(chats._id)
                                                      currentChat.current=chats
                                                    }}   >  
                                                      <Contacts 
                                                      avlaiblechat={participant}   
                                                     

                                                      /> 
                                                    </div> 
                                                    
                                                    ):
                                                    (<></>)
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                    
                    :
                    
                    (<>
                    <div>
                    <div>
                      <TailSpin
                        visible={true}
                        height={80}
                        width={80}
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius={1}
                      />
                    </div>
                    <div>
                      <p className="text-xl">Loading...</p>
                    </div>
                  </div>
                    </>)
                }
            
              </div>
            </div>
          </div>
          <div className="bg-custome-paper w-[0.1px] h-[95vh]"></div>
              {
                chatSelected?(
                  <div className="flex flex-col ">
                  <div>
                    <UserNavbar currentChat={currentChat.current}  />
                  </div>
                  <div
                    className=" flex-1 bg-cover bg-center  "
                    style={{ backgroundImage: `url(${BGIMAGE})` }}
                  >
                    <UserChat />
                  </div>
                  <div>
                    <ChatFooter socket={socket} currentChat={currentChat.current} />
                  </div>
                </div>
                ):(
                  <div>
                    <p>Not Chat Selected</p>
                  </div>
                )
              }
        </div>
      </div>
    </>
  );
};

export default Chat;

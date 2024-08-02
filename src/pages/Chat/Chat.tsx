import ChatFooter from "./components/User/ChatFooter";
import ContactNavbar from "../../components/UI/ContactNavbar";
import Contacts from "../../components/UI/Contacts";
import SearchContact from "../../components/UI/SearchContact";
import UserNavbar from "./components/User/UserNavbar";
import BGIMAGE from "../../assets/chatbg.jpg";
import UserChat from "./components/User/UserChat/UserChat";
import { ChatListInterface, ChatMessageInterface } from "../../interface/chat";
import SocketEvents from "../../utills/SocketEvents";
import { GetAllChat, getAllMessages } from "../../api/index";
import { useEffect, useRef, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "../../context/AuthContext";
import { LocalStorage, requestHnadler } from "../../utills";
import { useSocket } from "../../context/SocketContext";

interface AvlaibleChat {
  participants: Array<{
    email: string;
    about: string;
    imagePath: string;
    name: string;
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    _id: string;
  }>;
  admin: string;
  isGroupChat: boolean;
  lastMessage: string | null;
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Chat = () => {
  const { user } = useAuth();
  const { socket } = useSocket();

  const [avliableChats, setAvliableChats] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [chatSelected, setChatSelected] = useState<string>();
  const [messages, setMessages] = useState<ChatMessageInterface[]>([]);
  const [unreadMessage, setUnReadMessage] = useState<ChatMessageInterface[]>(
    []
  );
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const currentChat = useRef<ChatListInterface | null>(null);

  console.log(loadingMessage,isConnected,unreadMessage)

  const getChats = async () => {
    const chats = await GetAllChat();
    const res = await chats.data?.data;
    setAvliableChats(res);
  };

  const onConnect = () => {
    setIsConnected(true);
  };

  const onDisConnect = () => {
    setIsConnected(false);
  };

  const onMessageRecived = (message: ChatMessageInterface) => {
    console.log(message, "i am getting message");
    if (message.chat !== currentChat.current?._id) {
      setUnReadMessage((prev) => [message, ...prev]);
    } else {
      setMessages((prev) => [...prev, message]);
    }
  };

  const getMessages = async () => {
    if (!currentChat.current?._id) return ""
    if (!socket) return alert("Not getting socket");
    socket.emit(SocketEvents.JOIN_CHAT_EVENT, currentChat.current._id);
    if (currentChat.current._id) {
      requestHnadler(
        async () => getAllMessages(currentChat.current?._id),
        setLoadingMessage,
        (res) => {
          setMessages(res.data.data);
        },
        alert
      );
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    console.log("changes happing in messages");
  }, [messages]);

  useEffect(() => {
    getMessages();
  }, [currentChat.current?._id]);
  const [isTyping, setIsTyping] = useState(false);

  const handleOnSocketTyping = (chatId: string) => {
    if (chatId !== currentChat.current?._id) {
      return;
    }
    setIsTyping(true);
  };
  const handleOnSocketStopTyping = (chatid: string) => {
    if (chatid !== currentChat.current?._id) {
      return;
    }
    setIsTyping(false);
  };

  useEffect(() => {
    if (!socket) return;
    socket.on(SocketEvents.CONNECTED_EVENT, onConnect);
    socket.on(SocketEvents.DISCONNECT_EVENT, onDisConnect);
    socket.on(SocketEvents.MESSAGE_RECEIVED_EVENT, onMessageRecived);
    socket?.on(SocketEvents.TYPING_EVENT, handleOnSocketTyping);
    socket?.on(SocketEvents.STOP_TYPING_EVENT, handleOnSocketStopTyping);

    return () => {
      socket.off(SocketEvents.CONNECTED_EVENT, onConnect);
      socket.off(SocketEvents.DISCONNECT_EVENT, onDisConnect);
      socket.off(SocketEvents.MESSAGE_RECEIVED_EVENT, onMessageRecived);
      socket?.on(SocketEvents.TYPING_EVENT, handleOnSocketTyping);
      socket?.on(SocketEvents.STOP_TYPING_EVENT, handleOnSocketStopTyping);
    };
  }, [socket]);

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
                {avliableChats ? (
                  <div>
                    {avliableChats.map((chats: AvlaibleChat) => {
                      return (
                        <div className="" key={chats._id}>
                          {chats.participants.map((participant, key) => {
                            return participant.email !== user?.email ? (
                              <div
                                key={key}
                                className="hover:cursor-pointer  "
                                onClick={(): void => {
                                  if (
                                    currentChat.current?._id &&
                                    currentChat.current._id === chats._id
                                  )
                                    return;
                                  LocalStorage.set("currentchat", chats);
                                  setChatSelected(chats._id);
                                  currentChat.current = chats;
                                }}
                              >
                                <Contacts
                                  avlaiblechat={participant}
                                  socket={socket}
                                />
                                <div className="border-b-2 border-black ml-5 mr-5" ></div>
                              </div>
                            ) : (
                              <></>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="bg-custome-paper w-[0.1px] h-[95vh] "></div>
          {chatSelected ? (
            <div className="flex flex-col ">
              <div>
                <UserNavbar currentChat={currentChat.current} />
              </div>
              <div
                className=" flex-1 bg-cover bg-center overflow-y-auto"
                style={{ backgroundImage: `url(${BGIMAGE})` }}
              >
                <UserChat isTyping={isTyping} messages={messages} />
              </div>
              <div>
                <ChatFooter
                  socket={socket}
                  currentChat={currentChat.current}
                  setMessages={setMessages}
                  messages={messages}
                  attachedFiles={attachedFiles}
                  setAttachedFiles={setAttachedFiles}
                />
              </div>
            </div>
          ) : (
            <div>
              <p>Not Chat Selected</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;

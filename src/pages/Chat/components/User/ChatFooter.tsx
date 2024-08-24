import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from '@mui/icons-material/Description';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Socket } from "socket.io-client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  ChatListInterface,
  ChatMessageInterface,
} from "../../../../interface/chat";
import { IconButton } from "@mui/material";
import { requestHnadler } from "../../../../utills";
import SocketEvents from "../../../../utills/SocketEvents";
import { SendMessage } from "../../../../api";
import VoiceRecorder from "../../../../components/VoiceRecorder/VoiceRecorder";


const ChatFooter = ({
  socket,
  currentChat,
  setMessages,
  messages,
  setAttachedFiles,
  attachedFiles,
}: {
  socket: Socket | null;
  currentChat: ChatListInterface | null;
  setMessages: Dispatch<SetStateAction<ChatMessageInterface[]>>;
  messages: ChatMessageInterface[];
  setAttachedFiles: Dispatch<SetStateAction<File[]>>;
  attachedFiles: File[];
}) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selfTyping, setSelfTyping] = useState(false);
  const [docsModal, setDocsModal] = useState(false)
  const[fileacceptType,setFileAcceptType]=useState("")
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const[filePreviewModal,setFilePreViewModal]=useState({ preview:false,name:"" })
  const [uploadedImageSrc, SetUploadedImageSrc] = useState<
    string | undefined
  >();

  console.log(isTyping)

  const handleOnSocketTyping = (chatId: string) => {
    if (chatId !== currentChat?._id) {
      return;
    }

    setIsTyping(true);
  };
  const handleOnSocketStopTyping = (chatid: string) => {
    if (chatid !== currentChat?._id) {
      return;
    }

    setIsTyping(false);
  };

  useEffect(() => {
    if (socket) {
      socket?.on(SocketEvents.TYPING_EVENT, handleOnSocketTyping);
      socket?.on(SocketEvents.STOP_TYPING_EVENT, handleOnSocketStopTyping);
    } else {
      console.log("socket is not working");
    }
    if (socket) {
      return () => {
        socket?.off(SocketEvents.TYPING_EVENT, handleOnSocketTyping);
        socket?.off(SocketEvents.STOP_TYPING_EVENT, handleOnSocketStopTyping);
      };
    }
  }, [socket]);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      MessageSend();
    }
  };

  const MessageSend = async () => {
    if (!currentChat?._id || !socket) {
      return;
    }
    socket.emit(SocketEvents.STOP_TYPING_EVENT, currentChat._id);

    await requestHnadler(
      async () =>
        await SendMessage({
          chatId: currentChat._id,
          content: message,
          attachments: attachedFiles,
        }),
      null,
      (res) => {
        console.log(res, "this is response after sending message");
        setMessage("");
        setAttachedFiles([]);
        SetUploadedImageSrc(undefined)
        setFilePreViewModal({name:"",preview:false})
        console.log(res.data.data, "this is response of my image")
        setMessages((prev) => [...prev, res.data.data]);
        console.log(res, "this is after sending message");
        console.log(messages, "this is messages statat after sending message");
      },
      alert
    );
  };
  const handleTypingMessageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(e.target.value);
    if (!socket) return;

    if (!selfTyping) {
      setSelfTyping(true);
      socket.emit(SocketEvents.TYPING_EVENT, currentChat?._id);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    const timerlength = 3000;
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit(SocketEvents.STOP_TYPING_EVENT, currentChat?._id);

      setSelfTyping(false);
    }, timerlength);
  };
  const handleImageChange = (e:any) => {
    console.log("handling image change")
    if (e.target.files) {
      console.log(...e.target.files,"this is cale ")
      let value={...e.target.files}

      if(!(value[0].type.includes("image")) && !(value[0].type.includes("video")) ){
        setFilePreViewModal({name:value[0].name,preview:true})
      }
      console.log("this is type of data",value)
      setAttachedFiles([...e.target.files]);
    }
  };

  useEffect(() => {
    
    const image = document.getElementById(
      "uploadedImage"
    ) as HTMLImageElement;
    if (image) {
      console.log(image,"this is image")
      attachedFiles.map((file) => {
        
        if(file.type.includes("image") || file.type.includes("video") ){
          const IMGEURL = URL.createObjectURL(file);
          console.log("this is image url",IMGEURL)
          SetUploadedImageSrc(IMGEURL);
          image.src = URL.createObjectURL(file);
          return "";
        }
        else{
          console.log("this is setup working")

          setFilePreViewModal({name:file.name,preview:true})
        }
      });
    }
  }, [attachedFiles])

  return (
    <>
      <div className="flex items-center bg-chat-child-container w-[61.9vw] justify-between py-3 pl-5 pr-20">
        <div className="flex items-center gap-5">
          <div className="">
            <MdEmojiEmotions size={20} color="white" />
          </div>
          <div>
            <div className="absolute bottom-[8vh] left-[36vw]">
             {
              fileacceptType=="image/*"|| uploadedImageSrc?
              (<>
                <img
                src={uploadedImageSrc}
                alt=""
                id="uploadedImage"
                className="h-1/2 w-1/2"
              />
              </>):(<></>)
             }

             {
              fileacceptType=="video/*"?
              (<>
                 
                  <div className=" w-2/3 " >
                   <video  id="uploadedImage" className={`rounded-xl ${uploadedImageSrc?"flex":"hidden"}`} controls loop muted>
                    <source src={uploadedImageSrc} type="video/*"/>
                  </video>
                 </div>
                  
                 
              </>):
              (<></>)
             }

             {
              filePreviewModal.preview?(
                <div className="bg-chat-child-container flex flex-col justify-center items-center p-5 gap-10 rounded-lg" >
                  <div>
                      <DescriptionIcon sx={{color:"white",fontSize:70}} />
                  </div>
                  <div>
                    <p className="text-white text-sm" >{filePreviewModal.name}</p>
                  </div>
                </div>
              ):(<></>)
             }
            </div>
            <div>
              <input
                id="attachments"
                type="file"
                value=""
                accept={fileacceptType}
                multiple
                max={5}
                hidden
                onChange={(e) => handleImageChange(e)}
              />

              <div className={`${docsModal ? "flex absolute bg-slate-500  bottom-14 left-[35vw] rounded-xl " : "hidden"}`} >
                <div className="flex flex-col gap-2  pl-5 pr-5">
                  <label htmlFor="attachments" 
                  onClick={()=>{
                    setFileAcceptType(".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .rtf")
                    setDocsModal(false)}} 
                  className="hover:cursor-pointer"
                  >
                    <div className="flex gap-3 border-b-[1px] p-5" >
                      <div>
                        <DocumentScannerIcon sx={{ fontSize: 25, color: "silver" }} />
                      </div>
                      <div>
                        <p className="text-white font-some-type-mono" >Docs</p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="attachments" 
                     onClick={()=>{
                      setFileAcceptType("image/*")
                      setDocsModal(false)
                    }}
                    className="hover:cursor-pointer">
                    <div className="flex gap-3 border-b-[1px] p-5" >
                      <div>
                        <ImageIcon sx={{ fontSize: 25, color: "orange" }} />
                      </div>
                      <div>
                        <p className="text-white font-some-type-mono" >Images</p>
                      </div>
                    </div>
                  </label>
                  <label 
                    htmlFor="attachments"  
                    onClick={()=>{
                      setFileAcceptType("video/*")
                      setDocsModal(false)
                    }}
                    className="hover:cursor-pointer">
                    <div className="flex gap-3 border-b-[1px] p-5" >
                      <div>
                        <VideocamIcon sx={{ fontSize: 25, color: "navy" }} />
                      </div>
                      <div>
                        <p className="text-white font-some-type-mono" >Videos</p>
                      </div>
                    </div>
                  </label>
                  <label 
                    htmlFor="attachments" 
                    onClick={()=>{
                      setFileAcceptType("*/*")
                      setDocsModal(false)
                    }}
                    className="hover:cursor-pointer">
                    <div className="flex gap-3  p-5" >
                      <div>
                        <AttachFileIcon sx={{ fontSize: 25 }} />
                      </div>
                      <div>
                        <p className="text-white font-some-type-mono" >Other</p>
                      </div>

                    </div>
                  </label>
                </div>
              </div>
              <FaPlus size={20} color="white" className="hover:cursor-pointer" onClick={() => setDocsModal(!docsModal)} />
            </div>
          </div>
        </div>

        <div className="pl-5">
          <div>
            <input
              type="text"
              className="w-[48vw] py-3 bg-[#262B36] outline-none rounded-xl font-some-type-mono text-white"
              placeholder="Type A Message"
              value={message}
              onChange={(e) => {
                handleTypingMessageChange(e);
              }}
              onKeyDown={(e) => handleEnter(e)}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 pl-5">
            <div className="">
              <IconButton
                sx={{ backgroundColor: "green", color: "white" }}
                onClick={MessageSend}
              >
                <SendIcon />
              </IconButton>
            </div>
            <div>
              <VoiceRecorder
                message={message}
                setMessage={setMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatFooter;

import { MdEmojiEmotions } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import SendIcon from "@mui/icons-material/Send";
import { FaMicrophone } from "react-icons/fa";
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
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
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
  const handleImageChange = (e: any) => {
    console.log("handling image change")
    if (e.target.files) {
      setAttachedFiles([...e.target.files]);
    }
  };

  useEffect(()=>{
    const image = document.getElementById(
        "uploadedImage"
      ) as HTMLImageElement;
      if (image) {
        attachedFiles.map((file) => {
        console.log(file,'this is file name')
          const IMGEURL = URL.createObjectURL(file);
          SetUploadedImageSrc(IMGEURL);
          image.src = URL.createObjectURL(file);
          return "";
        });
      }
  },[attachedFiles])

  return (
    <>
      <div className="flex items-center bg-chat-child-container w-[61.9vw] justify-between py-3 pl-5 pr-20">
        <div className="flex items-center gap-5">
          <div className="">
            <MdEmojiEmotions size={20} color="white" />
          </div>
          <div>
            <div className="absolute bottom-[8vh] left-[36vw]">
              <img
                src={uploadedImageSrc}
                alt=""
                id="uploadedImage"
                className="h-1/2 w-1/2"
              />
            </div>
            <div>
              <input
                id="attachments"
                type="file"
                value=""
                multiple
                max={5}
                hidden
                onChange={(e) => handleImageChange(e)}
              />
              <label htmlFor="attachments" className="hover:cursor-pointer">
                <FaPlus size={20} color="white" />
              </label>
            </div>
          </div>
        </div>

        <div className="pl-5">
          <div>
            <input
              type="text"
              className="w-[50vw] py-3 bg-[#262B36] outline-none rounded-xl font-some-type-mono text-white"
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
          <div className="flex items-center gap-5 pl-5">
            <div className="">
              <IconButton
                sx={{ backgroundColor: "green", color: "white" }}
                onClick={MessageSend}
              >
                <SendIcon />
              </IconButton>
            </div>
            <div className="hover:cursor-pointer">
              <FaMicrophone size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatFooter;

import { useEffect, useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import SocketEvents from "../../utills/SocketEvents";
import CallIcon from '@mui/icons-material/Call';
import { Socket } from "socket.io-client"
import { IconButton, Tooltip } from "@mui/material";



interface Attachment {
  url: string;
  type: string;
  name:string;
  size:Number
}
const Contacts = ({ avlaiblechat, socket, isVoiceCall }:
  { avlaiblechat: { email: string; about: string; attachment: [Attachment]; name: string;mediaLink:{url: string; type: string,name:string,size:Number}[]; }, socket: Socket | null, isVoiceCall?: boolean | false }) => {

  const onMessageReceived = () => {

  }
  useEffect(() => {
    socket?.on(SocketEvents.MESSAGE_RECEIVED_EVENT, onMessageReceived)

    return () => {
      socket?.on(SocketEvents.MESSAGE_RECEIVED_EVENT, onMessageReceived)
    }
  }, [])
  
  return (
    <>
      <div>
        <div className="flex justify-between  py-4 ml-5 mr-5 bg-chat-child-container items-center">
          <div className="flex gap-5 items-center">
            <div className="">
              <div className="w-fit ">
                <img src={avlaiblechat.mediaLink[0].url} alt="" width={40} className="rounded-lg" />
              </div>
            </div>
            <div className="">
              <div>
                <p className="text-white text-lg font-some-type-mono">{avlaiblechat.name}</p>
              </div>
              <div className={`${isVoiceCall ? "hidden" : "flex items-center"}`} >
                <div>
                  <IoMdDoneAll color="blue" />
                </div>
                <div>
                  <p className="text-chat-text font-thin text-sm font-some-type-mono ">
                    You:Some Last Text
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-5">
            <div className={`${isVoiceCall ? "hidden" : ""}`} >
              <p className="text-chat-text text-sm font-some-type-mono">
                04/12/2023
              </p>
            </div>
            <div className={`${isVoiceCall?"flex":"hidden"} `}  >
              <Tooltip title="Make Call"   >
                <IconButton sx={{ color: "green" }}   >
                  <CallIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

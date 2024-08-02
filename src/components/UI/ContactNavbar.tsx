import Tooltip from "@mui/material/Tooltip"
import { IconButton } from "@mui/material";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicModal from "../Base/Modal";
import AddChat from "../Forms/AddChatComponet/AddChat";
import { useEffect, useState } from "react";
import MessageIcon from '@mui/icons-material/Message';
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";





const ContactNavbar = () => {

    const[ModalState,setModalState]=useState(false)
    const[currentLink,setCurrentLink]=useState<string>("")
    const navigate=useNavigate()
    const location=useLocation()
    useEffect(()=>{
       setCurrentLink( location.pathname.split("/")[1])
    },[])
    const OpenModal=()=>{
        setModalState(true)
    }

    const {user}=useAuth()

    const URL_END_POINT=import.meta.env.VITE_IMAGE_URL_END_POINT
    const IMAGE_PATH=user?.imagePath
   
    return (
        <>
            <div className="flex items-center bg-chat-child-container w-[35vw] justify-between py-5 pl-5 pr-20" >
                <div>
                    <div >
                        {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="" className="rounded-full  w-16 " /> */}
                        {
                            // URL_END_POINT && IMAGE_PATH ?
                            // (
                            //     <IKImage
                            //     urlEndpoint={URL_END_POINT}
                            //     path={IMAGE_PATH}
                            //     className="rounded-full  w-16 "
                            //     /> 
                            // ):
                            // (<></>)
                        }
                        <img src={`${URL_END_POINT}/${IMAGE_PATH}`} alt="" className="rounded-full  w-16 " />
                    </div>
                    <BasicModal ModalState={ModalState}   >
                        <AddChat  setModalState={setModalState} />
                    </BasicModal>
                </div>
                <div>
                    <div className="flex gap-12" >
                        <div  >
                            <Tooltip title="Add Chat"   >
                                <IconButton sx={{color:"white"}} onClick={OpenModal}  >
                                    <PersonAddAlt1RoundedIcon sx={{fontSize:"30px"}}  />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className={`${currentLink=="chat"?("bg-chat-container p-1 rounded-lg"):("")}`} >
                            <Link to="/chat" >
                                <Tooltip title="Chats"   >
                                    <IconButton sx={{color:"white"}} onClick={()=>navigate("/chat")}  >
                                        <MessageIcon sx={{fontSize:"30px"}}  />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={`${currentLink=="voiceCall"?("bg-chat-container p-1 rounded-lg"):("")}`} >
                            <Link to="/voiceCall" >
                                <Tooltip title="Voice Call Logs" >
                                    <IconButton sx={{color:"white"}} onClick={()=>navigate("/voiceCall")}  >
                                        <LocalPhoneIcon sx={{fontSize:"30px"}}  />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={`${currentLink=="videoCall"?("bg-chat-container p-1 rounded-lg"):("")}`} >
                            <Tooltip title="Video Call Logs"  >
                                <Link to="/videoCall" >
                                <IconButton  sx={{color:"white"}} >
                                    <VideocamIcon sx={{fontSize:"30px"}} />
                                </IconButton>
                                </Link>
                            </Tooltip>
                        </div>
                        <div >
                            <Tooltip title="Options" >
                                <IconButton sx={{color:"white"}}>
                                    <MoreVertIcon sx={{fontSize:"30px"}} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactNavbar;
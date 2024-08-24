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

    const [ModalState, setModalState] = useState(false)
    const [currentLink, setCurrentLink] = useState<string>("")
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        setCurrentLink(location.pathname.split("/")[1])
    }, [])
    const OpenModal = () => {
        setModalState(true)
    }
    const { user } = useAuth()
    console.log(user?.mediaLink[0].url)
    

    return (
        <>
            <div className="flex items-center bg-chat-child-container w-[35vw] justify-between py-5 pl-5 pr-20" >
                <div>
                    <div className="w" >
                        <img src={user?.mediaLink[0].url} alt="" className="rounded-full   " />
                    </div>

                </div>
                <div>
                    <div className="flex gap-10" >
                        <div>
                            <BasicModal ModalState={ModalState}   >
                                <AddChat setModalState={setModalState} />
                            </BasicModal>
                        </div>
                        <div  >
                            <Tooltip title="Add Chat"   >
                                <IconButton sx={{ color: "white" }} onClick={OpenModal}  >
                                    <PersonAddAlt1RoundedIcon sx={{ fontSize: "25px" }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className={`${currentLink == "chat" ? ("bg-chat-container p-1 rounded-lg") : ("")}`} >
                            <Link to="/chat" >
                                <Tooltip title="Chats"   >
                                    <IconButton sx={{ color: "white" }} onClick={() => navigate("/chat")}  >
                                        <MessageIcon sx={{ fontSize: "25px" }} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={`${currentLink == "voiceCall" ? ("bg-chat-container p-1 rounded-lg") : ("")}`} >
                            <Link to="/voiceCall" >
                                <Tooltip title="Voice Call Logs" >
                                    <IconButton sx={{ color: "white" }} onClick={() => navigate("/voiceCall")}  >
                                        <LocalPhoneIcon sx={{ fontSize: "25px" }} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        </div>
                        <div className={`${currentLink == "videoCall" ? ("bg-chat-container p-1 rounded-lg") : ("")}`} >
                            <Tooltip title="Video Call Logs"  >
                                <Link to="/videoCall" >
                                    <IconButton sx={{ color: "white" }} >
                                        <VideocamIcon sx={{ fontSize: "25px" }} />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        </div>
                        <div >
                            <Tooltip title="Options" >
                                <IconButton sx={{ color: "white" }}>
                                    <MoreVertIcon sx={{ fontSize: "30px" }} />
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
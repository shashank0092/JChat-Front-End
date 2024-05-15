import Tooltip from "@mui/material/Tooltip"
import { IconButton } from "@mui/material";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BasicModal from "../../../../components/Base/Modal";
import AddChat from "../../../../components/Forms/AddChatComponet/AddChat";
import { useState } from "react";
import {IKImage} from "imagekitio-react"
import { useAuth } from "../../../../context/AuthContext";




const ContactNavbar = () => {

    const[ModalState,setModalState]=useState(false)
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
                        <div >
                            <Tooltip title="Voice Call Logs" >
                                <IconButton sx={{color:"white"}}  >
                                    <LocalPhoneIcon sx={{fontSize:"30px"}}  />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div >
                            <Tooltip title="Video Call Logs" >
                                <IconButton  sx={{color:"white"}}>
                                    <VideocamIcon sx={{fontSize:"30px"}} />
                                </IconButton>
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
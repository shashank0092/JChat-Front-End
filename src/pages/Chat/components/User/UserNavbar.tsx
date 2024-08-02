
import { IoCall } from "react-icons/io5";
import { MdVideoCall } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import {ChatListInterface,ChatUserDetails} from "../../../../interface/chat"
import { useAuth } from "../../../../context/AuthContext";




const UserNavbar=({currentChat}:{currentChat:ChatListInterface|null})=>{


    const {user}=useAuth()
    // const IMAGE_URL_END_POINT=import.meta.env.VITE_IMAGE_URL_END_POINT
    const participant=currentChat?.participants.map((participant:ChatUserDetails)=>
    {
        if(participant.email!==user?.email){
            return participant
        }
    }
    ).filter((participent)=>participent!==undefined)
    return(
        <>
            <div className="flex items-center bg-chat-child-container w-[61.9vw] justify-between py-5 pl-5 pr-20" >
                <div className="flex items-center gap-2" >
                    <div className="" >
                        {/* <img src="https://lh3.googleusercontent.com/a/ACg8ocIeLMQsUtbkaibpEqjroWbELP2mTaJ32VV-8mYzUjn7SRo=s96-c" alt="" className="rounded-full  w-16 "  /> */}
                        {
                            // IMAGE_URL_END_POINT && participant?(
                            //     <IKImage
                            //     urlEndpoint={IMAGE_URL_END_POINT}
                            //     path={participant[0]?(participant[0].imagePath):("")}
                            //     width={30}
                            //     className="rounded-full"
                            //     />
                            // ):(<></>)
                        }
                        <img 
                        // src={`${IMAGE_URL_END_POINT}/${participant[0]?(participant[0].imagePath):("")}`} 
                        // src={`${IMAGE_URL_END_POINT}/`}
                        width={30}
                        className="rounded-full" 
                        alt="" />
                    </div>
                    <div>
                        <div>
                            <p className="text-white font-some-type-mono text-xl font-bold" > {participant && participant[0] ? participant[0].name : ""} </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-12" >
                      
                        <div className="hover:cursor-pointer">
                            <IoCall size={25} color="white"/>
                        </div>
                        <div className="hover:cursor-pointer">
                            <MdVideoCall size={25} color="white"/>
                        </div>
                        <div className="hover:cursor-pointer">
                            <CiMenuKebab size={25} color="white"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserNavbar
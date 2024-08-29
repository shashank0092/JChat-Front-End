import React, { Dispatch, SetStateAction } from "react"
import {Attachment} from "../../../interface/chat"


interface AvailableUser{
    email:string,
    name:string,
    mediaLink:[Attachment],
    _id:string
  }
interface UserDetailsProp{
    details:[AvailableUser],
    setSelectedUser:Dispatch<SetStateAction<string|undefined>>,
    selectedGroupMember:Array<AvailableUser>,
    setSelectedGroupMember:Dispatch<SetStateAction<Array<AvailableUser>>>,
    isGroupChat:boolean
    
}

const UserDetails:React.FC<UserDetailsProp> =({details,setSelectedUser,setSelectedGroupMember,isGroupChat})=>{
    
    
    return(
        <>
            <div className=" flex flex-col  pr-8  "  >
                {
                    details.map((detail)=>{
                       

                        return(
                            <div className="flex gap-2 bg-white border rounded-full hover:cursor-pointer hover:border-black 
                            " onClick={()=> isGroupChat?(setSelectedGroupMember((selectedGroupMember)=>[...selectedGroupMember, detail])):(setSelectedUser(detail.email))  }  >
                                <div className="" >
                
                                    <img
                                    src={detail.mediaLink[0].url}
                                    width={35}
                                    height={35}
                                    className="rounded-full"
                                    />
                                </div>
                                <div  >
                                    <div>
                                        <p className="font-some-type-mono text-base" >{detail.name}</p>
                                    </div>
                                    <div>
                                        <p className="font-some-type-mono text-sm" >{detail.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default UserDetails
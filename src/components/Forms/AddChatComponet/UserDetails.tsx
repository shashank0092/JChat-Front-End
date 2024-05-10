import React, { Dispatch, SetStateAction } from "react"
import { IKImage } from 'imagekitio-react';
interface UserDetailsProp{
    details:{
        imagePath:string,
        email:string,
        name:string,
        _id:string

    }[],
    setSelectedUser:Dispatch<SetStateAction<string|undefined>>,
    selectedGroupMember:Array<{imagePath:string,name:string,email:string,_id:string}>,
    setSelectedGroupMember:Dispatch<SetStateAction<Array<{ imagePath: string, name: string,email:string,_id:string }>>>,
    isGroupChat:boolean
    
}

const UserDetails:React.FC<UserDetailsProp> =({details,setSelectedUser,setSelectedGroupMember,isGroupChat})=>{
    console.log("this is details",details)

    
    return(
        <>
            <div className=" flex flex-col  pr-8  "  >
                {
                    details.map((detail)=>{
                        console.log(detail?.imagePath,"this is image path")

                        return(
                            <div className="flex gap-2 bg-white border rounded-full hover:cursor-pointer hover:border-black 
                            " onClick={()=> isGroupChat?(setSelectedGroupMember((selectedGroupMember)=>[...selectedGroupMember, detail])):(setSelectedUser(detail.email))  }  >
                                <div className="" >
                
                                    <IKImage
                                    urlEndpoint={import.meta.env.VITE_IMAGE_URL_END_POINT}
                                    path={detail.imagePath}
                                    width={35}
                                    height={35}
                                    className="rounded-full  "
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
import { Modal } from "@mui/material";
import React from "react";



    const BasicModal: React.FC<{children:React.ReactElement,ModalState:boolean}> =({children,ModalState})=>{
    
   
  
    return(
        <>
            <Modal
            open={ModalState}
            
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 bg-chat-child-container border-2 border-black shadow-md p-4" >
                {children}
                </div>
            </Modal>
        </>
    )
}

export default BasicModal
//@ts-nocheck
import {createContext,useContext,useState} from "react"
//@ts-ignore
const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{
    const[userDetails,setUserDetails]=useState(null);
    return(
        <>
            <GlobalContext.Provider value={{userDetails,setUserDetails}}  >
                {children}
            </GlobalContext.Provider>
        </>
       
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);
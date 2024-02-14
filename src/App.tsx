import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Chat from "./pages/Chat/Chat"
import React from "react"
import Details from "./pages/Details/Details"

const App:React.FC=()=>{
  console.log(import.meta.env.VITE_APP_URL,"this is main env")
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
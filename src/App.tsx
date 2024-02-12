import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Chat from "./pages/Chat/Chat"
import Product from "./pages/Product/Product"
import Pricing from "./pages/Pricing/Pricing"
import React from "react"
import Details from "./pages/Details/Details"

const App:React.FC=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
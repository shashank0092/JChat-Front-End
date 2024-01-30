import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Chat from "./pages/Chat/Chat"
import Product from "./pages/Product/Product"

const App=()=>{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path="/product" element={<Product/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
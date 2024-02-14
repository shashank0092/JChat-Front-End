import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {GlobalContextProvider} from "./context/store"
import AuthZeroProvider from './Providers/AuthZeroProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  
    <GlobalContextProvider>
      <AuthZeroProvider>
      <App/>
    </AuthZeroProvider>
    </GlobalContextProvider>

 
  
)

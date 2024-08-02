import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthZeroProvider from './Providers/AuthZeroProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'
import { SocketProvider } from './context/SocketContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(



  <>
  
        <BrowserRouter>
            <AuthZeroProvider>
              <AuthProvider>
                <SocketProvider>
                  <App/>
                </SocketProvider>
              </AuthProvider>
            </AuthZeroProvider>
        </BrowserRouter>
       
    

  </>



)

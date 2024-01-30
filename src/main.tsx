import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root')!).render(

   <Auth0Provider
   domain="dev-vqn0jgptt0m34bjk.us.auth0.com"
   clientId="b4ldd9FATnPnL8hO8DhrW8ERV2H4mTm1"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}
   >
     <App />
   </Auth0Provider>
  ,
)

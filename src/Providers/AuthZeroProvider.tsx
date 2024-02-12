import { Auth0Provider } from "@auth0/auth0-react"
import React from "react"

interface AuthZeroProviderProps {
  children: React.ReactNode
}

const AuthZeroProvider = ({ children }: AuthZeroProviderProps) => {
  return (
    <Auth0Provider
      domain="dev-vqn0jgptt0m34bjk.us.auth0.com"
      clientId="dfVE4ZnJXJlLGwFDMnVRqibca4c7g3lk"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {children}
    </Auth0Provider>
  )
}

export default AuthZeroProvider
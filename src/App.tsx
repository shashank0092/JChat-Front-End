import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Chat from "./pages/Chat/Chat"
import React from "react"
import Register from "./pages/Register/Register"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import { useAuth } from "./context/AuthContext"
import PrivateRoute from "./components/RoutesComponent/PrivateRoute"
import PublicRoute from "./components/RoutesComponent/PublicRoute"
import VoiceCall from "./pages/VoiceCall/VoiceCall"
import VideoCall from "./pages/VideoCall/VideoCall"





const App: React.FC = () => {
  const { token, user } = useAuth()
  return (
    <>
  

      <Routes>

        <Route
          path="/"
          element={
            token && user?._id ? (
              <Navigate to="/chat" />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>

       
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />

        <Route
        path="/voiceCall"
        element={
          <PrivateRoute>
            <VoiceCall/>
          </PrivateRoute>
        }
        />

      <Route
        path="/videoCall"
        element={
          <PrivateRoute>
            <VideoCall/>
          </PrivateRoute>
        }
        />

        <Route
        path="/login"
        element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
        }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
        path="/forget-password/:resetToken?"
        element={
          <PublicRoute>
            <ForgetPassword/>
          </PublicRoute>
        }
        />
      </Routes>

    </>
  )
}

export default App
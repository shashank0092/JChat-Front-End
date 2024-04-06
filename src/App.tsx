import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Chat from "./pages/Chat/Chat"
import React from "react"
import Register from "./pages/Register/Register"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import { useAuth } from "./context/AuthContext"
import PrivateRoute from "./components/RoutesComponent/PrivateRoute"
import PublicRoute from "./components/RoutesComponent/PublicRoute"



const App: React.FC = () => {
  console.log(import.meta.env.VITE_APP_URL, "this is main env")
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
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import "./styles/App.css"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { AuthContext } from './context/AuthContext'
import { useContext } from "react"

export const App = () => {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
  }

  return (
    <BrowserRouter>
    <Routes path="/">
      <Route 
      index
       element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="login" element = {<Login/>}/>
      <Route path="register" element = {<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}


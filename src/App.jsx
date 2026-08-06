import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Transaction from './pages/Transaction'
import { GoogleLogin } from '@react-oauth/google'
import Signinform from './pages/Signin'
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/signin" element={<Signinform />} />
        <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

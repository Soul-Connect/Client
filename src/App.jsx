import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { AutchLayout } from './components/Layouts/AuthLayout/AuthLayout'
import { Mainlayout } from './components/Layouts/MainLayout/Mainlayout'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { RegustrationPage } from './pages/RegistrationPage'

import './App.css'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AutchLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='/Registration' element={<RegustrationPage />} />
        </Route>
        <Route path="/main" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
        </Route>
        </Routes>
      
       
    </div>

    
  )
}

export default App

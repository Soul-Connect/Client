import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { AutchLayout } from './Components/Layouts/AuthLayout/AuthLayout'
import { Mainlayout } from './Components/Layouts/MainLayout/Mainlayout'
import { LoginPage } from './Pages/LoginPage'
import { HomePage } from './Pages/HomePage'
import { RegustrationPage } from './Pages/RegistrationPage'

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

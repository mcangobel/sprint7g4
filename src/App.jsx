import { useState } from 'react'
import './App.css'
import Login from './Login'
import Succes from './Succes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/succes' element={<Succes/>}/>
      </Routes>
    </Router>
  )
}

export default App

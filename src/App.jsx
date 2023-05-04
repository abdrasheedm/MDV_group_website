import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
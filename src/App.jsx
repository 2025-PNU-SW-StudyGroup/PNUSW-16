//import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Signup/Login';
import Signup1 from './pages/Signup/Signup1';
import Signup2 from './pages/Signup/Signup2';
import Signup3 from './pages/Signup/Signup3';
import Home from './pages/1_Home';
import KakaoMap from './pages/3_map';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup1" element={<Signup1 />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/signup3" element={<Signup3 />} />
      <Route path='/home' element={<Home />} />
      <Route path='/map' element={<KakaoMap />} />
    </Routes>
    </>
  )
}

export default App


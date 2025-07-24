//import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/1_Home';
import KakaoMap from './pages/3_map';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/map' element={<KakaoMap />} />
    </Routes>
    </>
  )
}

export default App

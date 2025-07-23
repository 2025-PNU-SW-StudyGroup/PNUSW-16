//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup1 from './pages/Signup/Signup1';
import Signup2 from './pages/Signup/Signup2';
import Signup3 from './pages/Signup/Signup3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/signup3" element={<Signup3 />} />
      </Routes>
    </Router>
  );
}

export default App


import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Registration from './Components/Registration';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element = {<Registration/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
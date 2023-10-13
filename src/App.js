// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Findcrop from './components/Findcrop'
import Optimal from './components/Optimal'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findcrop" element={<Findcrop />} />
          <Route path="/optimal" element={<Optimal />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

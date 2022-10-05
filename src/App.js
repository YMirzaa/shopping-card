import { BrowserRouter, Routes, Route } from "react-router-dom";
import React ,{useState} from "react";
import './styles/app.css'

import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Nav from './components/Nav';


function App() {

  const [dotActive, setDotActive] = useState(-1);
  

  return (
    <div id="app">
      <BrowserRouter>
        <Nav dotActive={dotActive}/>
        <Routes>
          <Route path="/" element={<Home dotActive={dotActive} setDotActive={setDotActive} />}/>
          <Route path="/women" element={<Women dotActive={dotActive} setDotActive={setDotActive}/>} />
          <Route path="/men" element={<Men dotActive={dotActive} setDotActive={setDotActive}/>} />
          <Route path="/about" element={<About dotActive={dotActive} setDotActive={setDotActive}/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

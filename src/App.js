import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.css'

import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Nav from './components/Nav';


function App() {

  
  return (
    <div id="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

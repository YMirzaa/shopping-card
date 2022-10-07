import { BrowserRouter, Routes, Route } from "react-router-dom";
import React ,{useState} from "react";
import './styles/app.css'

import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Nav from './components/Nav';


function App() {
  const exampleProducts = [
    {id: 0, name: 'siyah elbise', description: "lorem ipsum amk", price: 31, img: ''},
    {id: 1, name: 'yesi elbise', description: "lorem ipsum again amk", price: 69, img: 
    
    
    
    ''}
  ];

  const [dotActive, setDotActive] = useState(0);
  const [productObjs, setProductObjs] = useState(exampleProducts);

  return (
    <div id="app">
      <BrowserRouter>
        <Nav dotActive={dotActive} setDotActive={setDotActive}/>
        <Routes>
          <Route path="/" element={<Home setDotActive={setDotActive} />}/>
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

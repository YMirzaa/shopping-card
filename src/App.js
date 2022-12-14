import { BrowserRouter, Routes, Route } from "react-router-dom";
import React ,{useState} from "react";
import './styles/app.css'

import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Nav from './components/Nav';
import Item from "./pages/Item";
import { productList } from "./components/ProductList";

function App() {
  const [dotActive, setDotActive] = useState(0);
  const [productObjs, setProductObjs] = useState(productList);
  
  return (
    <div id="app">
      <BrowserRouter>
        <Nav dotActive={dotActive} setDotActive={setDotActive}/>
        <Routes>
          <Route path="/" element={<Home setDotActive={setDotActive} />}/>
          <Route path="/women" element={<Women setDotActive={setDotActive} productList={productObjs} />} />
          <Route path="/women/item/:key" element={<Item products={productObjs} />} />
          <Route path="/men" element={<Men productList={productList}/>} />
          <Route path="/about" element={<About />}/>

          {/* item routelari gelecek */}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

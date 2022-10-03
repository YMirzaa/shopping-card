import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

const Nav = () => {

  
    return (
      <nav>
        <div className="nav-left">
            Icon
            Yusuf Mirza Oksuz
            Ankara
        </div>
     
        <div className="nav-center">
            <div className="nav-brand">
                BRAND
            </div>
            <div className="nav-pages">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
            
                    <Link to='/women'>
                        <li>Women</li>
                    </Link>
            
                    <Link to='/men'>
                        <li>Men</li>
                    </Link>

                    <Link to='/about'>
                        <li>About</li>
                    </Link>  
                </ul>
            </div>
        </div>
        <div className="nav-right">
            shopcardLogo
            searchlogo
        </div>
        
        
      </nav>
    );
  };
  
  export default Nav;
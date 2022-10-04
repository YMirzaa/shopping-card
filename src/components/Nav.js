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
                        <li>
                            <span className="nav-links">Home</span>
                        </li>
                    </Link>
            
                    <Link to='/women'>
                        <li>
                            <span className="nav-links">Women</span>
                        </li>
                    </Link>
            
                    <Link to='/men'>
                        <li>
                            <span className="nav-links">Men</span>
                        </li>
                    </Link>

                    <Link to='/about'>
                        <li>
                            <span className="nav-links">About</span>
                        </li>
                    </Link>  
                </ul>
                <div className="dot"></div>
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
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

import gitIcon from '../assets/icons/github.png';
import cartIcon from '../assets/icons/cart.png';
import searchIcon from '../assets/icons/magnify.png';

const Nav = () => {
    function openGitHub(){
        window.open('https://github.com/YMirzaa', "_blank");
    };

    return (
      <nav>
        <div onClick={openGitHub} className="nav-left">
            
            <img  src={gitIcon} alt="gitHub icon"/>
            
            <div>Yusuf Mirza Oksuz</div>
            <div> Istanbul</div>
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
            <img  src={cartIcon} alt="cart icon"/>
            <img  src={searchIcon} alt="search icon"/>
        
        </div>
        
        
      </nav>
    );
  };
  
  export default Nav;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

import ShopCart from "./ShopCart";

import gitIcon from '../assets/icons/github.png';
import cartIcon from '../assets/icons/cart.png';
import searchIcon from '../assets/icons/magnify.png';

const Nav = ({dotActive, setDotActive}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

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
                    <Link to='/' onClick={()=>setDotActive(0)} >
                        <li>
                            <span  className="nav-links">Home</span>
                            {dotActive === 0 && <div id="nav-links-dot"> </div>}
                        </li>
                    </Link>
            
                    <Link to='/women' onClick={()=>setDotActive(1)} >
                        <li>
                            <span 
                                
                                className="nav-links">Women</span>
                            {dotActive === 1 && <div id="nav-links-dot"> </div>}

                        </li>
                    </Link>
            
                    <Link to='/men' onClick={()=>setDotActive(2)}>
                        <li>
                            <span  className="nav-links">Men</span>
                            {dotActive === 2 && <div id="nav-links-dot"> </div>}

                        </li>
                    </Link>

                    <Link to='/about' onClick={()=>setDotActive(3)}>
                        <li>
                            <span  className="nav-links">About</span>
                            {dotActive === 3 && <div id="nav-links-dot"> </div> }

                        </li>
                    </Link>  
                </ul>
                <div className="dot"></div>
            </div>
        </div>
        <div className="nav-right">
            <img onClick={()=>setIsDisplayed(!isDisplayed)}  src={cartIcon} alt="cart icon"/>
            <img  src={searchIcon} alt="search icon"/>
        
        </div>
        
        <ShopCart 
            isDisplayed={isDisplayed}
            setIsDisplayed={setIsDisplayed}
        />
        
      </nav>
    );
  };
  
  export default Nav;
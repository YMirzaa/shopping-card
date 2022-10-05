import React, {useState} from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css';

import ShopCart from "./ShopCart";

import gitIcon from '../assets/icons/github.png';
import cartIcon from '../assets/icons/cart.png';
import searchIcon from '../assets/icons/magnify.png';

const Nav = ({dotActive}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    function openGitHub(){
        window.open('https://github.com/YMirzaa', "_blank");
    };

    const dot = <div id="nav-links-dot"> </div>;

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
                            {dotActive === 0 ? dot : null}
                        </li>
                    </Link>
            
                    <Link to='/women'>
                        <li>
                            <span className="nav-links">Women</span>
                            {dotActive === 1 ? dot : null}

                        </li>
                    </Link>
            
                    <Link to='/men'>
                        <li>
                            <span className="nav-links">Men</span>
                            {dotActive === 2 ? dot : null}

                        </li>
                    </Link>

                    <Link to='/about'>
                        <li>
                            <span className="nav-links">About</span>
                            {dotActive === 3 ? dot : null}

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
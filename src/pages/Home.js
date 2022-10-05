import '../styles/home.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import homeVideo from '../assets/videos/z.mp4';

function Home({ setDotActive}) {

  useEffect(() => {
    setDotActive(0);
    

  },[]);

    return (
      <div id='home'>
        <video autoPlay muted loop>
          <source src={homeVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>


        <Link to='/women'>
            <button>Women</button>
        </Link>
      
        <Link to='/men'>
            <button>Men</button>
        </Link>
      </div>
    );
  }
  
  export default Home;
/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/home.css';
import { Link } from "react-router-dom";
// import homeVideo from '../assets/videos/z.mp4';
import homeVideo from 'https://denemebucketforshopping.s3.eu-central-1.amazonaws.com/z.mp4';

function Home({ setDotActive}) {


    return (
      <div id='home'>
        <video autoPlay muted loop>
          <source src={homeVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>


        <Link to='/women' onClick={()=>setDotActive(1)}>
            <button>Women</button>
        </Link>
      
        <Link to='/men' onClick={()=>setDotActive(2)}>
            <button>Men</button>
        </Link>
      </div>
    );
  }
  
  export default Home;
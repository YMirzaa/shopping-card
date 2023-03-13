/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/home.css';
import { Link } from "react-router-dom";
import axios from 'axios';
// import homeVideo from '../assets/videos/z.mp4';
const homeVideo = ('https://denemebucketforshopping.s3.eu-central-1.amazonaws.com/z.mp4');
// console.log(homeVideo);
// axios.get(homeVideo)
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(error);
//   });

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
import '../styles/women.css';
import { useEffect } from 'react';

function Women() {
  
  useEffect(() => {
    document.getElementsByClassName('nav-links')[1].classList.add('dot-active');

    return ()=>{
      document.getElementsByClassName('nav-links')[1].classList.remove('dot-active');
    }
  },[]);

    return (
      <div id="women">

      </div>
    );
  }
  
  export default Women;
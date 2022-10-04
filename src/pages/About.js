import { useEffect } from 'react';


function About() {
  useEffect(() => {
    document.getElementsByClassName('nav-links')[3].classList.add('dot-active');

    return ()=>{
      document.getElementsByClassName('nav-links')[3].classList.remove('dot-active');
    }
  },[]);
  
    return (
      <div>

      </div>
    );
  }
  
  export default About;
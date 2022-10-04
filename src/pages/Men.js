import { useEffect } from 'react';

function Men() {
  useEffect(() => {
    
    document.getElementsByClassName('nav-links')[2].classList.add('dot-active');

    return ()=>{
      document.getElementsByClassName('nav-links')[2].classList.remove('dot-active');
    }
  },[]);

    return (
      <div>

      </div>
    );
  }
  
  export default Men;
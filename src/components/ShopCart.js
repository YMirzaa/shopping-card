import '../styles/shopCart.css';
import closeIcon from '../assets/icons/close.png';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

function ShopCart({isDisplayed , setIsDisplayed}) {
    
    const nodeRef = useRef(null);

    // if(!isDisplayed){
    //     return <div></div>;

    // }

    return (
        <CSSTransition 
        nodeRef={nodeRef} 
        in={isDisplayed} 
        timeout={400} 
        classNames="nav-animation"
        unmountOnExit
         >
        <div>

                <div ref={nodeRef} variant="primary" id='shop-cart'>
                    <div className='top'>
                        <div>
                            <img 
                                onClick={()=>setIsDisplayed(!isDisplayed)} 
                                src={closeIcon} alt="close icon" 
                            />
                        </div>
                        <div>
                            Subtotal = 0.00$
                        </div>
                    </div>
                    <div className='middle'>
                        cart curt content
                    </div>
                    <div className='bottom'>
                        <button>
                            Checkout
                        </button>
                    </div>
                </div>

        </div>
        </CSSTransition>
    );
  }
  
  export default ShopCart;
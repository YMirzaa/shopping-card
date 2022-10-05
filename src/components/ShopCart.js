import '../styles/shopCart.css';
import closeIcon from '../assets/icons/close.png';

function ShopCart({isDisplayed , setIsDisplayed}) {

    if(!isDisplayed){
        return (<div></div>)
    }
    
    return (
      <div id='shop-cart'>
            <div className='top'>
                <div>
                <img onClick={()=>setIsDisplayed(!isDisplayed)} src={closeIcon} alt="close icon" />

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
    );
  }
  
  export default ShopCart;
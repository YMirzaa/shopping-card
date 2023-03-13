import '../styles/shopCart.css';
import closeIcon from '../assets/icons/close.png';
import ShopCartItem from './ShopCartItem';

function ShopCart({productsInCart, setProductsInCart, isDisplayed , setIsDisplayed}) {
    

    return (

        (  
        <div className={isDisplayed ? 'animate ' : ' '} id='shop-cart'>
            <div className='top'>
                <div>
                    <img 
                        onClick={()=>setIsDisplayed(!isDisplayed)} 
                        src={closeIcon} alt="close icon" 
                    />
                </div>
                <div>
                    Subtotal = ${(productsInCart.reduce(
                        (prev, curr)=>{ return prev + Number(curr.price)}, 0)).toFixed(2)}
                </div>
            </div>
            <div className='middle'>
                {productsInCart.map( product => {
                    return (<ShopCartItem 
                                key={product.key} 
                                product={product}
                                quantity={1}
                                size={'s'}/>)
                })}
            </div>
            <div className='bottom'>
                <button>
                    Checkout
                </button>
            </div>
        </div>)

    );
  }
  
  export default ShopCart;
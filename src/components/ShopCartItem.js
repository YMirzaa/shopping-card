import '../styles/shopCartItem.css';
import {  } from "react-router-dom";

function ShopCartItem({product, size, quantity}) {
    
    return (
      <div className='shop-cart-item'>
        <div className='item-img'>
            <img src={product.src} alt="product img" />
        </div>
        <div className='item-info'>
            <div className='item-name'>{product.title}</div>
            <div className='item-price-quantity'>
                <div className='item-price'>${product.price}</div>
                <div className='item-quantity'>Quantity: {quantity}</div>
            </div>
            <div className='item-size'>{size}</div>
        </div>
      </div>
      
    );
  }
  
  export default ShopCartItem;
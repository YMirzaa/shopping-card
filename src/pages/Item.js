import { useParams, useNavigate } from "react-router-dom";
import '../styles/item.css';
import closeIcon from '../assets/icons/close-item.png';

function Item({ productsInCart, setProductsInCart, setDotActive, products }) {
    const navigate = useNavigate();
    const { key } = useParams();

    const product = products.find(product => product.key === key );

    const addProductToCart =  (product, size)=>{
      const item = productsInCart.find( element => element.key === product.key)
      
      if(item !== undefined && item.size === size ){
        //if product already in the list  
        item.quantity +=1;
      }else{
        //add product to shop cart
        let newItem = {...product, quantity: 1, size: size}
        setProductsInCart({...productsInCart, newItem});
      }
    };

    return (
      <div id='item'>
        <div className="left">
            <div className="black-bg-bottom"></div>

            <div className="black-bg-right"></div>
            <img src={product.src} alt="product" />
        </div>
        <div className="right">
            <div>
                <div>
                  {product.brand}
                </div> 
                <div>
                    <img 
                      onClick={()=>{ 
                          navigate(-1); 
                          setDotActive(1);}} 
                      src={closeIcon}
                      alt="go back" />
                </div>
            </div>
            <div>
                  {product.title}
            </div>
            <div>{'$ '+  product.price}</div>
            <div>
              {product.description}
              <div className="border-bottom"></div>
            </div>

            <div>
                <form className="size-select-form" action="">
                  
                  <select name="size" id="size">
                    <option disabled='' value="none">Size</option>

                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">X-Large</option>
                  </select>

                  <button 
                    type="submit" 
                    className="item-add-cart"
                    onClick={(e)=>{
                        e.preventDefault()
                        
                        }}>
                          Add To Cart
                  </button>
                </form>

            </div>
           
        </div>
        
      </div>
    );
  }
  
export default Item;
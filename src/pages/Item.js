import { useParams, useNavigate } from "react-router-dom";
import '../styles/item.css';
import closeIcon from '../assets/icons/close-item.png';

function Item({ setDotActive, products }) {
    const navigate = useNavigate();
    const { key } = useParams();
    const product = products.find(product => product.key === key );

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
            <div>{product.description}</div>

            <div>
                size and add to cart
            </div>
           
        </div>
        
      </div>
    );
  }
  
export default Item;
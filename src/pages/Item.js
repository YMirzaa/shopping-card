import { useParams, Link } from "react-router-dom";
import '../styles/item.css';

function Item({setDotActive,products}) {
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
            <div>{product.brand}</div>
            <div>
                {product.title}
                <Link to='/women' onClick={()=>setDotActive(1)}>
                    <img src="" alt="go back" />
                </Link>
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
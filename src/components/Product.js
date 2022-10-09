import '../styles/product.css';
import { Link } from "react-router-dom";

function Product({setDotActive, product}) {
    // const linkTo = (product.title).split(' ').join('_');
    return (
      <Link to={`/women/item/${product.key}`} onClick={()=>setDotActive(-1)}>
        <div id="product">
          <div className='card'>
            <img src={product.src} alt="product" />

            <div className='product-info'>
              <div>
                <div>{product.title}</div>
                <div>{product.brand}</div>  
              </div>
              <div>{product.description}</div>
            </div>
          </div>
          
          <div className='card-bottom'>
              {'$ ' + product.price}
          </div>

        </div>

      </Link>
      
    );
  }
  
  export default Product;
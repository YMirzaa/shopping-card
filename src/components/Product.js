import '../styles/product.css';

function Product({product}) {
    return (
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
    );
  }
  
  export default Product;
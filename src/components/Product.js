import '../styles/product.css';

function Product({product}) {
    return (
      <div id="product">
        <div className='top'>
          <img src={product.img} alt="product" />
        </div>
        <div className='bottom'>
          {'$ ' + product.price }
        </div>
      </div>
    );
  }
  
  export default Product;
import '../styles/women.css';
import Hero2 from "../assets/img/hero2.jpg"
;
import Product from '../components/Product';

function Women({setDotActive, productList}) {
    return (
      <div id="women" >
        <div className='bg-img'>
            <img src={Hero2} alt="hero2 women" />
        </div>
        <div className='top'>
          Women's
        </div>

        <div className='bottom' >

          <div className='buttons'>
                jgnkdfjndkfjgdkjfgk;s
          </div>

          <div className='grid' >
           
           
            {productList.filter((product)=>
                product.gender === 'women')
                .map((product)=>
                  <Product key={product.key} product={product} setDotActive={setDotActive} />
              )}

          </div>  

        </div>
      </div>
    );
  }
  
  export default Women;
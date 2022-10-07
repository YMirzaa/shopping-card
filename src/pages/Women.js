import '../styles/women.css';
import Hero2 from "../assets/img/hero2.jpg"
;
import Product from '../components/Product';

function Women() {
  let product = {id: 0, name: 'siyah elbise', description: "lorem ipsum amk", price: 31, img: ''};
    return (
      <div id="women">
        
        <div className='bg-img'>
            <img src={Hero2} alt="hero2 women" />
        </div>
        <div className='top'>
          Women's
        </div>

        <div className='bottom'>

          <div className='buttons'>
                jgnkdfjndkfjgdkjfgk;s
          </div>

          <div className='grid' >
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>
              <Product product={product}/>


              <Product product={product}/>

          </div>  

        </div>
      </div>
    );
  }
  
  export default Women;
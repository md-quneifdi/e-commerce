import React from 'react';
import Slider from '../Slider/Slider';
import './Main.css';


function Main({count, incCount, decCount, setAdd, add}) {
  return (
    <div className='main'>
       {/* START SLIDER */}
      <div className="slider-part">
        <Slider />
      </div> 

       {/* END SLIDER */}

      <div className="info-part">
        <span className='up-text'>Sneaker Company</span>
        <h2>Fall Limited Edition Sneakers</h2>
        <p> 
          These low-profile sneakers are your perfect casual wear companion. 
          Featuring a durable rubber outer sole,
          they’ll withstand everything the weather can offer.
        </p>
        <div className="price">
          <h3 className="main-price">$125.00</h3>
          <span className="discount-price">$250.00</span>
        </div>
        <div className="inc-dec-add-box">
            <div className="inc-dec-box">
                <span className="minus" onClick={decCount}>-</span>
                <span className="count">{count}</span>
                <span className="plus" onClick={incCount}>+</span>
            </div>
            <button className="add" onClick={count > 0 ? setAdd : ""}>
              <span><img src="images/icon-cart.svg" alt="" /></span>
              <span className="btn">Add to cart</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Main;

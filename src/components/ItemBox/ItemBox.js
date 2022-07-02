import React from 'react';
import './ItemBox.css';

function itemBox({count, setAdd}) {
  return (
      <div className='item-container'>

    <div className='item-box'>
      <img src="images/image-product-1.jpg" alt="" />
      <div className='title-box'>
          <h3>Fall Limited Edition Sneakers</h3>
          <span className='price'>{`$125.00 x ${count} $${125 * count}`}</span>
      </div>
      <span onClick={setAdd}>
          <img src="images/icon-delete.svg" alt="" />
      </span>
    </div>
      <button className='check-out-btn'> Checkout </button>
    </div>
  )
}

export default itemBox;

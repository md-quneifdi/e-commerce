import React, { useState } from 'react';
import "./Header.css";

import ItemBox from '../ItemBox/ItemBox';

function Header({count, setAdd, add}) {

  const [itembox, setItemBox] = useState(false);

  const openItemBox = () => setItemBox(!itembox);

  const [toggle, setToggle] = useState(false);

  const toggleMenuIcon = () => setToggle(!toggle);

  return (
    <div className='header'>
      <div className="logo-list">
      <div className='logo'>
        <span onClick={toggleMenuIcon}><img src={toggle ? "images/icon-close.svg" : "images/icon-menu.svg"} alt="" /></span>
        <img className='logo-img' src="images/logo.svg" alt="" />
      </div>
      <ul className={toggle ? "list active" : "list"}> 
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className="image-basket">
        <span onClick={openItemBox}><img src="images/icon-cart.svg" alt="" /></span>
        <span className={count > 0 ? "count active" : "count"}>{count}</span>
        <div className={itembox ? "cart-box active" : "cart-box"}>
          <h2>Cart</h2>
          <div className="item-box">
            <div className="item">
              {
                  add ? <ItemBox count={count} setAdd={setAdd}/> : "Your Cart is Empty"
              }
              
            </div>
          </div>
        </div>
        <span className='avatar'><img src="images/image-avatar.png" alt="" /></span>
      </div>
    </div>
  )
}

export default Header;

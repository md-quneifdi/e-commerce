import React from 'react'
import Slider from '../Slider/Slider';
import './Modal.css';
// import {ReactComponent as Close } from '../../../public/images/icon-close.svg'

function Modal({handleState}) {
  return (
    <div className='popup'>
        <div className="overlay"></div>
        <div className="pop-up-box">
            <div className="slider-box">
              <span className="close" onClick={handleState}>
                <img className='close-svg' src="images/icon-close.svg" alt="" />
              </span>

            <Slider />
            </div>
        </div>
      
    </div>
  )
}

export default Modal;

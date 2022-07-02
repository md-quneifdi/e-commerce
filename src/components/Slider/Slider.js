import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";

// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// import css file
import '../../../node_modules/swiper/swiper-bundle.css'
import "./styles.css";
import Modal from '../Modal/Modal';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function Slider() {
    const [modal, setModal] = useState(false);

    const handleState = () => setModal(!modal);

    

    //  const [thumbsSwiper, setThumbsSwiper] = useState(null);
         

  return (
    <>
        {
          modal ? <Modal handleState={handleState} /> : ""
        }
        <Swiper id='main' tag='section' wrapperTag='ul' onClick={handleState}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        // onInit={(swiper) => console.log('swiper is init!', swiper)}
        // onSlideChange={(swiper) => {console.log('slide index changed to: ', swiper.activeIndex)}}
        // onReachEnd={()=> console.log('reach end')}
        className="mySwiper2"
      >
        <SwiperSlide tag='li'>
          <img src="images/image-product-1-thumbnail.jpg" alt=''  />
        </SwiperSlide >
        <SwiperSlide tag='li'>
          <img src="images/image-product-2-thumbnail.jpg" alt=''  />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src="images/image-product-3-thumbnail.jpg" alt=''  />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src="images/image-product-4-thumbnail.jpg" alt=''  />
        </SwiperSlide>
        
      </Swiper>
      <Swiper id='thumbs' // remove this tag='ul'
      //  onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={30}
        slidesPerView={4}
        freeMode={false}
        watchSlidesProgress={false}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide tag='li' className='min'>
          <img src="images/image-product-1.jpg" alt=''  />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src="images/image-product-2.jpg" alt=''  />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src="images/image-product-3.jpg" alt=''  />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src="images/image-product-4.jpg" alt=''  />
        </SwiperSlide>
      </Swiper>


    </>
  )
}

export default Slider;

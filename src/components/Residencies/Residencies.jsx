import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import "./Residencies.scss"
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common';

const SliderButtons = () => {
    const swiper = useSwiper ();
    return (
        <div className='r-button flexCenter'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}

const Residencies = () => {
  return (
    <div className='r-wrapper'>
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>
            
            <Swiper {...sliderSettings}>
            <SliderButtons />
                {data.map((card, i)=>(
                    <SwiperSlide key={i}>
                        <div className="r-card flexColStart">
                            <img src={card.image} alt="residency card image" />
                            <span className="secondaryText r-price">
                                <span className='orangeText'>$</span>
                                <span>{card.price}</span> 
                            </span>

                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            
        </div>
    </div>
  )
}

export default Residencies


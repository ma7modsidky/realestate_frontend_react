import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.scss";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Residencies = () => {
  const { data, isError, isLoading } = useProperties();
  // if error happens, show error message
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while loading data</span>
      </div>
    );
  }
  // if loading, show spinner until data is loaded
  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
              {/* <div className="r-card flexColStart">
                            <img src={card.image} alt="residency card image" />
                            <span className="secondaryText r-price">
                                <span className='orangeText'>$</span>
                                <span>{card.price}</span> 
                            </span>

                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>
                        </div> */}
              <PropertyCard property={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

import React from 'react'
import "./Hero.scss"
import "../../index.css"
import {HiLocationMarker} from  "react-icons/hi"
import CountUp from 'react-countup'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="hero-left">

          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="flexColStart hero-description">
            <span className='secondaryText'>Find a variety of properties that suits you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" name="" id="" />
            <button className='button'>Search</button>
          </div>

          <div className="stats flexCenter">

            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={9000} duration={4}/>
                <span className='orange'>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
              
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1000} end={1900} duration={4}/>
                <span className='orange'>+</span>
              </span>
              <span className='secondaryText'>Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={28} duration={4}/>
                <span className='orange'>+</span>
              </span>
              <span className='secondaryText'>Awarad Winnign</span>
            </div>

          </div>

        </div>
        
        {/* Right Side */}
        <div className="hero-right">
        <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
          
            <img src="./hero-image.png" alt="hero image" />
          
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
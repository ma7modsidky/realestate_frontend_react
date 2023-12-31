import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import "../App.scss";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import { Value } from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/Footer/Footer";

function Website() {
  return (
    <div className="App">
      <div>
        <div>
          <div className="white-gradient" />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </div>
  )
}

export default Website
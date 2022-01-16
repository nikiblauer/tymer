import React from "react";
import PageHeading from "./components/shared/PageHeading";

import "./styles/about.css";

import Footer from "./components/footer/Footer";


function AboutPage(){
    return (
      <div>      
        <PageHeading>ABOUT</PageHeading>
        <p className="about-text">
          TYMER is a REACT web application that enables you to set a time limit for your tasks and also for your breaks inbetween. In addition, there is also a tasklist functionality where you can keep track of your current and upcoming tasks.
        </p>

        <Footer />
      </div>
  
    );
  }
  
  export default AboutPage;
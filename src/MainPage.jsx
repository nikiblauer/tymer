import React from "react";
import "./styles/main.css";
import Clock from "./components/clock/Clock";
import Tasklist from "./components/tasklist/Tasklist";

function MainPage(){
  return (
    <div>      
      <Clock />
      <Tasklist />  
    </div>

  );
}

export default MainPage;

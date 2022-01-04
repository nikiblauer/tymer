import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Clock from "./components/clock/Clock";

function App(){
  return (
    <div>
      <Navbar />
      <Clock />
    </div>
  );
}

export default App;

import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Clock from "./components/clock/Clock";
import Tasklist from "./components/tasklist/Tasklist";

function App(){
  return (
    <div className="app-container">
      <Navbar />
      <Clock />
      <Tasklist />
    </div>
  );
}

export default App;

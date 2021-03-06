import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Clock from "./components/clock/Clock";
import Tasklist from "./components/tasklist/Tasklist";
import { Outlet } from "react-router-dom";

function App(){
  return (
    <div>      
      <Navbar />
      <Outlet />  
    </div>

  );
}

export default App;

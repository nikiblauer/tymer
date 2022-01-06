import React from "react";
import { useState } from "react/cjs/react.development";
import "../../styles/navbar.css";


function Navbar(props) {

    let [collapsed, setCollapsed] = useState(true);

    function toggle(){
        setCollapsed((prev) => {return !prev})
    }

    return (
        <div className={(collapsed) ? "topnav" : "topnav responsive"} id="myTopnav">
            <a href="javascript:void(0);" className="active">HOME</a>
            <a href="javascript:void(0);">TYMER</a>
            <a href="javascript:void(0);">ABOUT</a>
            <a href="javascript:void(0);">SETTINGS</a>

            <a href="javascript:void(0);" className="icon" onClick={toggle}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    );
}


export default Navbar;


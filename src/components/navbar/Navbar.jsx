import React from "react";
import "../../styles/navbar.css";
import NavbarHeading from "./NavbarHeading";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import NavigationItem from "./NavigationItem";




function Navbar(props) {

    

    return (
        <header>
            <NavbarHeading/>
            <Menu>
                <NavigationItem to="about">ABOUT</NavigationItem>
                {/* <NavigationItem to="/contact">CONTACT</NavigationItem> */}
                <NavigationItem to="/settings">SETTINGS</NavigationItem>
            </Menu>
            <MobileMenu>
                <NavigationItem to="about">ABOUT</NavigationItem>
                {/* <NavigationItem to="/contact">CONTACT</NavigationItem> */}
                <NavigationItem to="/settings">SETTINGS</NavigationItem>
            </MobileMenu>

       </header>
    );
}


export default Navbar;


import React from "react";
import "../../styles/navbar.css";
import NavbarHeading from "./NavbarHeading";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import NavigationItem from "./NavigationItem";




function Navbar(props) {

    

    return (
        <header>
            <NavbarHeading />
            <Menu>
                <NavigationItem href={"#"}>ABOUT</NavigationItem>
                <NavigationItem href={"#"}>CONTACT</NavigationItem>
                <NavigationItem href={"#"}>SETTINGS</NavigationItem>
            </Menu>
            <MobileMenu>
                <NavigationItem href={"#"}>ABOUT</NavigationItem>
                <NavigationItem href={"#"}>CONTACT</NavigationItem>
                <NavigationItem href={"#"}>SETTINGS</NavigationItem>
            </MobileMenu>

       </header>
    );
}


export default Navbar;


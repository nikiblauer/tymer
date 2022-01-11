import React from "react";
import "../../styles/footer.css";
import SocialLinkList from "./SocialLinkList";
import CopyrightText from "./CopyrightText";

function Footer(props){

    let today = new Date();
    const currentYear = today.getFullYear();

    return (     
        <footer className="footer">
            <SocialLinkList />
            <CopyrightText />
        </footer>
    );
  }
  
  export default Footer;
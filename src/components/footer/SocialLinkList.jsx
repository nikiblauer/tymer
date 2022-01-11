import React from "react";
import "../../styles/footer.css";


function SocialLinkList(props){

    let today = new Date();
    const currentYear = today.getFullYear();

    return (     
        <div className="social-links"><a href="https://www.facebook.com" className="social fab fa-facebook-f"></a> <a href="https://www.instagram.com" className="social fab fa-instagram"></a> <a href="https://www.twitter.com" className="social fab fa-twitter"></a> <a href="mailto:abc@example.com" className="social far fa-envelope"></a></div>
    );
  }
  
  export default SocialLinkList;
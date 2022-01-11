import React from "react";
import "../../styles/footer.css";


function CopyrightText(props){

    let today = new Date();
    const currentYear = today.getFullYear();

    return (     
        <p className="copyright-text">Copyright © {currentYear}</p>
    );
  }
  
  export default CopyrightText;
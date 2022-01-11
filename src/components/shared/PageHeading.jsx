import React from "react";



function PageHeading(props){
    return (     
        <h1 className="page-heading">{props.children}</h1>
    );
  }
  
  export default PageHeading;
import React from "react";


function NavigationItem(props) {
    return (
        <li className="grow"><a href={props.href}>{props.children}</a></li>
    );
}


export default NavigationItem;
import React from "react";
import airbnbLogo from "../images/airbnb-logo.jpeg"

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="nav--logo" src={airbnbLogo}></img>
        </div>
    )
}
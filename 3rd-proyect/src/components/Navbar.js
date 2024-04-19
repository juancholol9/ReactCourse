import React from "react";
import airbnbLogo from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="nav--logo" src={airbnbLogo}></img>
        </div>
    )
}
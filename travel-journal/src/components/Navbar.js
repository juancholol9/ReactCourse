import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";


export default function Navbar(){
    return(
        <div className="navbar">
            <FontAwesomeIcon icon={faEarthAmericas} className="earth-icon"/>
            <p>my travel journal</p>
        </div>
    )
}
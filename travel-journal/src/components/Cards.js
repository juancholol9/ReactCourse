import React from "react";
import img from "../images/japan.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Cards(item){
    return(
        <div className="cards">

            <img className="cards-img" src={img}/>

            <div className="cards-text">
                <div className="cards-row">
                    <FontAwesomeIcon icon={faLocationDot} className="cards-icon"/>
                    <p className="cards-country">{item.country}</p>
                    <a href={item.googleMapsLink} className="cards-maps-link">View on Google Maps</a>
                </div>

                <h2>{item.location}</h2>
                <p>{item.dates}</p>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
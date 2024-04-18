import React from "react";
import imgHero from "../images/grid.png"

export default function Hero(){
    return(
        <div className="hero">
            <img className="img--hero" src={imgHero}/>
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}
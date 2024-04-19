import React from "react";
import img from "../images/Katie.png"

export default function Card(){
    return(
        <div className="card">
            <img className="card--image" src={img}/>
            <div className="card--stats">
                <img/>
                <span>5.0</span>
                <span>(6) . </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}
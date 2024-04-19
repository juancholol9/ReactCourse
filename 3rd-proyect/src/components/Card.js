import React from "react";
import img from "../images/Katie.png"
import imgStar from "../images/star.png"

export default function Card(){
    return(
        <div class="card">
            <img class="card--image" src={img}/>
            <div class="card--stats">
                <img src={imgStar}/>
                <span>5.0</span>
                <span>(6)</span>
                <span>USA</span>
            </div>
            <div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From $136</span> / person</p>
            </div>

        </div>
    )
}
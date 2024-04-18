import React from "react";
import img from "../images/Katie.png"

export default function Card(){
    return(
        <div className="card">
            <div>
                <img src={img}/>
                <p>Sold Out</p>
            </div>

            <p>5.0 (6).USA</p>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span>From $136</span> / person</p>

        </div>
    )
}
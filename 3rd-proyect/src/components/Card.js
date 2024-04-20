import React from "react";
import img from "../images/Katie.png"
import imgStar from "../images/star.png"

export default function Card(props){
    var badgeText
    if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <div>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            </div>
            <img className="card--image" src={img}/>
            <div className="card--stats">
                <img src={imgStar}/>
                <span>{props.stats.rating} •</span>
                <span>({props.stats.reviewCount}) </span>
                <span>{props.location}</span>
            </div>
            <div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}
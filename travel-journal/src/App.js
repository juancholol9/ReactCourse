import React from "react";
import Navbar from "./components/Navbar";
import data from "./data";
import Cards from "./components/Cards";

export default function App(){

    const card = data.map(item =>{
        return(
            <Cards
            key={item.id}
            {...item}/>
        )
    })

    return(
        <div className="main">
            <Navbar/>
            <div className="main-cards">
                {card}
            </div>
        </div>
    )
}
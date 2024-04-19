import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App(){
    return(
        <div className="main">
            <Navbar/>
            <Hero/>
            <div className="main--card">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
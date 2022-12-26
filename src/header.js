import React from "react";
import troll from "./images/Troll Face.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll}
                alt="troll-face"
            />
            <h1>Header component</h1>
            
        </header>
        
    )
}
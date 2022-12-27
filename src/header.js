import React from "react";
import troll from "./images/Troll Face.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={troll}
                alt="troll-face"
                className="header--img"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--info">#FullFun</h4>
            
        </header>
        
    )
}
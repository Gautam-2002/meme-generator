import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Meme from "./meme";
import "./index.css";


function App(){
    return(
        <div>
            <Header />
            <Meme />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));
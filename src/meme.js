import React from "react";

export default function Meme(){

  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    // console.log("inside getMemeImage");
    // const memesArray = memesData.data.memes;
    // const randomNumber = Math.floor(Math.random() * memesArray.length);
    // setMemeImage(memesArray[randomNumber].url);
  }
    return (
      <main>
        <div className="form">
        <input 
          type="text" 
          className="form--input" 
          placeholder="Top text"
         />
        <input 
          type="text" 
          className="form--input" 
          placeholder="Bottom text"
         />
        <button 
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
      </main>
    );
}
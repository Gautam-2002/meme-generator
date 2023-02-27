import React from "react";
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allmemeimg, setAllmemeimg] = React.useState([]);
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllmemeimg(data.data.memes))
  },[])
  function getMemeImage() {
    // console.log("inside getMemeImage");
    const randomNumber = Math.floor(Math.random() * allmemeimg.length);
    const url = allmemeimg[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const {name,value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }))
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <center>
        <div className="meme">
          <img src={meme.randomImage} alt="MEME IMG" className="meme--image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </center>
    </main>
  );
}

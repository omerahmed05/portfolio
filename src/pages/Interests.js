import React from "react";
import "../styles/Projects.css";

function Interests() {

  return (
    <div className="project">   
      <h1>Interests</h1> 
      <div className="description-container">
        <div className="description">
        In my free time, I enjoy playing and watching soccer, playing and studying chess, and listening to music. 
            I also enjoy traveling!
            <br/><br/>
            My favorite soccer clubs are Liverpool F.C. and F.C. Barcelona. 
            <br/><br/>
            At the time I'm writing this, I'm rated 1400 in rapid chess. If you ever want to play, you can find me on chess.com with the username "Henkox"
            <br/><br/>
            <p>
              <b>Fun Facts:</b>
            </p> 
            - My favorite artist is Kendrick Lamar!
            <br/><br/>
            - I've lived in 3 different countries: USA, Sudan, and Ethiopia.
            <br/><br/>
            - I can speak Arabic!
            <br/><br/>
            - I visited Türkiye last summer!
            <br/><br/>
            <p>
              <b>Here are some photos from my trip!</b>
            </p>

            <div className="image-container">
              <img src={require("../assets/turkey1.jpg")} alt="Interest 1" />
            </div>
            
            <div className="image-container">
              <img src={require("../assets/turkey2.jpg")} alt="Interest 2" />
            </div>

            <div className="image-container">
              <img src={require("../assets/turkey4.jpg")} alt="Interest 4" />
            </div>

            <br/><br/>
            <div className="travel-pics">
              <br/>More travel pics to come 😎
            </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;


import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi 👋, I'm Omer. </h2>
        <div className="prompt">
          <p>This is where you can view my work, skills, accomplishments, and learn more about me.</p>
          <h5>Explore, Discover, Be Inspired!</h5>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, React Native, NPM,
              MaterialUI, Yarn, Plotly
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, Django
            </span>
          </li>
          <li className="item">
            <h2>Data Analysis</h2>
            <span>
              Matplotlib, pyPDF, NumPy, pandas, Natural Language Processing Toolkit (NLTK)
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>
              Git, Git Bash, Shell, JSON, GDB
            </span>
          </li>
          <li className="item">
            <h2>IDEs</h2>
            <span>
              Visual Studio, Eclipse, Jupyter Notebook
            </span>
          </li>
          <li className="item">
            <h2>OS</h2>
            <span>
              Windows, Linux
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, HTML/CSS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

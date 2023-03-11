import React, { useState, useEffect } from "react";
import "./index.css";


const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };


  return (
    <div className="main-wrapper" id="start">
      <nav>
        <ul>
          <li><h1>Lauri Suutari</h1></li>
          <li><a href="#start"><h1>Home</h1></a></li>
          <li><a href="#skills"><h1>Skills</h1></a></li>
        </ul>
      </nav>
      <div className="content">
        <section id="home">
          <div className="profilepic">
            <img src={require("./lauri.png")}></img>
          </div>
          <h1 id="name">Lauri Suutari</h1>
          <h2>CSE Master's student @ uni Oulu</h2>
          <ul className="horizontal-list1">
            <li id="socials"><a href="https://github.com/lsuutari19/">
              <img src={require("./github-mark.png")}></img>
            </a></li>
            <li id="socials"><a href="https://www.linkedin.com/in/lauri-suutari/">
              <img src={require("./linkedin.png")}></img>
            </a></li>
            <li id="socials"><a href="https://github.com/lsuutari19/">
              <img src={require("./github-mark.png")}></img>
            </a></li>
          </ul>
          
          <div className="text-box-wrapper">
            <h2 id="aboutme">About me:</h2>
            <div className="text-box1">
              <p>
                "Hello, My name is Lauri. I categorize myself as an extroverted introvert. I love socializing with people, but at the end of the day need some me-time! My favorite things about my field are problem solving, automation and figuring out new tech!"
              </p>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="table-div">
            <h2>My most familiar tech stack</h2>
            <ul className="horizontal-list2">
              <li id="skill">
                <img src={require("./python.png")} />
                <h1>Python</h1>
                <p>Scripting and test automation</p>
              </li>
              <li id="skill">
                <img src={require("./java.png")} />
                <h1>Java</h1>
                <p>Android mobile development</p>
              </li>
              <li id="skill">
                <img src={require("./c.png")} />
                <h1>C</h1>
                <p>Embedded systems</p>
              </li>
              <li id="skill">
                <img src={require("./flask.png")} />
                <h1>Flask</h1>
                <p>RESTful API development</p>
              </li>
            </ul>
          </div>
          <div className="projects">
            <h2>Projects</h2>
            <img id="namaste" src={require("./namaste.png")} />
            <h2>NAMASTE</h2>
            <div className="text-box-wrapper">
              <p>
                NAMASTE is an insecure Android application created for the University of Oulu cybersecurity courses. It follows OWASP10 principles.
                 The frontend was created with Java/Android studio and the backend was created with Python/Flask.
                  My main duties included creating the frontend with Java and connecting frontend and backend. It was a great learning
                  experience working with fellow students to deliver a product to a client and meet their requirements.
              </p>
            </div>
          </div>
          <h2 id="we">Work Experience</h2>
          <div className="work-experience">
            <img src={require("./autori.png")} />
            <p id="w2">Title: Software Developer Trainee</p>
            <p id="w2">Title: Software Developer Trainee</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App
import React from 'react';
import './App.css';
import balloonBomber from "./images/balloonBomber.png"
import lolInfo from "./images/lolInfo.png"

import
{
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";

function App() 
{
  const hobbies = 
  ["playing piano and cello (classical)",
   "drinking boba", 
   "eating sweets", 
   "taking trips to national parks", 
   "walking through museums", 
   "reading outside on sunny days in the shade", 
   "playing badminton", 
   "board games", 
   "video games (league, overwatch, apex, pubg, etc...)"
  ];

  const projects = 
  [
    {
      name: "Balloon Bomber",
      image: balloonBomber,
      description: "A game where you are a balloon trying to bomb the bunkers without getting shot.",
      link: "https://imjchiang.github.io/project-1/"
    },
    {
      name: "lolinfo",
      image: lolInfo,
      description: "A website where you can view gameplay and splash art from league of legends players/fans, look at champions available, and view statistics of certain players along with their favorite game modes, teammates, and champions.",
      link: "https://imjchiang-lolinfo.herokuapp.com/"
    }
  ];

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About hobbies={hobbies} />} />
        <Route path="/projects" render={() => <Projects projects={projects} />} />
      </div>
    </Router>
  );
}

export default App;

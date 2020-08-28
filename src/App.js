import React from 'react';
import './App.css';

import
{
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

function App() 
{
  const hobbies = ["playing piano and cello (classical)", "drinking boba", "eating sweets", "taking trips to national parks", "walking through museums", "reading outside on sunny days in the shade", "playing badminton", "board games", "video games (league, overwatch, apex, pubg, etc...)"]
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About hobbies={hobbies} />} />
      </div>
    </Router>
  );
}

export default App;

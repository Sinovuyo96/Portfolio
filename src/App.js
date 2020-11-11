import React   from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Home from './contents/Home'
import Navbar from './components/Navbar';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App(){
    return(
      <Router>
      <div className="App">
      <Navbar/>

      {/* Route for Home.js contents */}
      <Route exact path="/">
      <Home/>
      </Route>

      {/* Route for About.js contents */}
      <Route exact path="/About">
        <About/>
      </Route> 

      {/* Route for Education.js contents */}
      <Route exact path="/Education">
        <Education/>
      </Route>

      {/* Route for Education.js contents */}
      <Route exact path="/Skills">
        <Skills/>
      </Route>

      {/* Route for Education.js contents */}
      <Route exact path="/Contact">
      <Contact/>
      </Route>
      
      </div>
      </Router>
    )
}

export default App
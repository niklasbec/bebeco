import React from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Contact from "./components/Contact"

//Components
import Home from "./components/Home";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header>
      <a href="/" id="logo">
      <img
      src="https://i.imgur.com/9xsWBPZ.png"
      width="65px"
      height="65px"
      />
      </a>
        <nav>
          <li>
            <NavLink activeStyle={{ color: "#185bd8" }} to="/leistungen">
              Leistungen
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "#185bd8" }} to="/kontakt">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "#185bd8" }} to="/ueber-uns">
              Über Uns
            </NavLink>
          </li>
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/kontakt" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import {NavLink} from "react-router-dom"



function Home() {
  return (
    <div className="Home">
      <header>
        <img id="logo" src="https://i.imgur.com/9xsWBPZ.png" width="65px" height="65px"/>
        <nav>
            <li><NavLink activeStyle={{color: "#185bd8"}} to="/leistungen">Leistungen</NavLink></li>
            <li><NavLink activeStyle={{color: "#185bd8"}} to="/kontakt">Kontakt</NavLink></li>
            <li><NavLink activeStyle={{color: "#185bd8"}} to="/ueber-uns">Über Uns</NavLink></li>
        </nav>
      </header>
    </div>
  );
}

export default Home;

import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Animation from './animation.gif';

class Navbar extends Component {

  render() {


    return (
      <div id="nav">
        <Link to='/'><img src={Animation} alt="logo" className="logo"/></Link>

        <ul>
          <Link to="/">About Petitnomdusite</Link>
          <Link to="/soutien">Join the team</Link>
          <li>Join an organization</li>
        </ul>
        
        <Link to="/login/">
           <VscAccount />
        </Link>

      </div>
    );
  }
}

export default Navbar;

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
          <Link to="/">Helpckathon</Link>
          <Link to="/soutien">Know our the partners</Link>
        </ul>
        
        <Link to="/login/">
           <VscAccount />
        </Link>

      </div>
    );
  }
}

export default Navbar;

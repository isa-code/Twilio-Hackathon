import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Login from "./Login";

class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <img
          className="logo"
          src="https://i.picsum.photos/id/0/80/80.jpg?hmac=Ir_QGHqlH1-6o9GT_tgSZmc5_J2siljsYPhO78-MMNo"
          alt="Logo"
        />
        <ul>
          <Link to="/">About Petitnomdusite</Link>
          <Link to="/soutien">Join the team</Link>
          <li>Join an organization</li>
        </ul>
        <VscAccount />
      </div>
    );
  }
}

export default Navbar;

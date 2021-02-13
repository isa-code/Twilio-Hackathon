import React, { Component } from "react";
import { VscAccount } from 'react-icons/vsc';
import "./Navbar.css";

class Navbar extends Component {
    render(){
        return(
            <div id="nav">
                <img src="https://i.picsum.photos/id/0/80/80.jpg?hmac=Ir_QGHqlH1-6o9GT_tgSZmc5_J2siljsYPhO78-MMNo" alt="Logo" />
                <ul>
                    <li>About Petitnomdusite</li>
                    <li>Join the team</li>
                    <li>Join an organization</li>
                    <li><VscAccount /></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
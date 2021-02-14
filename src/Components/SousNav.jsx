import React from "react";
import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";


class SousNav extends Component{
    render(){
        return(
            <>
            <div id="sousNav">
                <Link to="/activity">Participate in a mission</Link>
                <Link to="/createactivity">Create a mission</Link>
            </div>
      
            </>
        )
    }
}

export default SousNav;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Pages/Activity.css";
import Navbar from "./Navbar";
import SousNav from "./SousNav";

class ActivityContent extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <SousNav/>
        <h1 id="activTitle">Street marauding</h1>
        <div id="activPresent">
          <img
            src="https://i.picsum.photos/id/0/350/350.jpg?hmac=3413AFaMEhDr1UkWF-uBUqhGKT6vyywgTBWIlagsCAs"
            alt="h1"
          />
          <div id="activPresentInfos">
            <p>
            Redirects to activity type/activity id in question
            </p>
            <p>Presents activity: what is a marauding</p>
            <p>
            Specifications: minimum of 4 people, provide comfortable clothes 
             and comfy shoes 
            </p>
            <p>Start time, end time</p>
            <p>Required aptitudes</p>
          </div>
        </div>
      </>
    );
  }
}

export default ActivityContent;

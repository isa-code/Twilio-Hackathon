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
      <div>
        <h1 id="activTitle">Street marauding</h1>
        <div id="activPresent">
          <img
            src="https://i.picsum.photos/id/0/350/350.jpg?hmac=3413AFaMEhDr1UkWF-uBUqhGKT6vyywgTBWIlagsCAs"
            alt="h1"
          />
          <div id="activPresentInfos">
            <p>
              redirige vers le type d'activité / id de l'activité en question
            </p>
            <p>Présenter l'activité en question :Qu'est-ce qu'une Maraude</p>
            <p>
              Spécifications : Groupe de minimum 4 personnes, prévoir des
              chaussures et vêtements confortables
            </p>
            <p>Heure de début, heure de fin</p>
            <p>Aptitudes requises</p>
          </div>
        </div>
      </div>
    
      </>
    );
  }
}

export default ActivityContent;

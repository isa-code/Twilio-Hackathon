import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Pages/Activity.css";


class ActivityContent extends Component {
    render(){
        return(
            <div>
                <h1 id="activTitle">Street marauds</h1>
                <div id="activPresent">
                    <img src="https://i.picsum.photos/id/0/350/350.jpg?hmac=3413AFaMEhDr1UkWF-uBUqhGKT6vyywgTBWIlagsCAs" alt="h1" />
                    <div id="activPresentInfos">
                        <p>redirige vers le type d'activité / id de l'activité en question</p>
                        <p>Présenter l'activité en question :Qu'est-ce qu'une Maraude</p>
                        <p>Spécifications : Groupe de minimum 4 personnes, prévoir des chaussures et vêtements confortables</p>
                        <p>Heure de début, heure de fin</p> 
                        <p>Aptitudes requises</p>
                    </div>
                </div>

                <div className="more">
                        <button type="button">
                           <Link to="/soutenir/">Join an organization </Link> 
                        </button>
                    

                </div>
            </div>
        )
    }
}

export default ActivityContent;
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
      
        <h1 id="activTitle">A WELCOME AND SUPPORT CENTER OPEN TO ALL</h1>
        <div className="activInfo">
          <img
            src="https://images.unsplash.com/photo-1476119181770-23e55d79d24b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt="h1"
          />
            <p>
            A stone's throw from the CHU and MAB, SIF has set up a Day Reception Center (CAJ). Open Monday to Friday from 9 a.m. to 5 p.m., the CAJ welcomes anyone in a precarious situation. Our teams are made up of employees and volunteers who are constantly listening: often isolated in their daily lives, beneficiaries find at SIF the precious social interactions we all need.
            <br></br>
            Social follow-up, hot meals, showers, computer space or rest, television, laundry, space for children ... thanks to our donors, the most vulnerable among them have at their disposal many tools intended to solve their problems and to start again on the right foot. In addition, SIF offers domiciliation to CAF beneficiaries, which facilitates their administrative procedures. Indeed, having a postal address is often a sine qua non for finding a job or benefiting from health coverage.
            </p>
        </div>

        <h1 id="activTitle">The Mobil'douche association provides free showers on board its motorhomes.</h1>
        <div className="activInfo">
            <p>
          Because the association has been offering since 2012 to homeless and poorly housed people to shower on board a motorhome. Two vehicles thus crisscross Paris and several suburban municipalities (Vanves, Issy-Moulineaux, etc.) and a third has been launched in Avignon (Vaucluse). "We are reconstructing a real bathroom," says Ranzika Faïd, president of Mobil'douche. We offer them to shower, we also provide them with hygiene products (shower gel, toothbrush, toothpaste, razor ...) and we can dress them from head to toe!
          </p>
          <img
            src="https://images.unsplash.com/photo-1561361398-d1f7b6cfee79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            alt="h1"
          />
        </div>

        <h1 id="activTitle">SOLIDARITY MEALS AND PACKAGES</h1>
        <div className="activInfo">
          <img
            src="https://images.unsplash.com/photo-1601908263533-b05917a680eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1240&q=80"
            alt="h1"
          />
            <p>
            
                Every winter, SIF organizes lunches for homeless people. This social action takes place at the Maison des Solidarités in partnership with the town hall of Saint-Denis. The beneficiaries are single men admitted to these solidarity lunches after examination of their profile.
                <br></br>
                The room is open Monday to Friday from 12 p.m. to 2:30 p.m. Around thirty hot and complete meals are served every day from late November to early April by SIF volunteers in a warm and friendly atmosphere. Indeed, the SIF places the social link at the heart of its actions to better break the heavy and daily loneliness experienced in the street by the most vulnerable. 
             </p>
        </div>

        <h1 id="activTitle">STREET MARAUDING</h1>
        <div className="activInfo">
        <div>
            <p>
            In Saint-Ouen, Saint-Denis and L'Île-Saint-Denis, our volunteers carried out a marauding Tuesday and Friday until late at night and will continue to help homeless people. Epi’Sol, our solidarity grocery store in Saint-Denis as well as La Mise à l'Abri (MAB) and the Emergency Housing Center (CHU) for women in Massy remain open. We of course observe the health rules in force and all barrier gestures: hand washing, wearing a mask, safety distance, reinforced hygiene, etc.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="h1"
          />
        </div>
          
    
      </>
    );
  }
}

export default ActivityContent;

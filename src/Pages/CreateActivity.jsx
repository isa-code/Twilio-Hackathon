import React from "react";
import { Component } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SousNav from "../Components/SousNav";
import './Create.css';

class CreateActivity extends Component {

    render(){
        return(
            <>
            <Navbar/>
            <SousNav/>
            <div className="create" >
            <div >
            <div className="createInfo">
                    <select id="CreateActivSelect">
                        <option value="">Chose a mission</option>
                        <option value="">Street maraud</option>
                        <option value="">Guidance</option>
                        <option value="">Social guidance</option>
                        <option value="">A night in a warm bed</option>
                        <option value="">Social guidance</option>
                        <option value="">Pampering</option>
                    </select>

          <input type="text" placeholder="Chose a title for your mission" />

          <form>
            <label for="meeting-time">
              Choose a time for your appointment:
            </label>

            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value="2018-06-12T19:30"
              min="2018-06-07T00:00"
              max="2018-06-14T00:00"
            />
            <button>OK</button>
          </form>
          <input type="text" placeholder="a small description" />
        </div>
            </div>
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="imgg" className="imgCreate"/>
            </div>
           
                
        
        <Footer/>
      </>
    );
  }
}

export default CreateActivity;

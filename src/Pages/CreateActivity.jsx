import React from "react";
import { Component } from "react";

class CreateActivity extends Component {
    
    render(){
        return(
            <>
                <div>
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
                        <label for="meeting-time">Choose a time for your appointment:</label>

                        <input type="datetime-local" id="meeting-time"
                            name="meeting-time" value="2018-06-12T19:30"
                            min="2018-06-07T00:00" max="2018-06-14T00:00" />
                        <button>OK</button>
                    </form>

                    <input type="text" placeholder="a small description" />
                </div>

            </>
            
        );
    }
}

export default CreateActivity;

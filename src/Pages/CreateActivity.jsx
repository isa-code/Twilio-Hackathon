import Reat from "react";
import { Component } from "react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class CreateActivity extends Component {
    constructor(props){
        super(props)

        this.state={
            date:""
        }
    }

    changeDate = (event) => {
        alert(teeeest)
    }
    
    render(){
        return(
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

                <DatePicker 
                    onChange={this.changeDate(event)}
                    selected={this.state.date} />

            </div>
        )
    }
}

export default CreateActivity;

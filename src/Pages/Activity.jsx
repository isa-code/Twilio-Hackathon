import React, { Component } from "react";
import ActivitySubscribe from "../Components/ActivitySubscribe";
import ActivityContent from "../Components/ActivityContent";

class Activity extends Component {
    render(){
        return(
            <div>
                <ActivityContent />
                <ActivitySubscribe />
            </div>
        )
    }
}

export default Activity;
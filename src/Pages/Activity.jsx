import React, { Component } from "react";
import ActivitySubscribe from "../Components/ActivitySubscribe";
import ActivityContent from "../Components/ActivityContent";
import ActivitySubsActivModal from "../Components/ActivitySubsActivModal";

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActiv: false,
    };
  }

  displayModalActiv = (event) => {
    this.setState({ modalActiv: true });
  };

  render() {
    return (
      <div>
        <ActivityContent />
        <ActivitySubscribe activOnEvent={this.displayModalActiv} />

        <ActivitySubsActivModal info={this.state.modalActiv} />
      </div>
    );
  }
}

export default Activity;

import React, { Component } from "react";
import ActivitySubscribe from "../Components/ActivitySubscribe";
import ActivityContent from "../Components/ActivityContent";
//import ActivitySubsActivModal from "../Components/ActivitySubsActivModal";
import CreateActivity from "../Pages/CreateActivity";
import ReactModal from "react-modal";
import "../Components/ModalSubs.css";
import { GrClose } from "react-icons/gr";

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActiv: false,
      modalNew: false,
      IsOpen: true,
    };
  }

  displayModalActiv = (event) => {
    this.setState({ modalActiv: true });
  };

  displayModalNew = (event) => {
    this.setState({ modalNew: true });
  };

  handleClose = () => {
    this.setState({ IsOpen: false });
  };

  render() {
    return (
      <div>
        <ActivityContent />
        <ActivitySubscribe
          activOnEvent={this.displayModalActiv}
          newOnEvent={this.displayModalNew}
        />

        {this.state.modalActiv == true && (
          <ReactModal class="modalSubs" isOpen={true}>
            <button
              type="button"
              className="modalBtnClose"
              onClick={this.handleClose}
            >
              <GrClose />
            </button>

            <div class="modalSubs">
              <h3>Thank you for joing this mission!</h3>
              <p>You will receive a confirmation soon in your emails!</p>
            </div>
          </ReactModal>
        )}

        {this.state.modalNew == true && (
          <ReactModal class="modalSubs" isOpen={true}>
            <div class="modalSubsTxt">
              <p>Done :-</p>
            </div>

            <button
              type="button"
              className="modalBtnClose"
              onClick={this.handleClose}
            >
              Fermer
            </button>
          </ReactModal>
        )}
        <CreateActivity />
      </div>
    );
  }
}

export default Activity;

import React, { Component } from "react";
import ActivitySubscribe from "../Components/ActivitySubscribe";
import ActivityContent from "../Components/ActivityContent";
import ActivitySubsActivModal from "../Components/ActivitySubsActivModal";
import CreateActivity from "../Pages/CreateActivity";
import ReactModal from "react-modal";
import "../Components/Modal.css";

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
          <ReactModal isOpen={true}>
            <div className="modal">
              <p>Done :-)</p>
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

        {this.state.modalNew == true && (
          <ReactModal isOpen={true}>
            <div className="modal">
              <p>Done :-)</p>
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

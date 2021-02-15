import React, { Component } from "react";
import ActivitySubscribe from "../Components/ActivitySubscribe";
import ActivityContent from "../Components/ActivityContent";
// import ActivitySubsActivModal from "../Components/ActivitySubsActivModal";
import Footer from "../Components/Footer";
import ReactModal from "react-modal";
import "../Components/ModalSubs.css";
import { GrClose } from "react-icons/gr";

class Activity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActiv: false,
      modalNew: false,
      isOpen: false,
    };
  }

  displayModalActiv = () => {
    this.setState({ isOpen: true });
  };

  displayModalNew = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    console.log("this.handleClose");
  };

  render() {
    return (
      <div>
        <ActivityContent />
        <ActivitySubscribe
          activOnEvent={this.displayModalActiv}
          newOnEvent={this.displayModalNew}
        />

        <ReactModal class="modalSubs" isOpen={this.state.isOpen}>
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

        <ReactModal class="modalSubs" isOpen={this.state.isOpen}>
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

        <Footer />
      </div>
    );
  }
}

export default Activity;

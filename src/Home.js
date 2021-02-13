import React, { setState, useState, useEffect } from "react";
import Maps from "../Components/Maps.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Activity from "../Pages/Activity";
import ReactModal from "react-modal";
import "../Components/Modal.css";

function Home() {
  const [isOpen, onIsOpenModal] = useState(true);
  const [close, onCloseModal] = useState(false);

  const openModal = () => {
    onIsOpenModal(true);
  };

  const closeModal = () => {
    onCloseModal(true);
    onIsOpenModal(false);
  };

  return (
    <div>
      <ReactModal isOpen={true}>
        <div className="modal">
          <div className="header"> Explanations </div>
          <button type="button" onClick={closeModal}>
            Fermer
          </button>

          {/* <button className="close" onClose={true}>
            &times;
          </button>*/}
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos?
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur sit commodi beatae optio voluptatum sed eius cumque,
            delectus saepe repudiandae explicabo nemo nam libero ad, doloribus,
            voluptas rem alias. Vitae?
          </div>
        </div>
      </ReactModal>
      <Navbar />
      <Maps />
      <Activity />
      <Footer />
    </div>
  );
}
export default Home;

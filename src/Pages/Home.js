import React, { useState } from "react";
import Maps from "../Components/Maps.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
//import Activity from "../Pages/Activity";
import ReactModal from "react-modal";
import "../Components/Modal.css";
import SousNav from "../Components/SousNav"

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ReactModal isOpen={isOpen} style={{ borderRadius: "15px" }}>
        <div className="modal">
          <div className="header"> Explanations </div>

          <div className="content">
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
        <button type="button" className="modalBtnClose" onClick={handleClose}>
          Fermer
        </button>
      </ReactModal>
      <Navbar />
      <SousNav />
      <Maps />
      <Footer />
    </div>
  );
}
export default Home;

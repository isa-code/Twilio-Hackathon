import React, { useState, useEffect } from "react";
import Modal from "../Components/Modal";
import Maps from '../Components/Maps.jsx';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Activity from '../Pages/Activity';


function Home() {
  
    return (
        <div>
          <Modal onLoad={true} />
            <Navbar />
            <Maps/>
            <Activity />
            <Footer />
        </div>
      );
    }
    export default Home;
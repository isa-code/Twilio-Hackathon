
import React from 'react';
import './App.css';
import Maps from './components/Maps.jsx';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Activity from './Pages/Activity';

function App() {
  return (
    <div>
      <Navbar />
       <Maps/>
      <Activity />
      <Footer />
    </div>
  );

}

export default App;
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Brokenfile from "../images/Brokenfile.png";
function NotFound404() {
  return (
    <div>
      <div className="brockenPage">
        <h1 className="brockenTitle">Désolée, cette page n'existe pas</h1>
        <img src={Brokenfile} alt="Page cassée" className="brockenImage" />
        <Link className="linkReturnToHome" to="/">
          Retour Accueil
        </Link>
      </div>
      <footer className="footer">Tout droit réservé @ WilCodeSchool</footer>
    </div>
  );
}
export default NotFound404;
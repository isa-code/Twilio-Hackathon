import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import './Soutenir.css';

function Soutien() {
  return (
    <>

    <Navbar/>
      <div className="soutienstyle">
     
      <h1>
        Soutenir nos actions et connaitre les assosiations que nous aident
      </h1>

        <div className="informations">
          <ul>
            <li>
              <img
                src="http://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/419257/Logo_font_leckerli_no_shadow_d1lchp.png"
                alt="linkee"
              />
              <p>
                Créée en 2016, l’application Linkee répond à un double enjeu :
                aider les plus démunis et lutter contre le gaspillage
                alimentaire. Pour ce faire, elle a mis au point une application
                faisant le lien entre les professionnels partenaires qui
                effectuent des dons alimentaires, les associations caritatives
                et les linkeurs, des bénévoles mobilisés ponctuellement pour
                transporter les sacs d’invendus d’un point à l’autre.
              </p>
            </li>
            <li>
              <img
                src="https://www.lavoixdelenfant.org/wp-content/uploads/2019/12/chorbaAVECACCROCHE-MARINEetGRIS.png"
                alt="chorba"
              />
              <p>
                La Chorba est une association laïque et humanitaire, qui lutte
                contre la faim et l'exclusion sociale depuis 1998.
              </p>
            </li>
            <li>
              <img
                src="https://www.helloasso.com/assets/img/logos/croix%20rouge%20francaise%20unite%20locale%20de%20suresnes-ee9b063c1a1a4c38b4828f3aa26440e6.png"
                alt="croix"
              />
              <p>
                La Croix-Rouge française, c’est à la fois une association de 54
                000 bénévoles engagés depuis près de 150 ans sur de nombreux
                fronts de la lutte contre les précarités et une entreprise à but
                non lucratif de services dans les champs sanitaire, social,
                médico-social et de la formation avec 18 000 salariés dans plus
                de 600 établissements.
              </p>
            </li>
          </ul>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Soutien;

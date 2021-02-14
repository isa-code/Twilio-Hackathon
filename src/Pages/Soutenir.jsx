import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Soutenir.css";
import SousNav from "../Components/SousNav";

function Soutien() {
  return (
    <>
      <Navbar />
      <SousNav/>
      <div className="soutienstyle">
        <h1 className="titre">
        Support our actions and get to know our charities helping us
        </h1>

        <div className="informations">
          <ul>
            <li>
              <img
                src="http://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/419257/Logo_font_leckerli_no_shadow_d1lchp.png"
                alt="linkee"
              />
              <p>
              Created in 2016, our Linkee application responds to a double issue: 
              help the most unfortunate and help fight food waste. To reach those goals, 
              the app is the link between profesional partners donating food, charities and linkers,
              voluntary people mobilised transportation of unsold goods from one point to another.
              </p>
            </li>
            <li>
              <img
                src="https://www.lavoixdelenfant.org/wp-content/uploads/2019/12/chorbaAVECACCROCHE-MARINEetGRIS.png"
                alt="chorba"
              />
              <p>
              Chorba is a nondenominational humanitarian charity fighting against hunger and 
              social exclusion since 1998.
              </p>
            </li>
            <li>
              <img
                src="https://www.helloasso.com/assets/img/logos/croix%20rouge%20francaise%20unite%20locale%20de%20suresnes-ee9b063c1a1a4c38b4828f3aa26440e6.png"
                alt="croix"
              />
              <p>
              The French Red Cross is a charity with 54 000 volunteers engaged for almost 150 
              years on various fronts to fight against poverty.
              A non profit entreprise taking care of sanitary social and medico-social issues
              with 18 000 workers in more than 600 establishments.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Soutien;

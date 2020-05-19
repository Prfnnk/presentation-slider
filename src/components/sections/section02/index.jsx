import React from "react";
import "./styles/style.scss";
import Arrow from "../section01/img/arrow.png";

import IceOne from "./img/ice_3.png";
import IceTwo from "./img/ice_4.png";
import IceThree from "./img/ice_5.png";
import IceFour from "./img/ice_6.png";

const SectionSecond = () => {
  return (
    <div className="second">
      <div className="second__title">
        Основа терапии —
        <br /> патогенез СД2
      </div>
      <div className="second__ice" style={{ top: "20px", right: "0" }}>
        <img src={IceOne} alt="лед" />
      </div>
      <div className="second__ice" style={{ bottom: "115px", right: "250px" }}>
        <img src={IceTwo} alt="лед" />
      </div>
      <div className="second__ice" style={{ bottom: "220px", left: "230px" }}>
        <img src={IceThree} alt="лед" />
      </div>
      <div className="second__ice" style={{ top: "160px", left: "80px" }}>
        <img src={IceFour} alt="лед" />
      </div>
      <div className="down">
        <div className="down-text">Листайте вниз</div>
        <div className="down-pic">
          <img src={Arrow} alt="стрелка" />
        </div>
      </div>
    </div>
  );
};
export default SectionSecond;

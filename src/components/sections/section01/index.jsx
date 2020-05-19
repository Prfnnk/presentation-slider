import React from "react";
import "./styles/style.scss";
import Arrow from "./img/arrow.png";

const SectionFirst = () => {
  return (
    <div className="first">
      <div className="first__title">
        Всегда ли цели терапии СД2 <br /> на поверхности?
      </div>
      <div className="first__aim first__aim_main">
        <div className="circle">
          <div className="circle__middle"></div>
          <div className="circle__small"></div>
        </div>
        <div className="first__aim-text">Цель по HbA1c</div>
      </div>
      <div className="first__aim first__aim_gypo">
        <div className="first__aim-text">Гипогликемия</div>
        <div className="circle circle_middle">
          <div className="circle__middle"></div>
          <div className="circle__small"></div>
        </div>
      </div>
      <div className="first__aim first__aim_SD">
        <div className="first__aim-text">Осложнения СД</div>
        <div className="circle circle_SD">
          <div className="circle__middle"></div>
          <div className="circle__small"></div>
        </div>
      </div>
      <div className="first__aim first__aim_CC">
        <div className="first__aim-text">СС риски</div>
        <div className="circle circle_little">
          <div className="circle__middle"></div>
          <div className="circle__small"></div>
        </div>
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
export default SectionFirst;

import React, { useState, useCallback } from "react";
import cn from "classnames";
import "./styles/style.scss";
import TabOne from "./img/tab-1.png";
import TabTwo from "./img/tab-2.png";
import TabThree from "./img/tab-3.png";

const SectionThird = () => {
  const [translateRange, setTranslateRange] = useState(-10);
  const [smooth, setSmooth] = useState(false);
  const [translateSlide, setTranslateSlide] = useState(0);

  const touchStart = (e) => {
    setSmooth(false);
  };

  const touchEnd = (e) => {
    const start = -10;
    const middle = 295;
    const end = 605;
    if (translateRange <= 155) {
      setTranslateRange(start);
      setTranslateSlide(0);
    } else if (translateRange >= 155 && translateRange <= 450) {
      setTranslateRange(middle);
      setTranslateSlide(-1024);
    } else if (translateRange >= 450) {
      setTranslateRange(end);
      setTranslateSlide(-2048);
    }
    setSmooth(true);
  };

  const touchMove = (e) => {
    const clientX = e.touches[0].clientX;
    const rangeX = clientX - 210;
    const slideX = -(3.4 * rangeX);
    setTranslateRange(rangeX);
    setTranslateSlide(slideX);
    if (rangeX <= -10) {
      setTranslateRange(-10);
    }
    if (rangeX >= 605) {
      setTranslateRange(605);
    }

    if (slideX > 0) {
      setTranslateSlide(0);
    }
    if (slideX < -2048) {
      setTranslateSlide(-2048);
    }
  };

  return (
    <div className="third">
      <div
        className="tabs"
        style={{
          transform: `translateX(${translateSlide}px)`,
          transition: smooth ? "0.5s" : "0s",
        }}
      >
        <div className="block__background block__background_one">
          <div className="third__block third__block">
            <div className="block__title">Звенья патогенеза СД2</div>
            <div className="block__pic">
              <img src={TabOne} alt="Слайд 1" />
            </div>
          </div>
        </div>

        <div className="block__background block__background_two">
          <div className="third__block third__block">
            <div className="block__title">Смертельный октет</div>
            <div className="block__pic">
              <img src={TabTwo} alt="Слайд 2" />
            </div>
          </div>
        </div>

        <div className="block__background block__background_three">
          <div className="third__block third__block">
            <div className="block__title">Звенья патогенеза СД2</div>
            <div className="block__pic">
              <img src={TabThree} alt="Слайд 3" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-block">
        <div className="slider-wrapper">
          <div
            className="polygon"
            style={{
              transform: `translateX(${translateRange}px)`,
              transition: smooth ? "0.5s" : "0s",
            }}
            onTouchStart={(e) => touchStart(e)}
            onTouchMove={(e) => touchMove(e)}
            onTouchEnd={(e) => touchEnd(e)}
          ></div>

          <div className="slider"></div>
          <div
            className="slider slider_fill"
            style={{
              width: `${translateRange + 10}px`,
              transition: smooth ? "0.5s" : "0s",
            }}
          ></div>

          <div className="slider__year">
            <div className="slider__year-item">1988</div>
            <div className="slider__year-item">2009</div>
            <div className="slider__year-item">2016</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThird;

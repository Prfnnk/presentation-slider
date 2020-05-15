import React, { useState } from "react";
import cn from "classnames";
import "./styles/style.scss";
import TabOne from "./img/tab-1.png";
import TabTwo from "./img/tab-2.png";
import TabThree from "./img/tab-3.png";

const SectionThird = () => {
  const [activeTab, setActiveTab] = useState(0);

  console.log(activeTab);

  return (
    <div className="third">
      <div
        className={cn("tabs", {
          tabs_two: activeTab === 1,
          tabs_three: activeTab === 2,
        })}
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
            className={cn("polygon", {
              polygon_two: activeTab === 1,
              polygon_three: activeTab === 2,
            })}
          ></div>

          <div className="slider"></div>
          <div
            className={cn("slider", {
              slider_fill: true,
              slider_two: activeTab === 1,
              slider_three: activeTab === 2,
            })}
          ></div>

          <div className="slider__year">
            <div className="slider__year-item" onClick={() => setActiveTab(0)}>
              1988
            </div>
            <div className="slider__year-item" onClick={() => setActiveTab(1)}>
              2009
            </div>
            <div className="slider__year-item" onClick={() => setActiveTab(2)}>
              2016
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThird;

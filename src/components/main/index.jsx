import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import "./styles/style.scss";
import SectionFirst from "../sections/section01";
import SectionSecond from "../sections/section02";
import SectionThird from "../sections/section03";

const Main = () => {
  const [activePage, setActivePage] = useState(0);
  const [offsets, setOffsets] = useState([]);
  const [move, setMove] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    calcSection();
  }, []);

  const calcSection = () => {
    const sections = document.getElementsByClassName("section");
    const length = sections.length;
    let offsetsArr = [];
    for (let i = 0; i < length; i++) {
      const sectionOffset = sections[i].offsetTop;
      offsetsArr.push(sectionOffset);
    }
    setOffsets(offsetsArr);
  };

  const scrollPage = useCallback(
    (id) => {
      if (move) {
        return false;
      }
      setActivePage(id);

      setMove(true);

      window.scrollTo({
        top: offsets[id],
        behavior: "smooth",
      });

      setTimeout(() => {
        setMove(false);
      }, 1000);
    },
    [move, offsets]
  );

  const moveUp = useCallback(() => {
    console.log(moveUp, "up");
    setMove(true);
    let pageId = activePage + 1;
    setActivePage(pageId);
    if (pageId > offsets.length - 1) {
      pageId = 0;

      setActivePage(pageId);
    }
    scrollPage(pageId, true);
  }, [activePage, offsets.length, scrollPage]);

  const moveDown = useCallback(() => {
    console.log(moveDown, "down");
    setMove(true);
    let pageId = activePage - 1;
    setActivePage(pageId);

    if (pageId < 0) {
      pageId = offsets.length - 1;
      setActivePage(pageId);
    }
    scrollPage(pageId, true);
    console.log(activePage, "active");
  }, [activePage, offsets.length, scrollPage]);

  const handleMouseWheel = useCallback(
    (event) => {
      if (event.deltaY > 0 && !move) {
        moveUp(event);
      } else if (event.deltaY < 0 && !move) {
        moveDown(event);
      }

      return false;
    },
    [move, moveDown, moveUp]
  );

  const touchStart = useCallback((event) => {
    console.log(event, "kek");
    event.preventDefault();
    setTouchStartY(event.touches[0].clientY);
  }, []);

  const touchMove = useCallback(
    (event) => {
      if (move) {
        return false;
      }
      event.preventDefault();
      const currentY = event.touches[0].clientY;
      if (touchStartY < currentY) {
        moveDown(event);
        event.preventDefault();
      } else {
        moveUp(event);
        event.preventDefault();
      }
      setTouchStartY(0);
      return false;
    },
    [move, moveDown, moveUp, touchStartY]
  );

  useEffect(() => {
    window.addEventListener("mousewheel", handleMouseWheel, {
      passive: false,
    });
    return () =>
      window.removeEventListener("mousewheel", handleMouseWheel, {
        passive: false,
      });
  }, [handleMouseWheel]);

  // useEffect(() => {
  //   window.addEventListener("touchstart", touchStart, {
  //     passive: false,
  //   });
  //   return () => window.removeEventListener("touchstart", touchStart);
  // }, [touchStart]);

  // // useEffect(() => {
  // //   window.addEventListener("touchmove", touchMove, {
  // //     passive: false,
  // //   });
  // //   return () => window.removeEventListener("touchmove", touchMove);
  // // }, [touchMove]);

  return (
    <main className="main">
      <section className="section">
        <SectionFirst></SectionFirst>
      </section>
      <section className="section">
        <SectionSecond></SectionSecond>
      </section>
      <section className="section">
        <SectionThird></SectionThird>
      </section>
      <div className="pagination">
        <div className="pagination__list">
          {offsets.map((item, index) => {
            return (
              <div
                key={item}
                className={cn("pagination__item", {
                  pagination__item_active: index === activePage,
                })}
                onClick={() => scrollPage(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Main;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { NavHeaderList } from "./NavHeaderList";
import { content } from "../../../assets/content/content";
import style from "./NavHeader.module.css";

let hamIsOpen = false;

export const NavHeader = props => {
  // hamState
  const [hamState, updateHam] = useState([style.ham]);
  let newHamState;
  let savedHamIsOpen;

  const rerenderHam = () => {
    if (window.innerWidth > 768) {
      savedHamIsOpen = hamIsOpen;
    } else {
      hamIsOpen = savedHamIsOpen;
    }
  };

  const toggleHam = () => {
    if (window.innerWidth > 768) {
    } else {
      if (hamIsOpen) {
        newHamState = [...hamState];
        newHamState.pop();
        updateHam(newHamState);
        setNavlistState();
      } else if (!hamIsOpen) {
        newHamState = [...hamState];
        newHamState.push(style.cross);
        updateHam(newHamState);
      }
      hamIsOpen = !hamIsOpen;
    }
  };

  window.addEventListener("resize", rerenderHam);

  // navlistState
  const [navlistState, updateNavlist] = useState(content.NavHeaderLinks);
  let newNavlistState;
  const setNavlistState = index => {
    if (index != null) {
      newNavlistState = [...content.NavHeaderLinks[index].branch];
      newNavlistState.unshift({ name: "Back" });
    } else {
      newNavlistState = content.NavHeaderLinks;
    }
    updateNavlist(newNavlistState);
  };

  return (
    <div className={style.navHeader}>
      <div className={style.bar + " " + (hamIsOpen ? style.open : style.close)}>
        <Link className={style.iconBox} to="/home">
          <img
            className={style.icon}
            src={require("../../../assets/images/icon.png")}
            alt="icon"
          />
        </Link>
        <div className={style.hamArea} onClick={toggleHam}>
          <span className={hamState.join(" ")} />
        </div>
      </div>
      <nav className={style.navBox}>
        <div
          className={
            style.navClickArea + " " + (hamIsOpen ? style.open : style.close)
          }
          onClick={() => toggleHam()}
        />
        <div
          className={
            style.navListBg + " " + (hamIsOpen ? style.open : style.close)
          }
        >
          <NavHeaderList
            toggleHam={toggleHam}
            hamIsOpen={hamIsOpen}
            content={navlistState}
            update={setNavlistState}
          />
        </div>
      </nav>
    </div>
  );
};

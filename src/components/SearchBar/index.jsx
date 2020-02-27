import React from "react";
import { NavLink } from "react-router-dom";

import style from "./SearchBar.module.css";

export const SearchBar = props => {
  window.addEventListener("resize", props.updateDevice);

  const tabs = ["All", "Code", "Design", "Robot", "Others"];

  return (
    <div className={style.tabSelector}>
      {props.device === "desktop" ? (
        <div className={style.flex}>
          {tabs.map((value, index) => {
            return (
              <NavLink
                to={`/portfolio/${value.toLowerCase()}`}
                className={style.box}
                key={index}
              >
                {value}
              </NavLink>
            );
          })}
        </div>
      ) : (
        <div className={style.dropdownBox}>
          <select name="Genre" className={style.dropdownBar}>
            {tabs.map((value, index) => {
              return (
                <option value={value} key={index}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      )}
      <div className={style.searchBox}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search"
          onChange={event => {
            props.updateDisplayContent(event.target.value);
          }}
        />
        <i className={`fas fa-filter ${style.icon}`} />
        {props.displayModeIsGrid === true ? (
          <i onClick={props.toggleDisplayMode} className={`fas fa-th-large ${style.icon}`} />
        ) : (
          <i onClick={props.toggleDisplayMode} className={`fas fa-th-list ${style.icon}`} />
        )}
      </div>
    </div>
  );
};

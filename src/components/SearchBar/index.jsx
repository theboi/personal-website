import React from "react";
import { NavLink } from "react-router-dom";

import style from "./SearchBar.module.css";

export const SearchBar = props => {
  const tabs = ["All", "Code", "Design", "Robot", "Others"];
  return (
    <div className={style.tabSelector}>
      {props.device === "desktop" ? (
        <div className={style.flex}>
          {tabs.map((value, index) => {
            return (
              <NavLink
                onClick={() => props.setCurrentTab(value.toLowerCase())}
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
          <div className={style.dropdownBar}>{props.currentTab}</div>
          <div className={style.dropdownTab}>
            {tabs.map((value, index) => {
              return (
                <NavLink
                onClick={() => props.setCurrentTab(value.toLowerCase())}
                to={`/portfolio/${value.toLowerCase()}`}
                className={style.dropdownElement}
                key={index}
              >
                {value}
              </NavLink>
              )
            })}
          </div>
        </div>
      )}
      <div className={style.searchBox}>
        <input
          className={style.searchBar}
          type="text"
          placeholder="Search"
          onChange={event => {
            props.setSearchBarInput(event.target.value)
            props.updateDisplayContent();
          }}
        />
        <i className={`fas fa-filter ${style.icon}`} />
        {props.displayModeIsGrid === true ? (
          <i
            onClick={props.toggleDisplayMode}
            className={`fas fa-th-large ${style.icon}`}
          />
        ) : (
          <i
            onClick={props.toggleDisplayMode}
            className={`fas fa-th-list ${style.icon}`}
          />
        )}
      </div>
    </div>
  );
};

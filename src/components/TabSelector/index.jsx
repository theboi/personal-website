import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../TabSelector/TabSelector.module.css';

export const TabSelector = (props) => {
  const tabs = ["Projects", "Timeline", "Experience"]
  return (
    <div className={style.tabSelector}>
      <h1 className={style.header}>{props.current}</h1>
      <div className={style.flex}>
        {tabs.map((value, index) => {
          return (
            <NavLink
              to={`/portfolio/${value.toLowerCase()}`}
              className={style.box}
              key={index} >
              {value}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}
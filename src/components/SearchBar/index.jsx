import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './SearchBar.module.css';

export const SearchBar = (props) => {
  const tabs = ["Projects", "Timeline", "Experience"]

  let textboxValue;


  // search algorithm
  const textboxChange = event => {
    textboxValue = event.target.value
      .replace(/\s/g, "")
      .replace(/[^a-zA-Z0-9!@#$%^&*'" ]/g, "")
      .toLowerCase();
    console.log(textboxValue);
    let searchResultsArr = [];
    if (textboxValue !== "") {
      props.cont.map(value => {
        const titleLC = value.header.title.replace(/\s/g, "").toLowerCase();
        const subtitleLC = value.header.subtitle
          .replace(/\s/g, "")
          .toLowerCase();
        const tagsLC = value.header.tags.map(value => {
          return value.replace(/\s/g, "").toLowerCase();
        });

        if (
          RegExp(textboxValue).test(titleLC) === true ||
          RegExp(textboxValue).test(subtitleLC) === true ||
          RegExp(textboxValue).test(tagsLC.map(value => value)) === true
        ) {
          searchResultsArr.push(value);
        }
        return null;
      });
      props.updateListValue(props.searchResultsArr);
    } else {
      props.updateListValue(props.cont);
    }
    return null;
  };

  return (
    <div className={style.tabSelector}>
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
      <input
        className={style.searchBar}
        type="text"
        placeholder="Search"
        onChange={event => {
          textboxChange(event);
        }}
      />
    </div>
  )
}
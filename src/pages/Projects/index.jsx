import React, { useState } from "react";

import style from "./Projects.module.css";
import { content } from "../../assets/content/content";
import { ProjectSelectList } from "../../components/Projects/ProjectSelectList";
import { TabSelector } from "../../components/TabSelector";

export const Projects = () => {
  const cont = content.Projects;
  let textboxValue;

  const [outputList, updateListValue] = useState(cont);

  // search algorithm
  const textboxChange = event => {
    textboxValue = event.target.value
      .replace(/\s/g, "")
      .replace(/[^a-zA-Z0-9!@#$%^&*'" ]/g, "")
      .toLowerCase();
    console.log(textboxValue);
    let searchResultsArr = [];
    if (textboxValue !== "") {
      cont.map(value => {
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
      updateListValue(searchResultsArr);
    } else {
      updateListValue(cont);
    }
    return null;
  };

  return (
    <div className={style.projects}>
      <TabSelector current="Projects" />
      <input
        className={style.searchBar}
        type="text"
        placeholder="Search"
        onChange={event => {
          textboxChange(event);
        }}
      />
      <ProjectSelectList content={outputList} />
    </div>
  );
};

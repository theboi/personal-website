import React from "react";

import style from "../Projects.module.css";
import { ProjectSelectItem } from "./ProjectSelectItem";

export const ProjectSelectList = props => {
  const cont = props.content;
  return (
    <div>
      <ul className={style.listItemBox}>
        {cont.map((content, index) => {
          return (
            <ProjectSelectItem content={content} key={index} index={index} />
          );
        })}
      </ul>
    </div>
  );
};

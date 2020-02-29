import React from "react";

import style from "./ProjectList.module.css";
import { ProjectListCard } from "./ProjectListCard";

export const ProjectList = props => {
  const cont = props.content;
  
  return (
    <div>
      <ul className={style.listItemBox}>
        {cont.map((value, index) => {
          return (
            <ProjectListCard
              {...props}
              content={value}
              key={index}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

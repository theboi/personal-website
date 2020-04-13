import React from "react";
import { Link } from "react-router-dom";

import listStyle from "./ProjectList.module.css";
import gridStyle from "./ProjectGrid.module.css";

export const ProjectCard = props => {
  const style = props.displayModeIsGrid ? gridStyle : listStyle;
  const currentContent = props.content;
  let currentLink = props.content.header.title
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

  return (
    <li>
      <Link
        to={"/portfolio/projects/" + currentLink}
        className={style.listItem}
      >
        <img
          className={style.listItemImg}
          src={(currentContent.header.image?.startsWith('http') ?? true) ? currentContent.header.image : require(`../../../assets/images/Projects/${currentContent.header.image}.jpg`)}
          alt={currentContent.header.title}
        />
        <div className={style.listItemVertical}>
          <p className={style.listItemGenre}>
            {currentContent.header.genre.map(value => value.toLocaleUpperCase()).join(" | ")}
          </p>
          <p className={style.listItemTitle}>{currentContent.header.display}</p>
          <p className={style.listItemSubtitle}>
            {currentContent.header.subtitle}
          </p>
        </div>
        {props.device === "desktop" ? (
          <p className={style.listItemDate}>{currentContent.header.date}</p>
        ) : null}
      </Link>
    </li>
  );
};
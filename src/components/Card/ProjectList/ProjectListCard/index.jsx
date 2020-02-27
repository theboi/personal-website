import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "../ProjectList.module.css";

export const ProjectListCard = props => {
  const currentContent = props.content;
  let currentLink = props.content.header.title
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();

  return (
    <div>
      {props.device === "desktop" ? (
        <li>
          <Link
            to={"/portfolio/projects/" + currentLink}
            className={style.listItem}
            onClick={() => props.setCurrentDisplayPage(props.content)}
          >
            <img
              className={style.listItemImg}
              src={currentContent.header.image}
              alt={currentContent.header.title}
            />
            <div className={style.listItemVertical}>
              <p className={style.listItemTitle}>
                {currentContent.header.title}
              </p>
              <p className={style.listItemSubtitle}>
                {currentContent.header.subtitle}
              </p>
            </div>
            <p className={style.listItemDate}>{currentContent.header.date}</p>
          </Link>
        </li>
      ) : (
        <li>
          <Link
            to={"/portfolio/projects/" + currentLink}
            className={style.listItem}
            onClick={() => props.setCurrentDisplayPage(props.content)}
          >
            <img
              className={style.listItemImg}
              src={currentContent.header.image}
              alt={currentContent.header.title}
            />
            <div className={style.listItemVertical}>
              <p className={style.listItemTitle}>
                {currentContent.header.display}
              </p>
              <p className={style.listItemSubtitle}>
                {currentContent.header.subtitle}
              </p>
            </div>
          </Link>
        </li>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../../ProjectSelect.module.css';

const ProjectSelectItem = (props) => {
  const currentContent = props.content;
  let currentLink = props.content.header.title.replace(" ", "-").toLowerCase();

  // screenState
  const [screenWidth, setScreen] = useState(window.innerWidth);
  let newScreenState;
  const setScreenMode = () => {
    newScreenState = window.innerWidth;
    setScreen(newScreenState);
  }
  window.addEventListener('resize', setScreenMode);

  if (screenWidth < 768) {
    return (
      <li>
        <Link to={"/portfolio/projects/" + currentLink} className={style.listItem}>
          <img className={style.listItemImg} src={currentContent.header.image} alt={currentContent.header.title} />
          <div className={style.listItemVertical}>
            <p className={style.listItemTitle}>{currentContent.header.title}</p>
            <p className={style.listItemSubtitle}>{currentContent.header.subtitle}</p>
          </div>
        </Link>
      </li>
    )
  } else {
    return (
      <li>
        <Link to={"/portfolio/projects/" + currentLink} className={style.listItem}>
          <img className={style.listItemImg} src={currentContent.header.image} alt={currentContent.header.title} />
          <div className={style.listItemVertical}>
            <p className={style.listItemTitle}>{currentContent.header.title}</p>
            <p className={style.listItemSubtitle}>{currentContent.header.subtitle}</p>
          </div>
          <p className={style.listItemDate}>{currentContent.header.date}</p>
          <p className={style.listItemTags}>{currentContent.header.tags}</p>
        </Link>
      </li>
    )
  }

}

export default ProjectSelectItem;
import React from 'react';
import ProjectBody from './ProjectBody/ProjectBody';

import style from './ProjectContent.module.css';
import cont from '../../../assets/content/content';

const ProjectContent = (props) => {
  const currentCont = cont.Projects[0];
  let bgStyle = {
    backgroundImage: "url('https://unsplash.it/200')"
  }

  return (
    <div className={style.projectContent}>
      <div className={style.header} style={bgStyle}>
        <h1 className={style.headerTitle}>{currentCont.header.title}</h1>
        <h2 className={style.headerSubtitle}>{currentCont.header.subtitle}</h2>
        <h3 className={style.headerDate}>{currentCont.header.date}</h3>
      </div>
      <ProjectBody cont={currentCont} style={style} />
    </div>
  )
}

export default ProjectContent;
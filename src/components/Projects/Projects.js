import React from 'react';
import ProjectBody from './ProjectBody/ProjectBody';

import style from './Projects.module.css';
import cont from '../../assets/content/content';

const Projects = (props) => {
  const currentCont = cont.Projects[0];
  let bgStyle = {
    backgroundImage: "url('https://unsplash.it/200')"
  }

  return (
    <div className={style.projects}>
      <div className={style.header} style={bgStyle}>
        <h1 className={style.headerTitle}>{currentCont.header.title}</h1>
        <h2 className={style.headerSubtitle}>{currentCont.header.subtitle}</h2>
        <h3 className={style.headerDate}>{currentCont.header.date}</h3>
      </div>
      <ProjectBody cont={currentCont} />
    </div>
  )
}

export default Projects;
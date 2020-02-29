import React from 'react';
import style from './ProjectGrid.module.css';

import { ProjectGridCard } from './ProjectGridCard';

export const ProjectGrid = (props) => {
  return (
    <div className={style.gridBox}>
      {props.content.map((value, index) => {
        return (
          <ProjectGridCard content={value} key={index}/>
        )
      })}
    </div>
  )
}
import React from 'react';
import style from '../ProjectGrid.module.css';

export const ProjectGridCard = (props) => {
  return (
    <div className={style.card}>
      <p className={style.title}>{props.content.header.title}</p>
      <p className={style.subtitle}>{props.content.header.subtitle}</p>

    </div>
  )
}
import React from 'react';
import style from '../ProjectGrid.module.css';

export const ProjectGridCard = (props) => {
  return (
    <div className={style.card}>
      <h1 className={style.title}>{props.content.header.title}</h1>
    </div>
  )
}
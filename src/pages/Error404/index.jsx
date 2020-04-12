import React from 'react';
import { Link } from 'react-router-dom';
import style from './Error404.module.css'

export const Error404Page = () => {
  return (
    <div className={style.error404}>
      <img className={style.icon} src={require('../../assets/icons/404Icon.png')} alt="404 Icon" />
      <div>
        <h1 className={style.alertHeader}>Oops! That's a 404!</h1>
        <p className={style.alertP}>We couldn't find the page you were looking for...</p>
      </div>
      <Link className={style.link} to="/home">Take me back!</Link>
    </div>
  )
}
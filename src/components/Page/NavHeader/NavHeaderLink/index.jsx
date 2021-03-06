import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../NavHeader.module.css';

export const NavHeaderLink = (props) => {
    const cont = props.cont;
    if (cont.name === "Back") {
        return (
            <li className={style.link}>
                <div className={style.backArrow} />
                <div className={style.anchor} onClick={() => props.update()}>{cont.name}</div>
            </li>
        )
    } else if (cont.branch == null) {
        return (
            <li className={style.link}><NavLink to={cont.link} className={style.anchor} onClick={props.toggleHam}>{cont.name}</NavLink></li>
        )
    } else {
        return (
            <li className={style.link}>
                <div className={style.frontArrow} />
                <div className={style.anchor} onClick={() => props.update(props.index)}>{cont.name}</div>
            </li>
        )
    }




}
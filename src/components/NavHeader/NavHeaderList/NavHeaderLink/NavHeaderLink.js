import React from 'react';
import { Link } from 'react-router-dom';

import style from '../../NavHeader.module.css';


const NavHeaderLink = (props) => {
    const cont = props.cont;
    if (cont.name === "Back") {
        return (
            <li className={style.link}>
                <div className={style.backarrow} />
                <div className={style.anchor} onClick={() => props.update()}>{cont.name}</div>
            </li>
        )
    } else if (cont.branch == null) {
        return (
            <li className={style.link}><Link to={cont.link} className={style.anchor}>{cont.name}</Link></li>
        )
    } else {
        return (
            <li className={style.link}>
                <div className={style.frontarrow} />
                <div className={style.anchor} onClick={() => props.update(props.index)}>{cont.name}</div>
            </li>
        )
    }




}

export default NavHeaderLink;
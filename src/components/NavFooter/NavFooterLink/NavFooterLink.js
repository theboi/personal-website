import React from 'react';
import { Link } from 'react-router-dom';

import style from '../NavFooter.module.css';

const NavFooter = (props) => {
    const cont = props.cont;
    console.log(cont.icon);

    return (
        <li className={style.link}>
            <a
                className={style.anchor}
                href={cont.link}
                target="_blank"
                rel="noopener noreferrer"
                alt={cont.name}>

                <i className={cont.icon + " " + style.icon} />
            </a>
        </li>
    )
}

export default NavFooter;
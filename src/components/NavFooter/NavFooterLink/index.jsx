import React from 'react';

import style from '../NavFooter.module.css';

export const NavFooterLink = (props) => {
    const cont = props.cont;

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
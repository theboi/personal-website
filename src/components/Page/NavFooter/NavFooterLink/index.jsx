import React from 'react';

import style from '../NavFooter.module.css';

export const NavFooterLink = (props) => {
    const value = props.value;

    return (
        <li className={style.link}>
            <a
                className={style.anchor}
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                alt={value.name}>

                <i className={value.icon + " " + style.icon} />
            </a>
        </li>
    )
}
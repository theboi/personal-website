import React from 'react';

import {NavHeaderLink} from './NavHeaderLink';
import style from '../NavHeader.module.css';

export const NavHeaderList = (props) => {
    return (
        <div className={style.nav + " " + (props.hamIsOpen ? style.open : style.close)}>
            <ul className={style.linkList}>
                {props.content.map((cont, index) => {
                    return <NavHeaderLink
                        cont={cont}
                        key={index}
                        index={index}
                        update={props.update}
                        toggleHam={props.toggleHam} />
                })}
            </ul>
        </div>
    )
}
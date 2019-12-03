import React from 'react';

import NavHeaderLink from './NavHeaderLink/NavHeaderLink';
import style from '../NavHeader.module.css';

const NavHeaderList = (props) => {
    return (
        <div className={style.nav + " " + (props.hamIsOpen ? style.open : style.close)}>
                <ul className={style.linklist}>
                    {props.content.map((cont, index) => {
                        return <NavHeaderLink 
                        cont={cont} 
                        key={index} 
                        index={index}
                        update={props.update} />
                    })}
                </ul>
            </div>
    )
}

export default NavHeaderList
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavHeaderList from './NavHeaderList/NavHeaderList';
import content from '../../assets/content/content';
import style from './NavHeader.module.css';

let hamIsOpen = false;

const NavHeader = (props) => {

    // hamState
    const [hamState, updateHam] = useState([style.ham]);
    let newHamState;
    const toggleHam = () => {
        if (hamIsOpen) {
            newHamState = [...hamState];
            newHamState.pop();
            updateHam(newHamState);
            setNavlistState();
        } else if (!hamIsOpen) {
            newHamState = [...hamState];
            newHamState.push(style.cross);
            updateHam(newHamState);
        }
        hamIsOpen = !hamIsOpen;
    }

    // navlistState
    const [navlistState, updateNavlist] = useState(content.NavLinks);
    let newNavlistState;
    const setNavlistState = (index) => {
        if (index != null) {
            newNavlistState = [...content.NavLinks[index].branch];
            newNavlistState.unshift({ name: "Back" });
            console.log(newNavlistState);
        } else {
            newNavlistState = content.NavLinks;
        }
        updateNavlist(newNavlistState);
    }

    return (
        <div className={style.navheader}>
            <div className={style.bar}>
                <Link to="home">
                    <img className={style.icon} src={require('../../assets/images/icon.png')} alt="icon" />
                </Link>
                <div className={style.hamarea} onClick={toggleHam}>
                    <span className={hamState.join(' ')}/>
                </div>
            </div>
            <nav>
                <NavHeaderList
                    hamIsOpen={hamIsOpen}
                    content={navlistState}
                    update={setNavlistState}
                />
            </nav>
        </div>
    );
}

export default NavHeader;
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
        if (window.innerWidth > 768) {
            hamIsOpen = true;
        }
        
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

    if (window.innerWidth > "768px") {
        hamIsOpen = true;
    }

    // navlistState
    const [navlistState, updateNavlist] = useState(content.NavLinks);
    let newNavlistState;
    const setNavlistState = (index) => {
        if (index != null) {
            newNavlistState = [...content.NavLinks[index].branch];
            newNavlistState.unshift({ name: "Back" });
        } else {
            newNavlistState = content.NavLinks;
        }
        updateNavlist(newNavlistState);
    }

    return (
        <div className={style.navheader}>
            <div className={style.bar + " " + (hamIsOpen ? style.open : style.close)}>
                <Link to="home">
                    <img className={style.icon} src={require('../../assets/images/icon.png')} alt="icon" />
                </Link>
                <div className={style.hamarea} onClick={toggleHam}>
                    <span className={hamState.join(' ')} />
                </div>
            </div>
            <nav className={style.navbox} >
                <div
                    className={style.navclickarea + " " + (hamIsOpen ? style.open : style.close)}
                    onClick={() => toggleHam()} />
                <div className={style.navlistbg + " " + (hamIsOpen ? style.open : style.close)}>
                    <NavHeaderList
                        toggleHam={toggleHam}
                        hamIsOpen={hamIsOpen}
                        content={navlistState}
                        update={setNavlistState} />
                </div>
            </nav>
        </div>
    );
}

export default NavHeader;
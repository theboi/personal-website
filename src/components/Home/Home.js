import React, { useState } from 'react';

import style from './Home.module.css'
import S1Line from './S1Line/S1Line'

const Home = () => {

    // screenState
    const [screenState, setScreen] = useState((window.innerWidth > 768) ? "desktop" : "mobile");
    let newScreenState;
    const setScreenMode = () => {
        newScreenState = [...screenState];
        if (window.innerWidth > 768) {
            newScreenState = "desktop";
        } else {
            newScreenState = "mobile";
        }
        setScreen(newScreenState);
    }
    window.addEventListener('resize', setScreenMode);

    return (
        <div>
            <section className={style.s1}>
                <S1Line weight="w900" screenState={screenState}/>
                <S1Line weight="w800" screenState={screenState}/>
                <S1Line weight="w700" screenState={screenState}/>
                <S1Line weight="w600" screenState={screenState}/>
            </section>
        </div>
    )
}

export default Home;
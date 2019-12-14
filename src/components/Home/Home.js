import React from 'react';
import { Link } from 'react-router-dom';

import style from './Home.module.css';
import S1Line from './S1Line/S1Line';

const Home = () => {
    return (
        <div>
            <section className={style.s1}>
                <S1Line weight="w900" />
                <S1Line weight="w800" />
                <S1Line weight="w700" />
                <S1Line weight="w600" />
            </section>
            <section className={style.s2}>
                <Link className={style.viewProjects} to="projects">My work</Link>
            </section>
        </div>
    )
}

export default Home;
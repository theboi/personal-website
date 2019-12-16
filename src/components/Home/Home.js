import React from 'react';
import { Link } from 'react-router-dom';

import style from './Home.module.css';
import S1Line from './S1Line/S1Line';

const Home = () => {
    return (
        <div className={style.home}>
            <section className={style.sAnim}>
                <div className={style.sAnimBox}>
                    <S1Line weight="w900" />
                    <S1Line weight="w800" />
                    <S1Line weight="w700" />
                    <S1Line weight="w600" />
                </div>
            </section>
            <section className={style.sIntro}>
                <div className={style.cont}>
                    <img className={style.img} src={require("../../assets/images/me.jpg")} alt="Me" />
                    <p className={style.introText}>
                        Hi! I'm <span className={style.name}>Ryan The</span>, 
                        a student at the School of Science and Technology, Singapore. <br /><br />
                        I am passionate about coding, robotics and designing. Learn more about me
                        using the links below!
                    </p>
                    <div className={style.links}>
                        <Link to="/portfolio/projects">Projects</Link>
                        <Link to="/portfolio/timeline">Timeline</Link>
                        <Link to="/portfolio/experience">Experience</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
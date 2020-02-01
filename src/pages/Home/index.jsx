import React from "react";
import { Link } from "react-router-dom";

import style from "./Home.module.css";
import { HomeLine } from "../../components/HomeLine";

export const Home = () => {
  return (
    <div className={style.home}>
      <section className={style.sAnim}>
        <div className={style.sAnimBox}>
          <HomeLine weight="w900" />
          <HomeLine weight="w800" />
          <HomeLine weight="w700" />
          <HomeLine weight="w600" />
        </div>
      </section>
      <section className={style.sIntro}>
        <div className={style.cont}>
          <img
            className={style.img}
            src={require("../../assets/images/me.jpg")}
            alt="Me"
          />
          <p className={style.introText}>
            Hi! I'm <span className={style.name}>Ryan The</span>, a student at
            the School of Science and Technology, Singapore. <br />
            <br />I am passionate about coding, robotics and design. Learn more
            about me using the links below!
          </p>
          <div className={style.links}>
            <Link to="/portfolio/projects">Projects</Link>
            <Link to="/portfolio/timeline">Timeline</Link>
            <Link to="/portfolio/experience">Experience</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

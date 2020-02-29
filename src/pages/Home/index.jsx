import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import { Link } from "react-router-dom";

import style from "./Home.module.css";
import { HomeLine } from "../../components/HomeLine";

export const Home = () => {
  return (
    <div className={style.home}>
      <Controller>
        {/* <section className={style.sAnim}>
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
            <Link to="/portfolio/all">Portfolio</Link>
          </div>
        </div>
      </section> */}
        <Scene indicators={true} duration={500} pin triggerHook={0} triggerElement={1}>
          <section className={style.section1}>
            <div>
              {[false, false, true, true, true, true, false, false, false, null].map((value, index) => {
                let returnString;
                switch ((index+1)%4) {
                  case 3: //1
                    returnString = "student";
                    break;
                  case 2: //2
                    returnString = "hobbyist";
                    break;
                  case 1: //3
                    returnString = "developer";
                    break;
                  case 0: //4
                    returnString = "designer";
                    break;
                  default:
                    returnString = "default";
                }
                return (
                    <p
                      className={`${style[`text${((index+1)%4).toString()}`]} ${
                        style.text
                      }`} style={{top: `${(index)*50}px`}}
                    >
                      {`${returnString} ${returnString} ${returnString} `}
                      <span className={value ? style.highlight : ''}>
                        {`${returnString}`}{" "}
                      </span>
                      {`${returnString} ${returnString} ${returnString} `}
                    </p>
                );
              })}
            </div>
          </section>
        </Scene>
      </Controller>
    </div>
  );
};

{
  /* <Controller>
          <Scene indicators={true} duration={1000} pin>
            <Tween from={{ x: "100px" }}>
              <div>This element gets tweened</div>
            </Tween>
          </Scene>
        </Controller> */
}

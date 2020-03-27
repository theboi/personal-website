import React from "react";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link } from "react-router-dom";

import style from "./Home.module.css";

const HomePageC = props => {
  const landingText = ["student. ", "hobbyist. ", "developer. ", "designer. "];
  return (
    <div className={style.home}>
      <Controller height={0}>
        <Scene
          triggerHook="onLeave"
          triggerElement={null}
          duration={1400}
          pin
          indicators
        >
          <Timeline duration={1400}>
            <Tween from={{ opacity: 1 }} to={{ opacity: 0 }} duration={200}>
              <section className={style.landingSection}>
                {landingText.map((value, index) => (
                  <h1 key={index} className={style.landingText}>
                    {value}
                  </h1>
                ))}
              </section>
            </Tween>
            <Timeline
              duration={1000}
              target={
                <section className={style.introSection}>
                  <h1>Hi there!</h1>
                  <p>
                    I'm <span className={style.name}>Ryan Theodore The</span>, a
                    student at the School of Science and Technology, Singapore.{" "}
                    <br />
                    <br />I am passionate about coding, robotics and design.
                    Learn more about me using the links below!
                  </p>
                  <div className={style.links}>
                    <Link to="/portfolio/all#" className={style.link}>Portfolio</Link>
                  </div>
                </section>
              }
            >
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                duration={1000}
              />
            </Timeline>
          </Timeline>
        </Scene>
      </Controller>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deviceHeight: state.deviceHeight,
    scrollPosition: state.scrollPosition,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);

//https://github.com/janpaepke/ScrollMagic/issues/64

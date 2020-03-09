import React from "react";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link } from "react-router-dom";

import style from "./Home.module.css";
import { HomeLine } from "../../components/HomeLine";

const HomeC = props => {
  const landingText = ["student. ", "hobbyist. ", "developer. ", "designer. "];
  return (
    <div className={style.home}>
      <Controller>
        <Scene
          triggerHook="onLeave"
          triggerElement={null}
          duration={5000}
          pin
          // indicators
        >
          {progress => (
            <div className={style.section1}>
              <div className={style.landingTextBox}>
                <Timeline
                  delay={1}
                  target={landingText.map((value, index) => (
                    <h1 key={index} className={style.landingText}>{value}</h1>
                  ))}
                >
                  <Tween
                    duration={1.5}
                    from={{ opacity: 0, rotationX: 100 }}
                    to={{ opacity: 1, rotationX: 0 }}
                    delay={-0.7}
                  />
                  <Tween
                    progress={progress-0.5}
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }} 
                  />
                </Timeline>
              </div>
              <Timeline totalProgress={progress / 2} paused>
                <Timeline
                  target={
                    <section className={style.introS}>
                      <h1>Hi there!</h1>
                      <p>
                        I'm{" "}
                        <span className={style.name}>Ryan Theodore The</span>, a
                        student at the School of Science and Technology,
                        Singapore. <br />
                        <br />I am passionate about coding, robotics and design.
                        Learn more about me using the links below!
                      </p>
                      <div className={style.links}>
                        <Link to="/portfolio/all">Portfolio</Link>
                      </div>
                    </section>
                  }
                >
                  <Tween
                    delay={-10}
                    duration={0.3}
                    from={{ opacity: 0, top: 0 }}
                    to={{ opacity: 1 }}
                  />
                  <Tween to={{ x: "10%" }} />
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deviceHeight: state.deviceHeight,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeC);

{
  /* <Controller>
        <Scene
          indicators={true}
          duration={"100%"}
          pin
          triggerHook={"onLeave"}
          triggerElement={null}
        >
          <section className={style.landingS}>
            <div>
              {landingText.map((value, index) => {
                let returnString;
                switch ((index + 1) % 4) {
                  case 3: //1
                    returnString = "designer";
                    break;
                  case 2: //2
                    returnString = "developer";
                    break;
                  case 1: //3
                    returnString = "hobbyist";
                    break;
                  case 0: //4
                    returnString = "student";
                    break;
                  default:
                    returnString = "default";
                }
                return (
                  <p
                    className={`${
                      style[`text${((index + 1) % 4).toString()}`]
                    } ${style.text}`}
                    style={{ top: `${index * 50}px` }}
                    key={index}
                  >
                    {`${returnString} ${returnString} ${returnString} `}
                    <span className={value ? style.highlight : ""}>
                      {`${returnString}`}{" "}
                    </span>
                    {`${returnString} ${returnString} ${returnString} `}
                  </p>
                );
              })}
            </div>
          </section>
        </Scene>
        <Scene
          indicators={true}
          duration={"100%"}
          pin
          triggerHook={"onLeave"}
          triggerElement={null}
        >
          <Tween from={{ y: "100vh" }} to={{ y: "0%" }} pin>
            <section className={style.introS}>
              <h1>Hi there!</h1>
              <p>
                I'm <span className={style.name}>Ryan The</span>, a student at
                the School of Science and Technology, Singapore. <br />
                <br />I am passionate about coding, robotics and design. Learn
                more about me using the links below!
              </p>
              <div className={style.links}>
                <Link to="/portfolio/all">Portfolio</Link>
              </div>
            </section>
          </Tween>
        </Scene>
      </Controller> */
}

import React from "react";
import { connect } from "react-redux";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Link } from "react-router-dom";

import style from "./Home.module.css";
import { HomeLine } from "../../components/HomeLine";

const HomeC = props => {
  const landingText = [false, false, false, true, true, true, true];
  console.log(props.deviceHeight);
  for (let i = 0; i < (props.deviceHeight - 65) / 50 - 7; i++) {
    landingText.push(false);
  }

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
              <Timeline totalProgress={progress/2} paused>
                <Tween from={{ x: "0%" }} to={{ x: "-20%", opacity: 0 }}>
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
                        <span className={value ? style.highlight : ""}>
                          {`${returnString}`}{" "}
                        </span>
                        {`${returnString} ${returnString} ${returnString} ${returnString} ${returnString} ${returnString} `}
                      </p>
                    );
                  })}
                </Tween>
                <Timeline
                  target={
                    <section className={style.introS}>
                        <h1>Hi there!</h1>
                      <p>
                        I'm <span className={style.name}>Ryan Theodore The</span>, a
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
                  <Tween delay={-10} duration={0.3} from={{ opacity: 0, top: 0}} to={{ opacity: 1 }} />
                  <Tween to={{ x: "10%" }} />
                </Timeline>
              </Timeline>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
  // return (
  //   <Controller>
  //     <Scene indicators={true} duration={1000} pin>
  //       <Timeline>
  //       <Tween from={{ x: "100px" }}>
  //         <div>This element gets tweened</div>
  //       </Tween>
  //       </Timeline>
  //     </Scene>
  //   </Controller>
  // );
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

import React from "react";
import { connect } from "react-redux";

import style from "./Projects.module.css";
import { ProjectList } from "../../components/Card/ProjectList";
import { ProjectGrid } from "../../components/Card/ProjectGrid";
import { SearchBar } from "../../components/SearchBar";
import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";
import { Filter } from "../../components/Filter";

export const ProjectsC = props => {
  return (
    <div className={style.projects}>
      <PageTemplateDiv>
        <SearchBar {...props} current="Projects" />
        <Filter />
        {props.displayModeIsGrid ? (
          <ProjectGrid {...props} content={props.display} />
        ) : (
          <ProjectList {...props} content={props.display} />
        )}
      </PageTemplateDiv>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    device: state.device,
    display: state.displayContent,
    displayModeIsGrid: state.displayModeIsGrid,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDevice: () => dispatch({ type: "UPDATE_DEVICE" }),
    updateDisplayContent: display =>
      dispatch({ type: "UPDATE_DISPLAY_CONTENT", display: display }),
    toggleDisplayMode: () => dispatch({ type: "TOGGLE_DISPLAY_MODE" }),
    setCurrentDisplayPage: (current) => dispatch({ type: "SET_CURRENT_DISPLAY_PAGE", current: current}),
  };
};
export const Projects = connect(mapStateToProps, mapDispatchToProps)(ProjectsC);

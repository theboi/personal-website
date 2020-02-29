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
          <ProjectGrid {...props} content={props.displayContent} />
        ) : (
          <ProjectList {...props} content={props.displayContent} />
        )}
      </PageTemplateDiv>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    device: state.device,
    displayContent: state.displayContent,
    displayModeIsGrid: state.displayModeIsGrid,
    currentTab: state.currentTab,
    searchBarInput: state.searchBarInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayContent: () =>
      dispatch({ type: "UPDATE_DISPLAY_CONTENT" }),
    toggleDisplayMode: () => dispatch({ type: "TOGGLE_DISPLAY_MODE" }),
    setCurrentTab: (current) =>
      dispatch({ type: "SET_CURRENT_TAB", current: current}),
      setSearchBarInput: input =>
      dispatch({ type: "SET_SEARCH_BAR_INPUT", input: input }),
  };
};
export const Projects = connect(mapStateToProps, mapDispatchToProps)(ProjectsC);

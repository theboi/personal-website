import React from "react";
import { connect } from "react-redux";

import style from "./Projects.module.css";
import { SearchBar } from "../../components/SearchBar";
import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";
import { Filter } from "../../components/Filter";
import { ProjectCard } from "../../components/Card/Project";

export const ProjectsC = props => {
  return (
    <div className={style.projects}>
      <PageTemplateDiv>
        <SearchBar {...props} current="Projects" />
        <Filter />
        <div>
          <ul className={props.displayModeIsGrid ? style.listWrapper : null}>
            {props.displayContent.map((value, index) => {
              return (
                <ProjectCard
                  {...props}
                  displayModeIsGrid={props.displayModeIsGrid}
                  content={value}
                  key={index}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
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
    searchBarInput: state.searchBarInput,
    dropdownTabIsOpen: state.dropdownTabIsOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayContent: () => dispatch({ type: "UPDATE_DISPLAY_CONTENT" }),
    toggleDisplayMode: () => dispatch({ type: "TOGGLE_DISPLAY_MODE" }),
    setCurrentTab: current =>
      dispatch({ type: "SET_CURRENT_TAB", current: current }),
    setSearchBarInput: input =>
      dispatch({ type: "SET_SEARCH_BAR_INPUT", input: input }),
    toggleDropdownTab: () => dispatch({ type: "TOGGLE_DROPDOWN_TAB" }),
  };
};
export const Projects = connect(mapStateToProps, mapDispatchToProps)(ProjectsC);

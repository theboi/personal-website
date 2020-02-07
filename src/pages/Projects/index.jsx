import React, { useState } from "react";

import { content } from "../../assets/content/content";
import style from "./Projects.module.css";
import { ProjectList } from "../../components/Card/ProjectList";
import { ProjectGrid } from "../../components/Card/ProjectGrid";
import { SearchBar } from "../../components/SearchBar";
import { PageTemplateDiv } from "../../components/Page/PageTemplateDiv";

export const Projects = () => {
  const cont = content.Projects;

  const [outputList, updateListValue] = useState(cont);

  return (
    <div className={style.projects}>
      <PageTemplateDiv>
        <SearchBar
          current="Projects"
          updateListValue={updateListValue}
          cont={cont}
        />
        {/* <ProjectList content={outputList} /> */}
        <ProjectGrid content={outputList} />
      </PageTemplateDiv>
    </div>
  );
};

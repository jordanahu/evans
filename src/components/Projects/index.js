import React from 'react'
import Project from "./Project";
import data from "../../assets/data/details.json";
import ProjectLinks from "./ProjectLinks";


function Projects() {
    const {projects} = data;

  return (
    <div>
      {projects.map(({ field, names, projectLinks:linksInfo }, index) => (
        <React.Fragment key={index}>
          <Project fieldTitle={field} fieldDetails={names} />
          <ProjectLinks projectLinks={linksInfo} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects
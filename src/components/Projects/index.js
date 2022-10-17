import React from 'react'
import Project from "./Project";
import data from "assets/data/details.json";
import ProjectLinks from "./ProjectLinks";
import "./projects.css";


function Projects() {
    const {projects,videos:[{videoUrl, title, summary}] } = data;

    const titleStyle = {
      textAlign: "center",
      color: "rgb(184, 233, 90)",
      fontSize: "2rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      textDecoration:"underline"
    };

  return (
    <div>
      <p style={{ ...titleStyle }}>{title}</p>

      <div class="Projects__video">
        <iframe
          style={{
            borderRadius: "10px",
            maxWidth: "100%",
          }}
          height="320rem"
          width="500rem"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div
          className="header__about"
        >
          {summary}
        </div>
      </div>

      {projects.map(({ field, names, projectLinks: linksInfo }, index) => (
        <React.Fragment key={index}>
          <Project fieldTitle={field} fieldDetails={names} />
          <ProjectLinks projectLinks={linksInfo} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects
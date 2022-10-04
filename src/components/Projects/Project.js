import React from 'react'
import "./project.css";





function Project({fieldTitle, fieldDetails}) {
  return (
    <div className="project">
      <p className="project__heading">{fieldTitle}</p>
      <ol className="project__details">
        {fieldDetails.map((info, index)=>(
            <li key={index}>{info}</li>
        ))}
      </ol>
    </div>
  );
}

export default Project
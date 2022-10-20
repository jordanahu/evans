import React from 'react'
import data from "assets/data/details.json";
import "./projects.css";
import image_1 from "assets/images/evans-device.jpg";
import image_3 from "assets/images/evans-work.jpg";
import image_2 from "assets/images/evans-device2.jpg";
import image_4 from "assets/images/evans-device3.jpg";
import board1 from "assets/images/board1.jpg";
import board2 from "assets/images/board2.jpg";
import board3 from "assets/images/board3.jpg";
import board4 from "assets/images/board4.jpg";
import board5 from "assets/images/board5.jpg";
import board6 from "assets/images/board6.jpg";

function Projects() {
    const {projects,videos:[{videoUrl, title, summary}] } = data;
    const images = [image_1, image_4, image_2, image_3, board1, board2,board3,board4,board5,board6];


    let lastProjectIndex = projects.length - 1;

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
      <p style={{ ...titleStyle }}>LIST OF PROJECTS</p>
      <div class="Projects__video">
        <div>
          <p style={{ ...titleStyle, fontSize: "1.5rem" }}>{title}</p>
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
          ></iframe>
          <div className="header__about">{summary}</div>
        </div>
        {projects.map(({ summary, title, containsMore }, index) => (
          <div key={index}>
            <p style={{ ...titleStyle, fontSize: "1.5rem" }}>{title}</p>
    
            {containsMore ? (
              <div class="row">
                <div
                  style={{ width:"500rem"}}
                  class="col-lg-4 mb-4 mb-lg-0"
                >
                  <img
                    style={{width: "100%" }}
                    src={images[index]}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />

                  <img
                    src={images[index + 1]}
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <img
                src={images[index + 1]}
                alt=""
                style={{
                  borderRadius: "10px",
                  maxWidth: "100%",
                }}
              />
            )}

            <p className="summary header__about">{summary}</p>
          </div>
        ))}
      </div>
     
<div class="row">
    {images.slice(lastProjectIndex+1,-1).map((url,index)=>(
      <div class="col-lg-4 mb-4 mb-lg-0" key={index}>
      <img
        src={url}
        class="w-100 shadow-1-strong rounded mb-4"
        alt=""
      />
  
    </div>
    ))}
 
</div>

    </div>
  );
}

export default Projects
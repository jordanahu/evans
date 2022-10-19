import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {BsLink45Deg} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "./projectLinks.css";
import image_1 from "assets/images/evans-device.jpg";
import image_3 from "assets/images/evans-work.jpg";
import image_2 from "assets/images/evans-device2.jpg";
import image_4 from "assets/images/evans-device3.jpg";

export default function ProjectLinks({projectLinks}) {
  // const [open, setOpen] = useState(false);
  const images = [image_1, image_4, image_2, image_3];

  return (
    <>
      <h3 className="color-body text-center mt-5 color--link">
        LIST OF PROJECTS
      </h3>
      <div className="d-flex flex-row flex-wrap mt-5">
        {projectLinks.map(({ summary, title }, index) => (
          <div key={index}>
            <Card
              style={{ width: "20rem" }}
              className="color-body my-2 mx-2 bg-dark"
            >
              <Card.Img
                variant="top"
                style={{ objectFit: "contain" }}
                width="200rem"
                height="200rem"
                src={images[index]}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{summary}</Card.Text>
                {/* <Card.Link
                      className="color--link"
                      href="https://github.com"
                    >
                      Github Repo
                    </Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      {/* <Button
        className="color--border mb-5"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <BsLink45Deg /> | List Of Projects
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         
        </div>
      </Collapse> */}
    </>
  );
}



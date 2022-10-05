import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {BsLink45Deg} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "./projectLinks.css";


export default function ProjectLinks({projectLinks}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="color--border"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        <BsLink45Deg /> | Links Of Projects
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="d-flex flex-row flex-wrap">
            {projectLinks.map(({ summary, title, imageUrl}, index) => (
              <div key={index}>
                <Card
                  style={{ width: "18rem" }}
                  className="color-body my-2 mx-2 bg-dark"
                >
                  <Card.Img variant="top" style={{objectFit:"contain"}} width="200rem" height="200rerm" src={imageUrl}  />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{summary}</Card.Text>
                    <Card.Link
                      className="color--link"
                      href="https://github.com"
                    >
                      Demo
                    </Card.Link>
                    <Card.Link
                      className="color--link"
                      href="https://github.com"
                    >
                      Github Repo
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Collapse>
    </>
  );
}



import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="color--link">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          style={{ borderRadius: "10px" }}
          width="100%"
          height="300rem"
          src={props.videoUrl}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App({ title, videoUrl }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          textDecoration: "underline",
        }}
        className="color--link"
        onClick={() => setModalShow(true)}
      >
        Video Demo
      </button>
      <br />

      <MyVerticallyCenteredModal
        title={title}
        show={modalShow}
        videoUrl={videoUrl}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


import "./header.css"
import { BsLinkedin, BsGithub, BsCloudDownload } from "react-icons/bs";
import data from "../../assets/data/details.json";
import resume from "../../assets/data/evansResume.pdf";

function Header() {
  const {name, title,about, socialLinks} = data;

  
  return (
    <header className="d-flex flex-column justify-content-start header">
      <h1>{name}</h1>
      <h2 className="color-title">{title}</h2>
      <div className="d-flex justify-content-start flex-wrap">
        <a
          href={socialLinks.linkedIn}
          target="_blank"
          rel="noreferrer"
          type="button"
          className="btn btn-lg me-2 text-white color--border mb-2"
        >
          <BsLinkedin /> <span>| LinkedIn</span>
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          role="button"
          className="btn btn-lg me-2 text-white color--border mb-2"
        >
          <BsGithub /> <span>| Github</span>
        </a>
        <a
          href={resume}
          target="_blank"
          download
          rel="noreferrer"
          role="button"
          className="btn btn-lg text-white color--border mb-2"
        >
          <BsCloudDownload /> <span>| Resume</span>
        </a>
      </div>
      <div className="header__divider"></div>
      <p className="header__about mt-5">{about}</p>
      <p className="color-body">
        You can checkout the details of my projects below
      </p>
    </header>
  );
}

export default Header;

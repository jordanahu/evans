import "./header.css"
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Header() {
  return (
    <div className="container header">
      <p className="header__name">Evans Honu</p>
      <p className="header__title">
        CS Grad Student at Arizona State University
      </p>
      <div class="d-grid gap-2 d-md-block">
        <button type="button" class="btn btn-primary btn-lg me-2">
          <BsLinkedin /> <span>| LinkedIn</span>
        </button>
        <button type="button" class="btn btn-secondary btn-lg">
          <BsGithub /> <span>| Github</span>
        </button>
      </div>
      <div className="header__divider"></div>
    </div>
  );
}

export default Header;

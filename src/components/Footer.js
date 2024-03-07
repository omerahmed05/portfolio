import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from '@material-ui/icons/Description';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/omerahmed05"><GitHubIcon /></a>
        <a href="mailto:omera@vt.edu"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/omah/"><LinkedInIcon /></a>
        <a href="https://drive.google.com/file/d/17Js4dtcrDdRnoMcPgHAXuBRUMNXf26OA/view?usp=sharing"><DescriptionIcon /></a>
      </div>
    </div>
  );
}

export default Footer;
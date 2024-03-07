import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  
  const handleGitHubClick = () => {
    window.open(project.githubUrl, "_blank");
  };

  const handlePdfClick = () => {
    if (project.name === "AutoPrint Debugging Tool") {
      window.open(project.pdfUrl, "_blank");
    }
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      {project.name === "Discord ATS Resume Scanner Bot" ? (
        <div className="video-container">
          <iframe
            width="315"
            height="315"
            src={project.youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <img src={project.image} alt={project.name} />
      )}
      
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
      <div className="icon-container">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>
          <GitHubIcon />
        </a>

        {project.name === "AutoPrint Debugging Tool" && (
          <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" onClick={handlePdfClick}>
            <PictureAsPdfIcon />
          </a>
        )}
      </div>
     
      <div className="description-container">
        <p>
          <b>Description:</b>
        </p>
        <div className="description">{project.description}</div>
      </div>
    </div>
  );
}

export default ProjectDisplay;

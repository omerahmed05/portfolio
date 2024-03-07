import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Personal and Collaboration Projects</h1> 
      <div className="projectList">
        {ProjectList.map((page, idx) => {
          return (
            <ProjectItem key={idx} id={idx} name={page.name} image={page.image} skills={page.skills} githubLink={page.githubLink}/> 
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

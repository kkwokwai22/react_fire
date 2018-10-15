import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        {props.projects &&
          props.projects.map(project => {
            return <ProjectSummary project={project} key={project.id} />;
          })}
      </div>
    </div>
  );
};

export default ProjectList;

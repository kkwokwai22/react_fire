import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      {project.content}
      <p>Posted by the Net Ninja</p>
      <p className="grey-text" />
    </div>
  );
};

export default ProjectSummary;

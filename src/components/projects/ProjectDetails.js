import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project Title - {id}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              eveniet optio excepturi nam tenetur, vero necessitatibus
              reprehenderit ut doloremque iure commodi expedita vel voluptas?
              Veniam libero labore sapiente magni provident!
            </p>
          </span>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by kevin</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

import React from "react";
import "./Project.css";

const ProjectItem = props => {
  const projectLink = props.projectLink;
  const codeLink = props.codeLink;
  return (
    <div className="item project-item">
      <div className="content">
        <h2 className="header project-header">{props.title}</h2>
        <div className="meta project-description">
          <span className="cinema">{props.description}</span>
        </div>
        <div className="description">
          <p></p>
        </div>
        <div className="extra extra-block">
          <a
            href={projectLink}
            target="_blank"
            className="ui right floated primary button project-btn"
          >
            See project
            <i className="right icon fas fa-tablet-alt"></i>
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="ui right floated primary button code-btn"
          >
            See code
            <i className="right icon  fas fa-code"></i>
          </a>
          <div className="project-tools">
            <div className="ui label">{props.tool1}</div>
            <div className="ui label">{props.tool2}</div>
            <div className="ui label">{props.tool3}</div>
            <div className="ui label">{props.tool4}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

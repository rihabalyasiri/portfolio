import React from "react";
import ProjectItem from "./ProjectItem";
import projectsData from "../../data/projectsData";

const ProjectList = () => {
  const showedProjects = projectsData.map(project => {
    return (
      <ProjectItem
        title={project.title}
        description={project.description}
        tool1={project.tools[0]}
        tool2={project.tools[1]}
        tool3={project.tools[2]}
        tool4={project.tools[3]}
        projectLink={project.projectLink}
        codeLink={project.codeLink}
      />
    );
  });

  return <div className="project-list">{showedProjects}</div>;
};

export default ProjectList;

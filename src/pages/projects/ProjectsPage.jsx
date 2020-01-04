import React from "react";
import ProjectList from "../../components/Projects/ProjectList";
import Footer from "../../components/Footer/Footer";
import NavBarProjects from "../../components/NavBar/NavBarProjects";

const ProjectsPage = () => {
  return (
    <div>
      <NavBarProjects/>
      <ProjectList />
      <Footer/>
    </div>
  );
};

export default ProjectsPage;

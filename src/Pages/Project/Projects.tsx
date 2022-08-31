import React from "react";
import ContentProjects from "../../Components/Content/ContentProjects";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import './style.css';

const Project = () => {
  return (
    <>
      <Navbar />
      <ContentProjects />
      <Footer />
    </>
  );
}

export default Project;
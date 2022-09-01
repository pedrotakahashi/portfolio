import React from "react";
import ContentProjects from "../../Components/Content/ContentProjects";
import Footer from "../../Components/Footer/Footer";
import MenuTopSide from "../../Components/Navbar/Navbar";
import './style.css';

const Project = () => {
  return (
    <>
      <MenuTopSide />
      <ContentProjects />
      <Footer />
    </>
  );
}

export default Project;
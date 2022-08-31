import React from 'react';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './style.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default Home;

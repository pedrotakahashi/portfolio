import React from 'react';
import Content from '../../Components/Content/Content';
import Footer from '../../Components/Footer/Footer';
import MenuTopSide from '../../Components/Navbar/Navbar';

import './style.css';

const Home = () => {
  return (
    <>
      <MenuTopSide />
      <Content />
      <Footer />
    </>
  );
}

export default Home;

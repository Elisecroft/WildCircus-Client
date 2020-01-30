import React from 'react'
import TopBar from '../Topbar/Topbar';
import About from '../About/About';
import Performances from '../Performances/Performances';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <TopBar />
      <About />
      <Performances />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;

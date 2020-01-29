import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import About from './Components/About/About';
import Performances from './Components/Performances/Performances';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <About />
      <Performances />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

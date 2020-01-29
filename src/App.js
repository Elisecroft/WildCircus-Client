import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import About from './Components/About/About';
import Performances from './Components/Performances/Performances';
import Footer from './Components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <About />
      <Performances />
      <Footer />
    </div>
  );
}

export default App;

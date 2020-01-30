import React, { useState } from 'react';
import './Topbar.css'

const Topbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  
  return(
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
    <a className="navbar-brand" href="#"><h1>Wild Circus</h1></a>
    <button className={classTwo} type="button" onClick={toggleNavbar} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={classOne} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Performances</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Close to you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Topbar;

import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>Made by Elise</p>
            <Link to="/login">Login here</Link>
          </div>
          <div className="col-sm-6">
            <p>Legals Mentions</p>
            <p>Copyright 2020</p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;

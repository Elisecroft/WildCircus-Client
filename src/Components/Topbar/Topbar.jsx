import React, { useState, useContext } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Ctx_User from '../../Ctx_User';
import './Topbar.css';

const Topbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [user, setUser] = useContext(Ctx_User);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    const confirm = window.confirm('Etes-vous sur de vouloir vous déconnecter ?');
    if (confirm === true) {
      setUser('');
      localStorage.removeItem('token');
    }
  };

  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  
  return(
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
    <Link to="/" className="navbar-brand"><h1>Wild Circus</h1></Link>
    <button className={classTwo} type="button" onClick={toggleNavbar} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={classOne} id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/#About" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/#Performances" className="nav-link">Performances</Link>
        </li>
        <li className="nav-item">
          <Link to="/#Contact" className="nav-link">Contact Us</Link>
        </li>
        { user.isAdmin === 1 ?
          <li className="nav-item">
            <Link to="/admin"className="nav-link">Admin</Link>
          </li>
        :
            null
        }
        { !user.email ?
          <>
            <li className="nav-item">
              <Link to="/login"className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/sign"className="nav-link">Sign in</Link>
            </li>
          </>
        :
          <>
            <li className="nav-item">
              <Link to="/panel"className="nav-link">Panel</Link>
            </li>
            <li className="nav-item">
              <Link to="/"className="nav-link" onClick={logout}>Disconnect</Link>
            </li>
          </>
        }
      </ul>
    </div>
  </nav>
  );
};

export default Topbar;

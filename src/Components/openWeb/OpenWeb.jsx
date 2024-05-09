import React from 'react';
import './openWeb.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/nu_banner2.png';

const OpenWeb = () => {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src={logo} alt='nu-logo' />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Team</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Hello World! </h1>
      </main>
    </div>
  );
};

export default OpenWeb;

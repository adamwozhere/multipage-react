import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = ({ handleDarkMode }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

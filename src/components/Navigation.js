import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

const Navigation = () => (
  <Navbar className="custom-navbar">
    <nav>
      <ul className="custom-nav-links">
        <li>
          <Link to="/">
            <FaLessThan className="custom-icon lessthan" />
            {' '}
          </Link>
          Most Viewed
        </li>
        <li className="custom-header-list">
          <h1>STOCK SCREENER</h1>
        </li>
        <li className="custom-header-list custom-icons-class">
          <FaMicrophone className="custom-icon" />
          <FiSettings className="custom-icon" />
        </li>
      </ul>
    </nav>
  </Navbar>
);

export default Navigation;

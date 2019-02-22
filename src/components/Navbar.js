import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="nav">
    <ul>
      <Link to="/" className="nav--home">
        <p className="nav--home">Jinwoo Oh</p>
      </Link>
      <Link to="/tags" activeStyle={{ color: 'gray' }} className="nav--tags">
        <p>Topics</p>
      </Link>
      <Link to="/about" activeStyle={{ color: 'gray' }} className="nav--about">
        <p>About</p>
      </Link>
    </ul>
  </nav>
);

export default Navbar;

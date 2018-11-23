import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="nav">
    <ul>
      <Link to="/" className="nav--item">
        <p>Home</p>
      </Link>
      <Link to="/tags" className="nav--item">
        <p>Tags</p>
      </Link>
      <Link to="/about" className="nav--item nav--about">
        <p>About</p>
      </Link>
    </ul>
  </nav>
);

export default Navbar;

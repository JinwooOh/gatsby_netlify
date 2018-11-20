import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav className="nav">
    <Link to="/" className="nav--item">
      <p>Home</p>
    </Link>

    <Link to="/about" className="nav--item">
      <p>About</p>
    </Link>
    <Link to="/tags" className="nav--item">
      <p>Tags</p>
    </Link>
  </nav>
);

export default Navbar;

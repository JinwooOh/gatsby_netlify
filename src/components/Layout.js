import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import '../css/style.css';

const TemplateWrapper = ({ children }) => (
  <div className="main-wrapper">
    <Helmet title="Jinwoo's Blog" />
    <Navbar />
    <div className="post-wrapper">{children}</div>
  </div>
);

export default TemplateWrapper;

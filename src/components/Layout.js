import React from 'react';
import Helmet from 'react-helmet';
import Navbar from './Navbar';
import icon16 from '../../static/logo/favicon.ico';
import '../css/style.css';

const TemplateWrapper = ({ children }) => (
  <div className="main-wrapper">
    <Helmet
      title="Jinwoo's Blog"
      meta={[
        { name: 'description', content: 'Web Developer Jinwoo' },
        {
          name: 'keywords',
          content: 'webdev, photography, boots, blog, algorithm, data structure, design',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${icon16}` }]}
    />
    <Navbar />
    <div className="main-container">{children}</div>
  </div>
);

export default TemplateWrapper;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'gatsby';

const Header = ({ header }) => (
  <div className="header">
    {console.log(header)}
    <div
      style={{
        display: 'block',
        margin: '0 auto',
        maxWidth: '960px',
        padding: '0.55rem 2.0875rem',
      }}
    >
      <div className="display-flex">
        {header.menu.map((nav, idx) => (
          <Link
            className="float-left margin-left"
            to={nav.link.href}
            key={idx}
          >
            {nav.link.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Header;

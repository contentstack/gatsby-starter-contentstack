/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-lonely-if */
/* eslint-disable prefer-template */
import React from 'react';
import { Link, navigate } from 'gatsby';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const changeLanguage = (option, location, lang) => {
  const path = location.pathname;
  if (option.value === lang) return;
  if (option.value === 'en-us') {
    const localePattern = '/xx-xx';
    const sanitizedPath = path.length < localePattern.length ? '' : path.substring(localePattern.length, path.length);
    navigate(`${sanitizedPath}`);
  } else {
    navigate(`/${option.value}${path}`);
  }
};

const Header = ({ header, lang, location }) => (
  <div className="header">
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: '960px',
        padding: '0.55rem 2.0875rem',
        justifyContent: 'space-between',
      }}
    >
      <div className="display-flex">
        {header.menu.map((nav, idx) => (
          <Link
            className="float-left margin-left"
            to={`${lang !== 'en-us' ? '/' + lang : ''}${nav.link.href}`}
            key={idx}
          >
            {nav.link.title}
          </Link>
        ))}
      </div>
      <div className="display-flex">
        <Dropdown
          options={[
            { label: 'English', value: 'en-us' },
            { label: 'Spanish', value: 'es-es' },
          ]}
          className="margin-right"
          onChange={(option) => { changeLanguage(option, location, lang); }}
          value={lang}
        />
      </div>
    </div>
  </div>
);

export default Header;

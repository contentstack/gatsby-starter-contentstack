/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'gatsby';
import { LocaleContext } from './provider';

const Header = ({ header }) => (
  <LocaleContext.Consumer>
    {
      (context) => {
        const localizedHeader = header.find((entry) => entry.locale === context.currentLocale);
        return (
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
                {localizedHeader.menu.map((nav, idx) => (
                  <Link
                    className="float-left margin-left"
                    to={nav.link.href}
                    key={idx}
                  >
                    {nav.link.title}
                  </Link>
                ))}
              </div>
              <div className="display-flex">
                <select
                  onChange={(evt) => context.changeLocale(evt.currentTarget.value)}
                  value={context.currentLocale}
                  className="margin-right"
                >
                  {
                    [
                      { localeLabel: 'English', locale: 'en-us' },
                      { localeLabel: 'Spanish', locale: 'es-es' },
                    ]
                      .map((language) => (
                        <option
                          key={language.locale}
                          value={language.locale}
                        >
                          {language.localeLabel}
                        </option>
                      ))
                  }
                </select>
              </div>
            </div>
          </div>
        );
      }
    }
  </LocaleContext.Consumer>
);

export default Header;

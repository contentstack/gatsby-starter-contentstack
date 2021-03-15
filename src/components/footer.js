/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { LocaleContext } from './provider';

const Footer = ({ footer }) => (
  <LocaleContext.Consumer>
    {
      (context) => {
        const localizedFooter = footer.find((entry) => entry.locale === context.currentLocale);
        return (
          <div className="footer ">
            <div className="footer-above">
              <div className="container">
                <div className="row">
                  <div className="footer-col">
                    <h3>{localizedFooter.group.title}</h3>
                    <p>{localizedFooter.group.address}</p>
                  </div>
                  <div className="footer-col col-md-4">
                    <h3>{localizedFooter.social.title}</h3>
                    <ul className="sociallinks-ul">
                      {localizedFooter.social.social_links.map((media, idx) => (
                        <li key={idx} className="sociallinks-li">
                          <a
                            href={media.link.href}
                            className="btn-social btn-outline"
                          >
                            <i className={media.fontawesome_class} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-below">
              <div className="container">
                <div className="row">
                  <div className="copyrights">{localizedFooter.copyright}</div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  </LocaleContext.Consumer>
);
export default Footer;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

const Footer = ({ footer }) => (

  <div className="footer ">
    <div className="footer-above">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3>{footer.group.title}</h3>
            <p>{footer.group.address}</p>
          </div>
          <div className="footer-col col-md-4">
            <h3>{footer.social.title}</h3>
            <ul className="sociallinks-ul">
              {footer.social.social_links.map((media, idx) => (
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
          <div className="copyrights">{footer.copyright}</div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;

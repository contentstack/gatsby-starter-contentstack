import React from 'react'
import { Link } from 'gatsby'

const Header = ({ header }) => (
  <div className="header">
    <div
      style={{
        display:'block',
        margin: '0 auto',
        maxWidth: '960px',
        padding: '0.55rem 2.0875rem',
      }}
    >
      <div className="display-flex">
        {header.menu.map(function (nav, idx) {
          return (
            <h1 style={{ margin: 0 }} key={idx}>
              <Link className="float-left margin-left" to={nav.link.href}>
                {nav.link.title}
              </Link>
            </h1>
          )
        })}
      </div>
    </div>
  </div>
)

export default Header

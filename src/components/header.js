import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `dodgerblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center'
      }}
      >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '30px',
          }}
          >
          My page
        </Link>
      </h1>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/about-us"
          style={{
            color: `white`,
            textDecoration: `none`,
            marginRight: '30px'
          }}
          >
          Om oss
        </Link>
      </h3>
      <h3 style={{ margin: 0 }}>
        <Link
          to="/jobs"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          >
          Lediga jobb
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

const Header = () => (
  <header style={{
      maxWidth: '100%',
      padding: rhythm(1),
      backgroundColor: 'red',
    }}>
    <Link to={prefixLink('/')}>{config.blogTitle}</Link>
  </header>
)

export default Header

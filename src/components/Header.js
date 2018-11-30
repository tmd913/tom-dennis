import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-laptop" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Tom Dennis</h1>
        <p>Full-Stack Web Developer</p>
        <ul className="icons">
          <li>
            <a
              href="https://github.com/tmd913"
              className="icon fa-github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tom-dennis-6b41357a/"
              className="icon fa-linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:thomas.dennis@richmond.edu"
              className="icon fa-at"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

import React from 'react';
import PropTypes from 'prop-types';
import resume from '../Resume - Bakary TOUNKARA.pdf';

const Navbar = ({onClick}) => (
<nav className="navbar is-primary is-fixed-top">
  { /* Logo and hamburger */ }
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div className="navbar-menu">
    
    <div className="navbar-end">
      <a className="navbar-item" onClick={() => onClick('about')}>
        About
      </a>
      <a className="navbar-item" onClick={() => onClick('work')}>
        Work experience
      </a>
      <a className="navbar-item" onClick={() => onClick('contact')}>
        Contact me
      </a>
  
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button is-primary" href={resume}>
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>My resume</span>
            </a>
          </p>
        </div>
      </div>

    </div>
  </div>
</nav>
);

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Navbar;
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import resume from '../../pdf/Resume - Bakary TOUNKARA.pdf';
import cv from '../../pdf/CV - Bakary TOUNKARA.pdf';
import './Navbar.scss';
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

const MIN_SCROLL_POS = 10;
const SCROLL_DELTA = 5;

const menuItems = [
  {
    sectionLink: 'about',
    delay: 150
  }, {
    sectionLink: 'work',
    delay: 300
  }, {
    sectionLink: 'contact',
    delay: 450
  }
];

const french = {
  name: 'Français / French',
  fr: 'fr'
};

const english = {
  name: 'Anglais / English',
  en:'en'
};

class Navbar extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      lng: i18n.language
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => el.addEventListener('click', this.handleBurgerClick));
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Remove the click event on each of them
      $navbarBurgers.forEach(el => el.removeEventListener('click', this.handleBurgerClick));
    }
  }

  handleScroll = () => {
    const { scrollPos, show } = this.state;
    const newScrollPos = Math.abs(document.body.getBoundingClientRect().top);
    
    // If the scroll is smaller than the SCROLL_DELTA, we do nothing
    if(Math.abs(newScrollPos - scrollPos) <= SCROLL_DELTA && newScrollPos > 0){
      return;
    }

    const newShow = newScrollPos < scrollPos || newScrollPos <= MIN_SCROLL_POS;
    if(show && !newShow){
      this.props.closeMenu();
    }

    this.setState({
      scrollPos: newScrollPos,
      show: newShow
    });
  }

  handleBurgerClick = () => {
    const navbar = document.getElementById('nav');
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('navMenu');
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    [navbar, burger, menu].forEach(elem => elem.classList.toggle('is-active'));

    const isActive = burger.classList.contains('is-active');
    if(isActive){
      document.documentElement.classList.add('locked-scroll');
      document.getElementById('index').classList.add('blur');
    } else {
      document.documentElement.classList.remove('locked-scroll');
      document.getElementById('index').classList.remove('blur');
    }
  }

  handleChangeLng = (e) => {
    const curLng = i18n.language;
    const lng = curLng === french.fr ? english.en : french.fr;
    this.setState({ lng: lng }, () => {
      i18n.changeLanguage(lng);
    });
  }

  render(){
    const { onClick, t } = this.props;
    return <nav id="nav" className={`navbar has-background-dark has-text-white is-light is-fixed-top ${this.state.show ? 'scrolled-in' : 'scrolled-out'}`}>

      { /* Logo and hamburger */ }
      <div className="navbar-brand">
        <a id="navBurger" role="button" className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu">

        <div className="navbar-end">
          
          <div className="navbar-item"
            data-aos="fade-down"
            data-aos-delay="0"
          >
            <p className="control has-text-centered-touch">
              <a className="button is-light is-outlined is-small is-rounded"
                title={ this.state.lng === french.fr ? english.name : french.name }
                onClick={this.handleChangeLng}
              >
                { this.state.lng === french.fr ? english.en : french.fr }
              </a>
            </p>
          </div>
          
          {
            menuItems.map(item => 
              <a className="navbar-item has-text-centered-touch" 
                key={item.sectionLink}
                onClick={() => onClick(item.sectionLink)}
                data-aos="fade-down"
                data-aos-delay={item.delay}
              >
                {t(`navbar.${item.sectionLink}`)}
              </a>  
            )
          }
                            
          <div className="navbar-item"
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <p className="control has-text-centered-touch">
              <a className="button is-rounded is-light is-outlined" href={ this.state.lng === french.fr ? cv : resume } target="_blank">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>{t('navbar.resume')}</span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </nav>
  }
}

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default withTranslation()(Navbar);
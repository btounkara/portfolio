import React, { Component } from 'react';
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Social from './components/Social/Social';
import AOS from 'aos';
import './i18n';
import 'aos/src/sass/aos.scss';
import './main.scss';

// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

class Index extends Component {

  constructor(props){
    super(props);
    AOS.init({
      duration: 2000,
      once: true,
    });
  };

  scrollTo = (id) => {
    const offsetTop = document.getElementById(id).offsetTop;
    window.scroll({
        top: offsetTop, left: 0, behavior: 'smooth' 
    });
    this.closeMenu();
  };

  closeMenu = () => {
    const navbar = document.getElementById('nav');
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('navMenu');
    [navbar, burger, menu].forEach(elem => elem.classList.remove('is-active'));
    document.documentElement.classList.remove('locked-scroll');
    document.getElementById('index').classList.remove('blur');
  }

  updateProgressBar = () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const scrolled = windowScroll / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';
  };

  componentDidMount() {
    window.addEventListener('scroll', this.updateProgressBar);
  }

  render() {
    return <div>
      <div className="progress-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>
      <Navbar onClick={this.scrollTo} closeMenu={this.closeMenu}/>
      <Social isFixed={true} animation="slide-up"/>
      <Header onClick={this.scrollTo}/>
      <About />
      <Work />
      <Footer />
    </div>
  };
};

createRoot(document.getElementById('index')).render(<Index />);

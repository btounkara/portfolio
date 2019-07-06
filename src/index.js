import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";
import AOS from 'aos';
import './i18n';
import './main.scss';
import 'aos/src/sass/aos.scss';

// Font Awesome 5 (Free)
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'
import '@fortawesome/fontawesome-free/scss/solid.scss' // https://fontawesome.com/icons?d=gallery&s=solid&m=free
import '@fortawesome/fontawesome-free/scss/regular.scss' // https://fontawesome.com/icons?d=gallery&s=regular&m=free
import '@fortawesome/fontawesome-free/scss/brands.scss' // https://fontawesome.com/icons?d=gallery&s=brands&m=free

class Index extends Component {

  constructor(props){
    super(props);
    AOS.init({
      duration: 2000,
      once: true
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

  render() {
    return <div>
        <Navbar onClick={this.scrollTo} closeMenu={this.closeMenu}/>
        <Social isFixed={true} animation="slide-up"/>
        <Header onClick={this.scrollTo}/>
        <About />
        <Work />
        <Footer />
      </div>
  };
};

ReactDOM.render(<Index />, document.getElementById("index"));

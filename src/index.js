import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Social from "./components/Social";
import AOS from 'aos';
import './main.scss';
import '../node_modules/aos/src/sass/aos.scss';

// const Index = () => {
class Index extends Component {

  constructor(props){
    super(props);
    AOS.init({
      duration: 2000,
      once: true
    });
  };

  scrollTo(id){
    const offsetTop = document.getElementById(id).offsetTop;
    window.scroll({
        top: offsetTop, left: 0, behavior: 'smooth' 
    });
  };

  render() {
    return <div>
        <Navbar onClick={this.scrollTo}/>
        <Social />
        <Header onClick={this.scrollTo}/>
        <About />
        <Work />
        <Footer />
      </div>
  };
};

ReactDOM.render(<Index />, document.getElementById("index"));

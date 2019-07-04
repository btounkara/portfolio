import React, {Component} from 'react';
import PropTypes from 'prop-types';
import resume from '../pdf/Resume - Bakary TOUNKARA.pdf';
import './Navbar.scss';

const MIN_SCROLL_POS = 10;
const SCROLL_DELTA = 5;

class Navbar extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      show: true,
      scrollPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollPos } = this.state;
    const newScrollPos = Math.abs(document.body.getBoundingClientRect().top);
    
    // If the scroll is smaller than the SCROLL_DELTA, we do nothing
    if(Math.abs(newScrollPos - scrollPos) <= SCROLL_DELTA && newScrollPos > 0){
      return;
    }

    this.setState({
      scrollPos: newScrollPos,
      show: newScrollPos < scrollPos || newScrollPos <= MIN_SCROLL_POS
    });
  }

  render(){
    const { onClick } = this.props;
    return <nav className={`navbar has-background-dark has-text-white is-light is-fixed-top ${this.state.show ? 'scrolled-in' : 'scrolled-out'}`}>

      { /* Logo and hamburger */ }
      <div className="navbar-brand">
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        
        <div className="navbar-end">
          <a className="navbar-item" 
            onClick={() => onClick('about')}
            data-aos="fade-down"
          >
            About
          </a>
          <a className="navbar-item" 
            onClick={() => onClick('work')}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Work experience
          </a>
          <a className="navbar-item" 
            onClick={() => onClick('contact')}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Contact me
          </a>
      
          <div className="navbar-item"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-rounded is-light is-outlined" href={resume} target="_blank">
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
  }
}

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Navbar;
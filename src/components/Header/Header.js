import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social/Social';
import './Header.scss';

{/* TO DO : Add background with parallax effect */}

const Header = ({onClick}) => (
    <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
                <p className="subtitle is-5" 
                    data-aos="fade-in"
                >
                    Hi ! My name is {}
                </p>
                <p className="title name has-text-white" 
                    data-aos="fade-in"
                    data-aos-delay="200"
                >
                    Bakary Tounkara
                </p>
                <p className="subtitle role" 
                    data-aos="fade-in"
                    data-aos-delay="300"
                >
                    A Fullstack Web Developer
                </p>
                <p className="subtitle is-5"
                    data-aos="fade-in"
                    data-aos-delay="400"
                >
                    I'm based in Paris and specialized in web development.
                </p>
                <Social animation="fade-in" delay="600"/>
            </div>
        </div>
        <div className="hero-foot">
            <p className="has-text-centered"
                data-aos="fade-in"
                data-aos-delay="800"
                data-aos-offset="0"
            >
                <span className="is-size-4">Get to know me</span>
                <br/>
                <i className="fas fa-chevron-down fa-2x" onClick={() => onClick('about')}/>
            </p>
        </div>
    </section>
);

Header.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Header;
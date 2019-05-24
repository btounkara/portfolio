import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

{/* TO DO : Add background with parallax effect */}

const Header = ({onClick}) => (
    <section className="section hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <p className="subtitle is-5" 
                    data-aos="fade-in"
                >
                    Hi ! My name is
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
            </div>
            <p className="learn-more has-text-centered"
                data-aos="fade-in"
                data-aos-delay="500"
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
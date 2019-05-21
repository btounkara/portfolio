import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

{/* TO DO : Add background with parallax effect */}

const Header = ({onClick}) => (
    <section className="section hero is-fullheight" data-aos="fade-in">
        <div className="hero-body">
            <div className="container">
                <p className="subtitle is-5">Hi ! My name is</p>
                <p className="title name has-text-white">Bakary Tounkara</p>
                <p className="subtitle role">A Fullstack Web Developer</p>
                <p className="subtitle is-5">
                    I'm based in Paris and specialized in web development.
                </p>
            </div>
            <p className="learn-more has-text-centered">
                <span className="is-size-4">Get to know me</span>
                <br/>
                <i className="fas fa-chevron-down fa-2x" onClick={() => onClick('about')}></i>
            </p>
        </div>
    </section>
);

Header.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Header;
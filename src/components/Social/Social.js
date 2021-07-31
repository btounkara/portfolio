import React from 'react'
import PropTypes from 'prop-types';
import './Social.scss';

const logos = [
    {
        logo: 'linkedin-in',
        url: 'https://www.linkedin.com/in/bakary-tounkara-3b6b5b85'
    }, {
        logo: 'github',
        url: 'https://github.com/btounkara'
    }, {
        logo: 'instagram',
        url: 'https://www.instagram.com/bwade91'
    }
];

const Social = ({ isFixed, animation, delay }) => (
    <div className={`social ${isFixed ? 'is-fixed' : ''}`} data-aos={animation} data-aos-delay={delay}>
        <ul>
            {
                logos.map(social => 
                    <li key={social.logo}>
                        <a href={social.url} target="_blank">
                            <i className={`fab fa-${social.logo} fa-2x`}></i>
                        </a>
                    </li>
                )
            }
        </ul>
    </div>
);


Social.defaultProps = {
    isFixed: false,
    delay: '0'
};

Social.propTypes = {
    isFixed: PropTypes.bool,
    animation: PropTypes.string.isRequired,
    delay: PropTypes.string
};

export default Social;
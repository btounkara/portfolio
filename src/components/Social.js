import React from 'react'
require('./Social.scss');

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

const Social = () => (
    <div className="social" data-aos="slide-up">
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

export default Social;
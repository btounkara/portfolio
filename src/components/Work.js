import React from 'react'
import Experience from './Experience';

const experiences = [
    {
        id: 1,
        dates : 'October 2016 - October 2018',
        company : 'Klee Group',
        linkToCompany : 'http://www.kleegroup.com',
        role : 'Software engineer',
        technologies : []
    }, {
        id: 2,
        dates : 'September 2013 - September 2016',
        company : 'Crédit Agricole Consumer Finance',
        linkToCompany : 'https://www.ca-consumerfinance.com/',
        role : 'Software engineer',
        technologies : []
    }, {
        id: 3,
        dates : 'April 2013 - June 2013',
        company : 'AssurPeople',
        linkToCompany : 'https://www.assurpeople.com/',
        role : 'Web developer',
        technologies : []
    }
];

const Work = () => (
    <section id="work" className="section hero" data-aos="fade-in">
        <div className="hero-body">
            <div className="container">
                <h1 className="title has-text-white is-2 is-with-bar">Work experience</h1>
                <div className="timeline is-centered">
                    
                    <header className="timeline-header">
                        <span className="tag is-medium is-light">2019</span>
                    </header>

                    {
                        experiences.map(exp => <Experience key={exp.id} value={exp}/>)
                    }

                    <div className="timeline-header">
                        <span className="tag is-medium is-light">2013</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default Work;
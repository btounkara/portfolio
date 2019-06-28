import React from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'

const Experience = ({value, delay, openModal}) => {

    return <div className="timeline-item is-light"
        data-aos="fade-in"
        data-aos-delay={delay}
    >
        <div className="timeline-marker is-white"></div>
        <div className="timeline-content">
            <p className="heading is-size-5">
                <span className="has-text-white">{value.dates}</span>
            </p>
            <p  className="is-size-6">
                {value.role} at <a href={value.company.link} className="has-text-info">{value.company.name}</a>
            </p>
            <a className="button learn-more is-outlined is-light is-rounded inverted"
                onClick={() => openModal(value)}
            >Learn more</a>
        </div>
    </div>
};

Experience.propTypes = {
    value: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dates : PropTypes.string.isRequired,        
        role : PropTypes.string.isRequired,
        company: PropTypes.shape({
            name : PropTypes.string.isRequired,
            domain: PropTypes.string.isRequired,
            resume: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
            link : PropTypes.string.isRequired,
        }).isRequired,
        tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    delay: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired
}

export default Experience;
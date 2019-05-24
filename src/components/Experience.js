import React from 'react'
import PropTypes from 'prop-types'

const Experience = ({value, delay}) => {

    return <div className="timeline-item is-light"
        data-aos="fade-in"
        data-aos-delay={delay}
    >
        <div className="timeline-marker is-white"></div>
        <div className="timeline-content">
            <p className="heading">
                <span className="has-text-white">{value.dates}</span>
            </p>
            <p>
                {value.role} at <a href={value.linkToCompany} className="has-text-info">{value.company}</a>
            </p>
        </div>
    </div>
};

Experience.propTypes = {
    value: PropTypes.shape({
        id: PropTypes.number.isRequired,
        dates : PropTypes.string.isRequired,
        company : PropTypes.string.isRequired,
        linkToCompany : PropTypes.string.isRequired,
        role : PropTypes.string.isRequired,
        technologies : PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired,
    delay: PropTypes.number.isRequired
}

export default Experience;
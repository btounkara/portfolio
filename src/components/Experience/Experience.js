import React from 'react'
import PropTypes from 'prop-types'
import './Experience.scss'
import { useTranslation } from 'react-i18next';

export default function Experience({value, delay, openModal}) {
    const { t, i18n } = useTranslation();    

    return <div className="timeline-item is-light"
        data-aos="fade-in"
        data-aos-delay={delay}
    >
        <div className={`timeline-marker ${!value.isWork ? 'is-info is-icon' : ''}`}>
            { 
                !value.isWork && <i className="fas fa-graduation-cap"></i>
            }
        </div>
        <div className="timeline-content">
            <p className="heading is-size-5">
                <span className="has-text-white">{value.dates}</span>
            </p>
            <p  className="is-size-6">
                {value.role} {t('experience.at')} <a href={value.establishment.link} className="has-text-info">{value.establishment.name}</a>
            </p>

            {
                value.isWork && 
                <a className="button learn-more is-outlined is-light is-rounded inverted"
                    onClick={() => openModal(value)}
                >{t('experience.learn-more')}</a>
            }
        </div>
    </div>
};

Experience.propTypes = {
    value: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isWork: PropTypes.bool.isRequired,
        dates : PropTypes.string.isRequired,        
        role : function(props, propName, componentName) { 
            if(props['isWork'] && (props[propName] === 'undefined' || typeof(props[propName] !== 'string') === true)){
                return new Error(`Please provide a string for the role`);
            }
        },
        establishment: PropTypes.shape({
            name : PropTypes.string.isRequired,
            link : PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    delay: PropTypes.number.isRequired,
    openModal: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { useTranslation } from 'react-i18next';

export default function Modal({ closeModal, isShown, data }){
    const { t, i18n } = useTranslation();
    const hasTasks = data.tasks.length > 0;
    const hasTechnologies = data.technologies.length > 0;
    return  <div className={`modal ${isShown ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content">
            <div className="box">
                <div className="content is-medium">
                    
                    <div className="block">
                        <h1 className="title is-4 has-text-dark">
                            {data.role} 
                            {
                                data.role 
                                ? <a href={data.establishment.link} className="has-text-info">@{data.establishment.name}</a>
                                : data.establishment.name
                            }
                        </h1>
                        <p className="subtitle is-6 has-text-grey-dark">{data.dates}</p>
                    </div>
                    
                    
                    <div className="block">
                        {
                            data.establishment.domain && <h2 className="title is-5 has-text-primary">{data.establishment.domain}</h2>
                        }
                        {
                            data.establishment.resume && <p className="subtitle is-size-6 has-text-grey-dark">{data.establishment.resume}</p>
                        }
                    </div>
                    
                    { 
                        hasTasks && 
                        <div className="block">
                            <h2 className="title is-5 has-text-primary">{t('modal.tasks')}</h2>
                            <ul>
                                {
                                    data.tasks.map(task => <li key={task} className="is-size-6 has-text-grey-dark">{task}</li>)
                                }
                            </ul>
                        </div>
                    }
                    
                    { 
                        hasTechnologies > 0 && 
                        <div className="block">
                            <h2 className="title is-5 has-text-primary">{t('modal.technologies')}</h2>
                            <div className="tags">
                                {
                                    data.technologies.map(techno => <span key={techno} className="tag is-light is-medium is-rounded">{techno}</span>)
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        
        <button 
            className="modal-close is-large" 
            aria-label="close"
            onClick={closeModal}
        />
        
    </div>
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isShown: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        isWork: PropTypes.bool.isRequired,
        dates : PropTypes.string.isRequired,        
        role : PropTypes.string.isRequired,
        establishment: PropTypes.shape({
            name : PropTypes.string.isRequired,
            domain: PropTypes.string,
            resume: PropTypes.string,
            link : PropTypes.string.isRequired,
        }).isRequired,
        tasks: PropTypes.arrayOf(PropTypes.string),
        technologies: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};
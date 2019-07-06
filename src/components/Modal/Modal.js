import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ closeModal, isShown, data }) => {
    return(
      <div className={`modal ${isShown ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-content">
            <div className="box">
                <div className="content is-medium">
                    
                    <div className="block">
                        <h1 className="title is-4 has-text-dark">
                            {data.role} <a href={data.company.link} className="has-text-info">@{data.company.name}</a>
                        </h1>
                        <p className="subtitle is-6 has-text-grey-dark">{data.dates}</p>
                    </div>
                    
                    <div className="block">
                        <h2 className="title is-5 has-text-primary">{data.company.domain}</h2>
                        <p className="subtitle is-size-6 has-text-grey-dark">{data.company.resume}</p>
                    </div>
                    
                    <div className="block">
                        <h2 className="title is-5 has-text-primary">Tasks</h2>
                        <ul>
                            {
                                data.tasks.map(task => <li key={task} className="is-size-6 has-text-grey-dark">{task}</li>)
                            }
                        </ul>
                    </div>
                    
                    <div className="block">
                        <h2 className="title is-5 has-text-primary">Technologies</h2>
                        <div className="tags">
                            {
                                data.technologies.map(techno => <span key={techno} className="tag is-light is-medium is-rounded">{techno}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button 
            className="modal-close is-large" 
            aria-label="close"
            onClick={closeModal}
        />
      </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isShown: PropTypes.bool.isRequired,
    data: PropTypes.shape({
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
    }).isRequired
}

export default Modal;
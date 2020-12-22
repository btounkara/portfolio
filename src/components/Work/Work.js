import React, { Component } from 'react'
import Experience from '../Experience/Experience';
import Modal from '../Modal/Modal';
import { withTranslation } from 'react-i18next';

const TABLET = 769;
const DURATION_ANIMATION = 150;
const INITIAL_MODAL = {
    id: '',
    isWork: false,
    role: '',
    dates: '',
    establishment: {
        name: '',
        link: '',
        domain: '',
        resume: ''
    },
    tasks: [],
    technologies: []
}

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timelineCentered: window.innerWidth >= TABLET,
            isModalShown: false,
            modalData: INITIAL_MODAL
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize = () => {
        this.setState({
            timelineCentered: window.innerWidth >= TABLET
        });
    }

    closeModal = () => {
        this.setState({
            isModalShown: !this.state.isModalShown
        })
    }

    openModal = (value) => {
        this.setState({
            isModalShown: true,
            modalData: value
        })
    }

    render() {
        const { timelineCentered, isModalShown, modalData } = this.state;
        const { t } = this.props;
        const experiences = t('work.experiences', { returnObjects: true });
        const currentYear = new Date().getFullYear();
        return <section id="work" className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white is-with-bar"
                        id="work-title"
                        data-aos="fade-in"
                    >
                        {t('work.title')}
                    </h1>

                    <div id="timeline" className={`timeline ${timelineCentered && 'is-centered'}`}>
                        <header className="timeline-header"
                            data-aos="fade-in"
                            data-aos-delay="100"
                        >
                            <span className="tag is-medium is-light is-rounded">{currentYear}</span>
                        </header>

                        {
                            experiences.map((exp, index) =>
                                <Experience
                                    key={index}
                                    value={exp}
                                    delay={(index + 1) * DURATION_ANIMATION}
                                    openModal={this.openModal}
                                />
                            )
                        }

                        <div className="timeline-header"
                            data-aos="fade-in"
                            data-aos-delay={(experiences.length * DURATION_ANIMATION)}
                        >
                            <span className="tag is-medium is-light is-rounded">2013</span>
                        </div>

                    </div>

                    <Modal
                        closeModal={this.closeModal}
                        isShown={isModalShown}
                        data={modalData}
                    />

                </div>
            </div>
        </section>
    }
}

export default withTranslation()(Work);
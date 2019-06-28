import React , {Component} from 'react'
import Experience from './Experience';
import Modal from './Modal';

const experiences = [
    {
        id: 1,
        dates : 'Oct. 2016 - 2018',
        role : 'Fullstack Software Engineer',
        company: {
            name : 'Klee Group',
            link : 'http://www.kleegroup.com',
            domain: 'IT Consulting',
            resume: 'Software publishing & implementing IT systems.',
            logo: 'http://www.kleegroup.com/upload/docs/image/png/2016-07/logo.png'
        },
        tasks: [
            'Analysis & conception (UML), writing of specifications, development, continuous integration (Maven, Sonar, Jenkins, SVN/Git), unit test(JUnit), code and database refactoring, deployment on multiple environments.',
            'Developed several web applications using both V-Model and SCRUM methodologies.',
            'Built a web application from scratch with geographical features using Geoserver, OpenLayers(2 & 3), PostgreSQL and PostGIS.',
            'Implemented a notification center using REST webservices and Redis database.',
            'Added an authentication portal based on CAS protocol to an existing web application.'
        ],
        technologies: [
            'Java (J2EE)', 'PHP', 'Struts2', 'OpenLayers', 'Geoserver', 'PostgreSQL', 'PostGIS','Redis(NoSQL)',
            'Maven', 'Sonar', 'SVN', 'Git', 'HTML5', 'CSS3', 'Javascript', 'Jquery', 'Bootstrap'
        ]
    }, {
        id: 2,
        dates : 'Sept. 2013 - 2016',
        role : 'Fullstack Software Engineer',
        company: {
            name : 'CA Consumer Finance',
            link : 'https://www.ca-consumerfinance.com/',
            domain: 'Credit Consumer Market',
            resume: 'Financing, brokerage, and insurance solutions.',
            logo: 'https://presse.credit-agricole.com/media/cache/no_filter_grid_fs/58caab7c1f16216e078b457b'
        },
        tasks: [
            'Analysis & conception (UML), writing of specifications, development, continuous integration (Maven, Sonar, Jenkins, SVN), unit test(JUnit).',
            'Built a web application (J2EE, Spring MVC, Hibernate) communcating with mainframe services using a middleware (Oracle Tuxedo).',
            'Developed the mainframe services used by the web application using COBOL.',
            'Proposed and implmented a new design of the web application using Bootstrap.',
        ],
        technologies: [
            'Java', 'COBOL', 'Hibernate', 'DB2', 'Spring MVC', 'SQL', 'XML', 'JSP', 'Bootstrap', 
            'Maven', 'Sonar', 'SVN', 'HTML5', 'CSS3', 'Javascript', 'Jquery'
        ]
    }, {
        id: 3,
        dates : 'April - June 2013',
        role : 'Web Developer',
        company: {
            name : 'AssurPeople',
            link : 'https://www.assurpeople.com/',
            domain: 'Insurance Broker',
            resume: 'Brokerage and insurance solutions providing.',
            logo: 'https://www.assurpeople.com/sites/all/themes/bootstrap_subtheme/img/logo.png'
        },
        tasks: [
            'Gathered requirements from human resources.',
            'Developed a web application used to handle company\'s leave management.'
        ],
        technologies: [
            'Php', 'MySQL', 'WampServer', 'HTML5', 'CSS3', 'Javascript', 'Jquery', 'SQL'
        ]
    }
];

const TABLET = 769;
const DURATION_ANIMATION = 150;
const INITIAL_MODAL = {
    id: 0,
    role: '',
    dates: '',
    company: {
        name: '',
        link: '',
        domain: '',
        resume: '',
        logo: ''
    },
    tasks: [],
    technologies: []
}

class Work extends Component {
    
    constructor(props){
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

    render(){
        const {timelineCentered, isModalShown, modalData} = this.state;
        return <section id="work" className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white is-with-bar" 
                        id="work-title"
                        data-aos="fade-in"
                    >
                        Work experience
                    </h1>
                        
                    <div id="timeline" className={`timeline ${timelineCentered && 'is-centered'}`}>
                        <header className="timeline-header"
                            data-aos="fade-in"
                            data-aos-delay="100"
                        >
                            <span className="tag is-medium is-light is-rounded">2019</span>
                        </header>

                        {
                            experiences.map((exp, index) => 
                                <Experience 
                                    key={exp.id}
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

export default Work;
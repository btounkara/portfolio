import React , {Component} from 'react'
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
        dates : 'April - June 2013',
        company : 'AssurPeople',
        linkToCompany : 'https://www.assurpeople.com/',
        role : 'Web developer',
        technologies : []
    }
];


const TABLET = 769;
const DURATION_ANIMATION = 150;

class Work extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            timeline_centered: window.innerWidth >= TABLET
        };
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleWindowResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize(){
        this.setState({
            timeline_centered: window.innerWidth >= TABLET
        });
    }

    render(){
        return <section id="work" className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white is-with-bar" 
                        id="work-title"
                        data-aos="fade-in"
                    >
                        Work experience
                    </h1>
                        
                    <div id="timeline" className={`timeline ${this.state.timeline_centered && 'is-centered'}`}>
                        <header className="timeline-header"
                            data-aos="fade-in"
                            data-aos-delay="100"
                        >
                            <span className="tag is-medium is-light">2019</span>
                        </header>

                        {
                            experiences.map((exp, index) => 
                                <Experience 
                                    key={exp.id}
                                    value={exp}
                                    delay={(index + 1) * DURATION_ANIMATION}
                                />
                            )
                        }

                        <div className="timeline-header"
                            data-aos="fade-in"
                            data-aos-delay={(experiences.length * DURATION_ANIMATION)}
                        >
                            <span className="tag is-medium is-light">2013</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    }
}

export default Work;
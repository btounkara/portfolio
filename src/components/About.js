import React from 'react'
import './About.scss';

const languages = ['Java (J2E)', 'Java (Android)', 'XML', 'SQL', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'COBOL'];
const technologies = ['NodeJS', 'React', 'Angular', 'Java 8', 'Webpack', 'Sass', 'Bulma', 'Android', 'Ormlite', 'Mockito', 'Robolectric'];

function importAll(toImport) {
    return toImport.keys().map(toImport);
}
  
const images = importAll(
    require.context('../icons', false, /\.(png|jpe?g|svg)$/)
);

const About = () => (
    <section id="about" className="section hero" data-aos="fade-in">
        <div className="hero-body">
            <div className="container">
                <h1 className="title has-text-white is-2 is-with-bar">About me</h1>
                <div className="content is-medium">
                    <p className="is-size-4">
                        <strong>Hello word. I'm <span className="has-text-info">Bakary</span>. Nice to meet you.</strong>
                    </p>
                    <p>
                        I'm a 25 years old french <strong><span className="has-text-info">Fullstack Web Developer</span></strong> based next to <span className="has-text-info">Paris</span>(France).<br/>
                        I'm a problem solver and a thinker who enjoys <span className="has-text-info">being challenged</span> and <span className="has-text-info">coding apps</span>.<br/>
                        I tend to be curious and love <span className="has-text-info">learning new things</span> in IT as well as in everyday's life.
                    </p>
                    <p>
                        <span className="has-text-primar">Here's a list of languages I speak :</span>
                    </p>
                    <div className="tags">
                        {
                            languages.map(lang => <span key={lang} className="tag is-light is-medium">{lang}</span>)
                        }
                    </div>
                    <p>Recently I've been working with <span className="has-text-info">these technologies</span> :</p>
                    <ul>
                        {
                            technologies.map(techno => <li key={techno}>{techno}</li>)
                        }
                    </ul>
                    {
                        /*
                        <p>My others passions : basket-ball, musculation, mangas, TV shows & spending time with my friends/family.</p>
                        basket-ball, dumb-bell, book, 
                        I'm confident and like to be challenged.
                        Coding new apps
                        Voyage, sport, meeting new people
                        Languages I speak => Java, Javascript ...
                        Technos utilisées
                        DUT Informatique Descartes , Ingénieur EFREI
                        */
                    }
                </div>
                <div className="content is-medium is-centered">
                    <p>The development tools I use :</p>
                    <div className="columns is-multiline is-centered is-mobile">
                        {
                            images.map(image => 
                                <div className="column" key={image}>
                                    <figure className="image is-64x64">
                                        <img src={image}/>
                                    </figure>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
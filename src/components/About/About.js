import React, {Component} from 'react'
import './About.scss';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const languages = ['Java (J2E)', 'Java (Android)', 'JavaScript', 'XML', 'SQL',  'HTML5', 'CSS3', 'PHP', 'COBOL'];
const technologies = ['Java 8', 'NodeJS', 'React', 'Angular', 'Webpack', 'Babel', 'Sass', 'Bulma', 'Android', 'Ormlite', 'Mockito', 'Robolectric'];

function importAll(toImport) {
    return toImport.keys().map(toImport).map(elem => {
        const slicedString = elem.split('/');
        const underscore_name = slicedString[slicedString.length - 1].split('.')[0];
        return { 
            path: elem,
            name: _.startCase(_.camelCase(underscore_name))
        }
    });
}

const images = importAll(
    require.context('../../icons', false, /\.(png|jpe?g|svg)$/)
);

export default function About() {
    const { t, i18n } = useTranslation();

    return <section id="about" className="hero is-fullheight" data-aos="fade-in">
        <div className="hero-body">
            <div className="container">
                <h1 className="title has-text-white is-with-bar">{t('about.title')}</h1>
                <div className="content is-medium">
                    <p className="is-size-4">
                        <strong>{t('about.hello.start')} <span className="has-text-info">Bakary</span>. {t('about.hello.end')}.</strong>
                    </p>
                    <p>
                        {t('about.presentation.me')} <strong><span className="has-text-info">{t('about.presentation.role')}</span></strong> {t('about.presentation.based')} <span className="has-text-info">Paris</span>(France).<br/>
                        {t('about.presentation.solver')} <span className="has-text-info">{t('about.presentation.challenged')}</span> {t('and')} <span className="has-text-info">{t('about.presentation.coding')}</span>.<br/>
                        {t('about.presentation.curious')} <span className="has-text-info">{t('about.presentation.learning')}</span> {t('about.presentation.life')}.<br/>
                    </p>
                    <p>
                        {t('about.school.start')} <a href="http://www.iut.parisdescartes.fr/" className="has-text-info"><strong>{t('about.school.descartes.name')}</strong></a> 
                        {' '}{t('about.school.descartes.degree')} {t('about.school.and')} <a href="https://www.efrei.fr/" className="has-text-info">< strong>{t('about.school.efrei.name')}</strong></a> {t('about.school.efrei.degree')}.
                        {' '}{t('about.school.work.start')} <a href="http://www.kleegroup.com" className="has-text-info"><strong>Klee Group</strong></a> {t('about.school.work.end')}.
                        {' '}{t('about.school.dream')}
                    </p>
                    <p>
                        <span className="has-text-primar">{t('about.languagesSpoken')} :</span>
                    </p>
                    <div className="tags">
                        {
                            languages.map(lang => <span key={lang} className="tag is-light is-rounded is-medium">{lang}</span>)
                        }
                    </div>
                    <p>{t('about.recently.start')} <span className="has-text-info">{t('about.recently.end')}</span> :</p>
                    <ul>
                        {
                            technologies.map(techno => <li key={techno}>{techno}</li>)
                        }
                    </ul>
                </div>
                <div className="content is-medium is-centered">
                    <p>{t('about.developmentTools')} :</p>
                    <div className="columns is-multiline is-centered is-mobile">
                        {
                            images.map(image => 
                                <div className="column" key={image.path}>
                                    <figure className="image is-64x64 tooltip is-tooltip-bottom is-tooltip-info" data-tooltip={image.name}>
                                        <img src={image.path}/>
                                    </figure>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>

};
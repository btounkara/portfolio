import React, { Component } from 'react'
import './About.scss';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const LANGUAGES = ['Java', 'React', 'Angular', 'VueJs', 'JavaScript (ES6)', 'Typescript', 'SQL', 'XML'];
const TECHNOLOGIES = ['Java 14', 'Spring', 'VueJs', 'Nuxt', 'Vuetify', 'React', 'React Native', 'Angular', 'Docker', 'Vault', 'XL Deploy', 'NodeJS', 'RxJs', 'MongoDB', 'REST'];

function importAll(toImport) {
	return toImport.keys().map(toImport).map(({ default: path }) => {
		const slicedUrl = path.split('/');
		const fileNameWithUnderscore = slicedUrl[slicedUrl.length - 1].split('.')[0];
		return {
			path,
			name: _.startCase(_.camelCase(fileNameWithUnderscore)),
		}
	});
}

const IMAGES = importAll(
	require.context('../../icons', false, /\.(png|jpe?g|svg)$/)
);

const About = () => {
	const { t, i18n } = useTranslation();
	return <section id="about" className="hero is-fullheight" data-aos="fade-in">
		<div className="hero-body">
			<div className="container">
				<h1 className="title has-text-white is-with-bar">{t('about.title')}</h1>
				<div className="content is-medium has-text-light">
					<p className="is-size-4">
						<strong>{t('about.hello.start')} <span className="has-text-info">Bakary</span>. {t('about.hello.end')}.</strong>
					</p>
					<p>
						{t('about.presentation.me')} <span className="has-text-info has-text-weight-bold">{t('about.presentation.role')}</span> {t('about.presentation.based')} <span className="has-text-info has-text-weight-bold">Paris</span> (France).<br />
						{t('about.presentation.solver')} <span className="has-text-info has-text-weight-bold"> {t('about.presentation.challenged')}</span> {t('and')} <span className="has-text-info has-text-weight-bold">{t('about.presentation.coding')}</span>.<br />
						{t('about.presentation.curious')} <span className="has-text-info has-text-weight-bold">{t('about.presentation.learning')}</span> {t('about.presentation.life')}.<br />
					</p>
					<p>
						{t('about.school.start')} <a href="http://www.iut.parisdescartes.fr/" className="has-text-info has-text-weight-bold">{t('about.school.descartes.name')}</a>
						{' '}{t('about.school.descartes.degree')} {t('about.school.and')} <a href="https://www.efrei.fr/" className="has-text-info has-text-weight-bold">{t('about.school.efrei.name')}</a> {t('about.school.efrei.degree')}.
						{' '}{t('about.work.klee.start')} <a href="http://www.kleegroup.com" className="has-text-info has-text-weight-bold">Klee Group</a> {t('about.work.klee.end')}.
					</p>
					<p>
						{' '}{t('about.dream')}
					</p>
					<p>
						{' '}{t('about.work.zenika.start')} <a href="http://www.zenika.com" className="has-text-info has-text-weight-bold">Zenika</a> {t('about.work.zenika.end')}
					</p>
					<p>
						{' '}{t('about.work.freelance.start')}
					</p>
					<p>
						{t('about.languagesSpoken')} :
					</p>
					<div className="tags">
						{
							LANGUAGES.map(lang => <span key={lang} className="tag is-light is-rounded is-medium">{lang}</span>)
						}
					</div>
					<p>{t('about.recently.start')} <span className="has-text-info has-text-weight-bold">{t('about.recently.end')}</span> :</p>
					<ul>
						{
							TECHNOLOGIES.map(techno => <li key={techno}>{techno}</li>)
						}
					</ul>
				</div>
				<div className="content is-medium is-centered has-text-light">
					<p>{t('about.developmentTools')} :</p>
					<div className="columns is-multiline is-centered is-mobile">
						{
							IMAGES.map(image =>
								<div className="column" key={image.path}>
									<figure className="image is-64x64 tooltip is-tooltip-bottom is-tooltip-info" data-tooltip={image.name}>
										<img src={image.path} />
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

export default About;

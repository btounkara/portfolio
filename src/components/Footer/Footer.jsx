import React from 'react';
import './Footer.scss';
import madeWithBulma from '../../images/made-with-bulma.png';
import { useTranslation } from 'react-i18next';

const Footer = () =>  {
	const { t, i18n } = useTranslation();
	return <footer id="contact" 
		className="hero section is-fullheight"
		data-aos="fade-in"
	>
		<div className="hero-body">
			<div className="container">
				<div className="content is-medium has-text-centered">
					<h1 className="title is-2 has-text-white">{t('footer.contact')}</h1>
					<p className="has-text-light mb-5">{t('footer.getInTouch')}</p>
					<a className="button is-light is-outlined is-medium is-rounded" href="mailto:bak.tounkara.pro@gmail.com">{t('footer.email')}</a>
				</div>
			</div>
		</div>

		<div className="hero-foot">
			<div className="copyright has-text-centered has-text-light">
				<p>Copyright © {new Date().getFullYear()}</p>
				<p>Developed by Bakary Tounkara</p>
				<p>
					Source on <a className="source" href="https://github.com/btounkara/portfolio">Github</a>
				</p>
				<p>
					<a href="https://bulma.io">
						<img src={madeWithBulma} alt="Made with Bulma" width="163" height="31"/>
					</a>
				</p>
			</div>
		</div>
	</footer>
}

export default Footer;
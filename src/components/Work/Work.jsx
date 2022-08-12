import React, { useEffect, useState } from 'react'
import Experience from '../Experience/Experience';
import Modal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

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
	technologies: [],
}

const Work = ({  }) => {
	const [timelineCentered, setTimelineCentered] = useState(window.innerWidth >= TABLET);
	const [isModalShown, setIsModalShown] = useState(false);
	const [modalData, setModalData] = useState({ ...INITIAL_MODAL });

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);    
		}
	}, []);

	const handleWindowResize = () => setTimelineCentered(window.innerWidth >= TABLET);

	const closeModal = () => setIsModalShown(!isModalShown);

	const openModal = (value) => {
			setIsModalShown(true);
			setModalData(value);
	}

	const { t } = useTranslation();
	const experiences = t('work.experiences', { returnObjects: true });
	const currentYear = new Date().getFullYear();

	return <section id="work" className="hero is-fullheight">
		<div className="hero-body">
			<div className="container has-text-light">
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
								openModal={openModal}
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
					closeModal={closeModal}
					isShown={isModalShown}
					data={modalData}
				/>
			</div>
		</div>
	</section>
}

export default Work;
import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social/Social';
import './Header.scss';
import { useTranslation } from 'react-i18next';

const Header = ({ onClick }) => {
  const { t, i18n } = useTranslation();
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-light" data-aos="fade-in">
            {t('header.hi')}
          </p>
          <p
            className="title name has-text-white"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Bakary Tounkara
          </p>
          <p className="subtitle role has-text-light" data-aos="fade-in" data-aos-delay="300">
            {t('header.role')}
          </p>
          <p className="subtitle is-5 has-text-light" data-aos="fade-in" data-aos-delay="400">
            {t('header.based')}.
          </p>
          <Social animation="fade-in" delay="600" />
        </div>
      </div>
      <div className="hero-foot">
        <p
          className="has-text-centered has-text-light"
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-offset="0"
        >
          <span className="is-size-4">{t('header.getToKnow')}</span>
          <br />
          <span onClick={() => onClick('about')}>
            <i className="fas fa-chevron-down fa-2x" />
          </span>
        </p>
      </div>
    </section>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;

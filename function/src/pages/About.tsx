import React from 'react'
import {useTranslation} from 'react-i18next'
import {Helmet} from 'react-helmet'
import photo from '../assets/img/stephane_roche_profile.jpg'

export const About: React.FC = () => {
  const {t, i18n} = useTranslation(['About', 'Meta'])

  return (
    <>
      <Helmet>
        <title>{t('Meta:title.about')}</title>
        <meta name="description" content={t('Meta:description.about')}/>
        {i18n.language === 'fr'
          ? <link rel="canonical" href="https://www.bitcoin-studio.com/fr/a-propos"/>
          : <link rel="canonical" href="https://www.bitcoin-studio.com/about"/>}
      </Helmet>
      <div className="page page--xs" id="aboutPage">
        <div className="hero">
          <h1>
            {t('title')}
          </h1>

          <p>
            {t('hero')}
          </p>
        </div>

        <section id="description">
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('about-title')}</h2>
          <img className="about-profile-img" src={photo} alt="stephane roche profile"/>

          <p>
            {t('about-content-1')}
          </p>

          <p>
            {t('about-content-2')}
          </p>

          <p>
            {t('about-content-3')}
          </p>

          <p>
            {t('about-content-4')}
          </p>

          <p>
            {t('about-content-5')}
          </p>

          <p>
            {t('about-content-6')}
          </p>
        </section>
      </div>
    </>
  )
}

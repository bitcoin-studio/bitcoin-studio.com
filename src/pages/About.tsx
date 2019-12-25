import * as React from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import photo from '../assets/img/stephane_roche_profile.jpg'

function About({t}: WithTranslation) {

  return (
      <div className={'page page--xs'} id={'aboutPage'}>
        <div className={'hero'}>
          <h1>
            {t('title')}
          </h1>

          <p>
            {t('hero')}
          </p>
        </div>

        <section id={'description'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('about-title')}</h2>
          <img className={'about-profile-img'} src={photo} alt="stephane roche profile"/>

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
  )
}

export default  withTranslation('About')(About)
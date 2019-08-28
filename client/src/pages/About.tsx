import * as React from 'react'
import { withNamespaces, Trans } from 'react-i18next'

function About({t}) {

  return (
      <div id={'aboutPage'}>
        <div className={'hero'} id={'hero-aboutPage'}>
          <h1>
            {t('title')}
          </h1>

          <p>
            {t('hero')}
          </p>
        </div>

        <section id={'description-aboutPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('about-title')}</h2>
          <img className={'about-profile-img'} src="assets/stephane_roche_profile.jpg" alt="stephane roche profile"/>

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

          <p>
            {t('about-content-7')}
          </p>
        </section>
      </div>
  )
}

export default  withNamespaces('About')(About)
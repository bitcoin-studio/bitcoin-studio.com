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
          <h2>STEPHANE ROCHE - CEO/CTO</h2>
          <img className={'about-profile-img'} src="assets/stephane_roche_profile.png" alt="stephane roche profile"/>
          <p className={'about-content'}>
            <Trans i18nKey="about-content-1">
              0 <a href="http://asseth.fr" target={'_blank'}>asseth.fr</a>
              2 <a href="https://dether.io/" target={'_blank'}>Dether.io</a>
            </Trans>
          </p>

          <p>
            {t('about-content-2')}
          </p>
        </section>
      </div>
  )
}

export default  withNamespaces('About')(About)
import * as React from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'

function Footer({t}: WithTranslation) {

  return (
    <footer className="footer">
      <div id="services_footer">
        <h2>{t('col1.title')}</h2>
        <nav>
          <ul>
            <li><a href={'./workshops'}>{t('col1.1')}</a></li>
            <li><a href={'./resources'}>{t('col1.2')}</a></li>
            <li><a href={'./about'}>{t('col1.3')}</a></li>
            <li><a href={'./contact'}>{t('col1.4')}</a></li>
          </ul>
        </nav>
      </div>

      <div id="connect">
        <h2>{t('col2.title')}</h2>
        <nav>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/bitcoin-studio'>{t('col2.1')}</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://twitter.com/JanakaSteph">{t('col2.2')}</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stephane-roche">{t('col2.3')}</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href='https://janakasteph.keybase.pub/'>{t('col2.4')}</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default withTranslation('Footer')(Footer)
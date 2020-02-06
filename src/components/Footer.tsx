import React from 'react'
import {Trans, useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

export const Footer: React.FC = () => {
  const {t, i18n} = useTranslation('Footer')
  const pathMapping = [
    ['workshops', 'formations'],
    ['resources', 'ressources'],
    ['about', 'a-propos'],
    ['contact', 'contact'],
  ]

  return (
    <footer>
      <div className="footer">
        <div id="services_footer">
          <h2>{t('col1.title')}</h2>
          <nav>
            <ul>
              <li>
                <Link to={`${i18n.language === 'fr' ? pathMapping[0][1] : pathMapping[0][0]}`}>
                  {t('col1.1')}
                </Link>
              </li>
              <li>
                <Link to={`${i18n.language === 'fr' ? pathMapping[1][1] : pathMapping[1][0]}`}>
                  {t('col1.2')}
                </Link>
              </li>
              <li>
                <Link to={`${i18n.language === 'fr' ? pathMapping[2][1] : pathMapping[2][0]}`}>
                  {t('col1.3')}
                </Link>
              </li>
              <li>
                <Link to={`${i18n.language === 'fr' ? pathMapping[3][1] : pathMapping[3][0]}`}>
                  {t('col1.4')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div id="connect">
          <h2>{t('col2.title')}</h2>
          <nav>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/bitcoin-studio">{t('col2.1')}</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/JanakaSteph">{t('col2.2')}</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stephane-roche">{t('col2.3')}</a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://janakasteph.keybase.pub/">{t('col2.4')}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div id="copyrights">
        <div className="strike"/>
        <p>Bitcoin Studio - 2020</p>
        <p>SIRET 795 207 117 00016</p>
        <p>
          <Trans i18nKey="license" t={t}>
            _
            <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">_</a>
            _
            <a href="https://www.flaticon.com/" title="Flaticon">_</a>
            _
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              rel="noopener noreferrer"
              target="_blank"
            >
              _
            </a>
          </Trans>
        </p>
      </div>
    </footer>
  )
}

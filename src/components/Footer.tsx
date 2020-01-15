import React, {FC} from 'react'
import {useTranslation} from 'react-i18next'

export const Footer: FC = () => {
  const {t} = useTranslation('Footer')

  return (
    <footer>
      <div className="footer">
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

      <div id={'copyrights'}>
        <div className="strike"/>
        <p>Bitcoin Studio - 2019</p>
        <p>SIRET 795 207 117 00016</p>
        <p>
          Icons made by
          {' '}
          <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>
          from
          {' '}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            {'www.flaticon.com'}
          </a>
          {'is licensed by'}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            rel="noopener noreferrer"
            target="_blank"
          >
            {'CC 3.0 BY'}
          </a>
        </p>
      </div>
    </footer>
  )
}

import React, {useCallback, useState} from 'react'
import {Link} from 'react-router-dom'
import {WithTranslation, withTranslation} from 'react-i18next'
import i18n from '../i18n'
import logo from '../assets/img/bitcoin-studio-black.svg'

type Props = WithTranslation & {
  isMenuOpen: boolean
}

export const Header: React.ComponentClass<any> | React.FunctionComponent<any> = withTranslation('Header')
(({t, isMenuOpen}: Props) => {

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng)
      .catch((e) => console.error(e))
  }, [])

  const initialPage = useCallback(() => {
    switch (window.location.pathname) {
      case ('/'):
        return 'HOME'
      case ('/workshops'):
        return 'WORKSHOPS'
      case ('/resources'):
        return 'RESOURCES'
      case ('/about'):
        return 'ABOUT'
      case ('/contact'):
        return 'CONTACT'
      default:
        return 'NOTFOUND'
    }
  }, [])

  const [activeItem, setActiveItem] = useState(initialPage())

  const tabIndex = isMenuOpen ? 0 : -1

  return (
    <div className={'header'}>
      <Link className={activeItem === 'HOME' ? 'menu-item--active' : ''} onClick={() => setActiveItem('HOME')} to="/">
        <img src={logo} alt="Bitcoin Studio Logo"/>
      </Link>
      <nav aria-hidden={!isMenuOpen} className={`header__links ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          <li>
            <Link className={activeItem === 'HOME' ? 'menu-item--active' : ''} onClick={() => setActiveItem('HOME')} to="/"
                  tabIndex={tabIndex}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link className={activeItem === 'WORKSHOPS' ? 'menu-item--active' : ''} onClick={() => setActiveItem('WORKSHOPS')}
                  to="/workshops" tabIndex={tabIndex}>{t('workshops')}</Link>
          </li>
          <li>
            <Link className={activeItem === 'RESOURCES' ? 'menu-item--active' : ''} onClick={() => setActiveItem('RESOURCES')}
                  to="/resources" tabIndex={tabIndex}>{t('resources')}</Link>
          </li>
          <li>
            <Link className={activeItem === 'ABOUT' ? 'menu-item--active' : ''} onClick={() => setActiveItem('ABOUT')}
                  to="/about" tabIndex={tabIndex}>{t('about')}</Link>
          </li>
          <li>
            <Link className={activeItem === 'CONTACT' ? 'menu-item--active' : ''} onClick={() => setActiveItem('CONTACT')}
                  to="/contact" tabIndex={tabIndex}>{t('contact')}</Link>
          </li>

          <li id={'translation-btn'}>
            <button className={'btn-link'} onClick={() => changeLanguage('en')} tabIndex={tabIndex}>EN</button>
            {'/'}
            <button className={'btn-link'} onClick={() => changeLanguage('fr')} tabIndex={tabIndex}>FR</button>
          </li>
        </ul>
      </nav>
    </div>
  )
})
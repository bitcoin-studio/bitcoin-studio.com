import React, {useCallback} from 'react'
import {Link, NavLink} from 'react-router-dom'
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

  const tabIndex = isMenuOpen ? 0 : -1

  return (
    <div className={'header'}>
      <Link to={'/'}>
        <img src={logo} alt="Bitcoin Studio Logo"/>
      </Link>
      <nav aria-hidden={!isMenuOpen} className={`header__links ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          <li>
            <NavLink exact to={'/'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink exact to={'/workshops'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('workshops')}
            </NavLink>
          </li>
          <li>
            <NavLink exact to={'/resources'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('resources')}
            </NavLink>
          </li>
          <li>
            <NavLink exact to={'/about'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink exact to={'/contact'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('contact')}
            </NavLink>
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
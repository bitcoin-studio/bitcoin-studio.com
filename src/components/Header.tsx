import React, {FC, useCallback} from 'react'
import log from 'loglevel'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import logo from '../assets/img/bitcoin-studio-black.svg'

type Props = {
  id: string
  isMenuOpen: boolean
}

export const Header: FC<Props> = ({isMenuOpen, id}) => {
  const {t, i18n} = useTranslation('Header')

  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng)
      .catch((e) => log.error(e))
  }, [i18n])

  const tabIndex = isMenuOpen ? 0 : -1

  return (
    <div className={'header'} id={id}>
      <Link to={'/'}>
        <img src={logo} alt="Bitcoin Studio Logo"/>
      </Link>
      <nav aria-hidden={!isMenuOpen} className={`header__links ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          <li>
            <NavLink exact={true} to={'/'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to={'/workshops'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('workshops')}
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to={'/resources'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('resources')}
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to={'/about'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('about')}
            </NavLink>
          </li>
          <li>
            <NavLink exact={true} to={'/contact'} activeClassName={'menu-item--active'} tabIndex={tabIndex}>
              {t('contact')}
            </NavLink>
          </li>

          <li id={'translation-btn'}>
            <button
              className={'btn-link'}
              onClick={() => changeLanguage('en')}
              tabIndex={tabIndex}
              type={'button'}
            >
              {'EN'}
            </button>
            {'/'}
            <button
              className={'btn-link'}
              onClick={() => changeLanguage('fr')}
              tabIndex={tabIndex}
              type={'button'}
            >
              {'FR'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

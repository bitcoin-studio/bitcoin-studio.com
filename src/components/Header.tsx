import React, {useCallback, useMemo} from 'react'
import log from 'loglevel'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import logo from '../assets/img/bitcoin-studio-black.svg'
import {i18translateType} from '../../typings/types'

type Props = {
  id: string
  isMenuOpen: boolean
}

export const Header: React.FC<Props> = ({isMenuOpen, id}) => {
  const {t, i18n}: i18translateType = useTranslation(['Header'])
  const pathMapping = useMemo(() => [
    ['', ''],
    ['workshops', 'formations'],
    ['resources', 'ressources'],
    ['about', 'a-propos'],
    ['contact', 'contact'],
  ], [])

  const changeLanguage = useCallback((askedLng: string) => {
    i18n.changeLanguage(askedLng)
      // Rewrite current URL
      .then(() => {
        let subpaths = window.location.pathname.match(/\/([a-zA-Z-]*)/g)
        // Set currentLng
        const currentLng = subpaths?.[0] === '/fr' ? 'fr' : 'en'

        // Use location.assign() to cause the window to load and display the document at the rewritten URL
        // It allows re-setting BrowserRouter 'basename' property in the index.tsx
        if (currentLng === 'en' && askedLng === 'fr') {
          // At EN root path, empty string
          subpaths = subpaths?.length === 0 ? [''] : subpaths
          const path = pathMapping.find((p) => subpaths?.[0].substring(1) === p[0])
          window.location.assign(process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/fr/${path?.[1]}` : `/fr/${path?.[1]}`)
        } else if (currentLng === 'fr' && askedLng === 'en') {
          // At FR root path, add trailing slash if not present
          subpaths = (subpaths?.length === 1) ? subpaths.concat(['/']) : subpaths
          const path = pathMapping.find((p) => subpaths?.[1]?.substring(1) === p[1])
          window.location.assign(process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/${path?.[0]}` : `/${path?.[0]}`)
        }
      })
      .catch((e: any) => log.error(e))
  }, [i18n, pathMapping])

  const tabIndex = isMenuOpen ? 0 : -1

  return (
    <div className="header" id={id}>
      <Link to="/">
        <img src={logo} alt="Bitcoin Studio Logo"/>
      </Link>
      <nav aria-hidden={!isMenuOpen} className={`header__links ${isMenuOpen ? 'nav__mobile--open' : ''}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? 'menu-item--active' : undefined
              }
              tabIndex={tabIndex}>
              {t('Header:home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${i18n.language === 'fr' ? pathMapping[1][1] : pathMapping[1][0]}`}
              className={({isActive}) =>
                isActive ? 'menu-item--active' : undefined
              }
              tabIndex={tabIndex}
            >
              {t('Header:workshops')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${i18n.language === 'fr' ? pathMapping[2][1] : pathMapping[2][0]}`}
              className={({isActive}) =>
                isActive ? 'menu-item--active' : undefined
              }
              tabIndex={tabIndex}
            >
              {t('Header:resources')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${i18n.language === 'fr' ? pathMapping[3][1] : pathMapping[3][0]}`}
              className={({isActive}) =>
                isActive ? 'menu-item--active' : undefined
              }
              tabIndex={tabIndex}
            >
              {t('Header:about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${i18n.language === 'fr' ? pathMapping[4][1] : pathMapping[4][0]}`}
              className={({isActive}) =>
                isActive ? 'menu-item--active' : undefined
              }
              tabIndex={tabIndex}
            >
              {t('Header:contact')}
            </NavLink>
          </li>

          <li id="translation-btn">
            <button
              className="btn-link"
              onClick={() => changeLanguage('en')}
              tabIndex={tabIndex}
              type="button"
            >
              EN
            </button>
            /
            <button
              className="btn-link"
              onClick={() => changeLanguage('fr')}
              tabIndex={tabIndex}
              type="button"
            >
              FR
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

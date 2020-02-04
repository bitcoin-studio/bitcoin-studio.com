import React, {memo} from 'react'
import {Route} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import i18n from '../i18n'
import {Home} from '../pages/Home'
import {Workshops} from '../pages/Workshops'
import {Resources} from '../pages/Resources'
import {About} from '../pages/About'
import {Contact} from '../pages/Contact'
import {NotFound} from '../pages/NotFound'

const routes: Array<{ path: () => string, Component: React.FC }> = [
  {
    path: () => '/',
    Component: Home,
  },
  {
    path: () => (i18n.language === 'en' ? '/workshops' : '/formations'),
    Component: Workshops,
  },
  {
    path: () => (i18n.language === 'en' ? '/resources' : '/ressources'),
    Component: Resources,
  },
  {
    path: () => (i18n.language === 'en' ? '/about' : '/a-propos'),
    Component: About,
  },
  {
    path: () => '/contact',
    Component: Contact,
  },
]

const SiteRoutes: () => any = () => {
  const routeComponents = routes.map(({path, Component}) => (
    <Route key={path()} exact={true} path={path()}>
      {({match}) => (
        <CSSTransition
          in={match != null}
          timeout={200}
          classNames="pageContainer"
          unmountOnExit={true}
        >
          <div className="pageContainer">
            <Component/>
          </div>
        </CSSTransition>
      )}
    </Route>
  ))

  /* Hack to have 404 page working with CssTransition */
  routeComponents.push(
    <Route key="NotFound">
      {(routeProps) => {
        if (routes.filter((r) => r.path() === routeProps.location.pathname).length === 0) {
          return (
            <CSSTransition
              in={routeProps.match != null}
              timeout={200}
              classNames="pageContainer"
              unmountOnExit={true}
            >
              <div className="pageContainer">
                <NotFound/>
              </div>
            </CSSTransition>
          )
        }
        return <></>
      }}
    </Route>,
  )
  return routeComponents
}

export const Main = memo(function Main() {
  return (
    <main>
      <SiteRoutes/>
    </main>
  )
})

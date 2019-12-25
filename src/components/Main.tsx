import React, {memo} from 'react'
import {Route} from 'react-router-dom'
import {
  CSSTransition,
} from 'react-transition-group'

import Home from '../pages/Home'
import Workshops from '../pages/Workshops'
import Resources from '../pages/Resources'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const routes = [
  {path: '/', Component: Home},
  {path: '/workshops', Component: Workshops},
  {path: '/resources', Component: Resources},
  {path: '/about', Component: About},
  {path: '/contact', Component: Contact},
]

function SiteRoutes(): any {
  const routeComponents = routes.map(({path, Component}) => (
    <Route key={path} exact path={path}>
      {({match}) => (
        <CSSTransition
          in={match != null}
          timeout={300}
          classNames="pageContainer"
          unmountOnExit
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
    <Route key={'NotFound'}>
      {routeProps => {
        if (routes.filter(r => r.path === routeProps.location.pathname).length === 0) {
          return (
            <CSSTransition
              in={routeProps.match != null}
              timeout={300}
              classNames="pageContainer"
              unmountOnExit
            >
              <div className="pageContainer">
                <NotFound/>
              </div>
            </CSSTransition>
          )
        } else {
          return <></>
        }
      }}
    </Route>,
  )
  return routeComponents
}

function Main() {
  return (
    <main>
      <SiteRoutes/>
    </main>
  )
}

export default memo(Main)
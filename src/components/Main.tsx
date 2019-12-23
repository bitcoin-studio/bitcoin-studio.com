import React, {lazy, memo} from 'react'
import {Route, Switch} from 'react-router-dom'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={lazy(() => import('../pages/Home'))}/>
        <Route exact path='/workshops' component={lazy(() => import('../pages/Workshops'))}/>
        <Route exact path='/resources' component={lazy(() => import('../pages/Resources'))}/>
        <Route exact path='/about' component={lazy(() => import('../pages/About'))}/>
        <Route exact path='/contact' component={lazy(() => import('../pages/Contact'))}/>
        <Route path='' component={lazy(() => import('../pages/NotFound'))}/>
      </Switch>
    </main>
  )
}

export default memo(Main)
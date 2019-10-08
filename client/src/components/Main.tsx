import * as React from 'react'
import { Route, Switch } from "fuse-react"

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={async () => import('../pages/Home')}/>
          <Route exact path='/workshops' component={async () => import('../pages/Workshops')}/>
          <Route exact path='/resources' component={async () => import('../pages/Resources')}/>
          <Route exact path='/about' component={async () => import('../pages/About')}/>
          <Route path='' component={async () => import('../pages/NotFound')}/>
        </Switch>
      </main>
    )
  }
}

export default Main

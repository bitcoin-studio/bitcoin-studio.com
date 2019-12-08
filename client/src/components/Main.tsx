import * as React from 'react'
import {Route, Switch} from 'fuse-react'

class Main extends React.Component {
  render() {
    return (
      <main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={async () => import('../pages/Home')}/>
            <Route exact path='/workshops' component={async () => import('../pages/Workshops')}/>
            <Route exact path='/resources' component={async () => import('../pages/Resources')}/>
            <Route exact path='/about' component={async () => import('../pages/About')}/>
            <Route exact path='/contact' component={async () => import('../pages/Contact')}/>
            <Route path='' component={async () => import('../pages/NotFound')}/>
          </Switch>
        </React.Suspense>
      </main>
    )
  }
}

export default Main

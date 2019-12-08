import * as React from 'react'
import {Route, Switch} from 'fuse-react'
import {TailSpin} from 'svg-loaders-react'

class Main extends React.Component {

  render() {
    return (
      <main>
        <Switch placeholder={
          <div className={'loader'}>
            <TailSpin viewBox="0 0 50 50"/>
          </div>}
        >
          <Route exact path='/' component={async () => import('../pages/Home')}/>
          <Route exact path='/workshops' component={async () => import('../pages/Workshops')}/>
          <Route exact path='/resources' component={async () => import('../pages/Resources')}/>
          <Route exact path='/about' component={async () => import('../pages/About')}/>
          <Route exact path='/contact' component={async () => import('../pages/Contact')}/>
          <Route path='' component={async () => import('../pages/NotFound')}/>
        </Switch>
      </main>
    )
  }
}

export default Main

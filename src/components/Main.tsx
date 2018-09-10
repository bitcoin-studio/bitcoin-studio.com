import * as React from 'react'
import Home from '../pages/Home'
import Workshops from '../pages/Workshops'
import Ressources from '../pages/Ressources'
import About from '../pages/About'
import { Route, Switch } from "fuse-react";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/workshops' component={Workshops}/>
          <Route exact path='/ressources' component={Ressources}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </main>
    )
  }
}

export default Main

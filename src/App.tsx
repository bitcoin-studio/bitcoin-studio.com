import * as React from 'react'

import Header from './components/Header'
import Main from './components/Main'

/**
 * Shell
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>

        <div className="row">
          <div className={'col-xs-10 col-xs-offset-1'}>
            <Main/>
          </div>
        </div>

      </div>
    )
  }
}

export default App
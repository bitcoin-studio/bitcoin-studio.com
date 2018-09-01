import * as React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

/**
 * Shell
 */
class App extends React.Component {
  render() {
    return (
      <div className={'wrapper'}>
        <Header/>

        <Main/>

        <Footer/>
      </div>
    )
  }
}

export default App
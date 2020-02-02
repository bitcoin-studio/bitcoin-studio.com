import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import log from 'loglevel'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'
import {ScrollToTop} from './components/ScrollToTop'
import {DelayedFallbackLoader} from './components/DelayedFallbackLoader'
import * as serviceWorker from './serviceWorker'
import i18n from './i18n'
import 'normalize.css/normalize.css'
import './assets/stylesheets/main.scss'

if (process.env.NODE_ENV === 'production') {
  log.setLevel('silent')
} else {
  log.setLevel('trace')
  log.info('Looks like we are in development mode!')
}

ReactDOM.render(
  <BrowserRouter
    basename={i18n.language === 'fr' ? '/fr' : ''}
  >
    <ScrollToTop/>
    <Suspense fallback={<DelayedFallbackLoader/>}>
      <App/>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './i18n'
import 'normalize.css/normalize.css'
import './assets/stylesheets/main.scss'
import {BrowserRouter} from 'react-router-dom'
import {Suspense} from 'react'
import DelayedFallbackLoader from './components/DelayedFallbackLoader'

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<DelayedFallbackLoader/>}>
      <App/>
    </Suspense>
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

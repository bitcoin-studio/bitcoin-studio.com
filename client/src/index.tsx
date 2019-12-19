console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './i18n'

// Import CSS
import 'normalize.css/normalize.css'
import "./stylesheets/main.scss"

// @ts-ignore
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()

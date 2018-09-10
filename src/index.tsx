console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css'
import './stylesheets/global.css';
import './stylesheets/homePage.css';
import './stylesheets/workshopsPage.css';
import './stylesheets/ressourcesPage.css';
import './stylesheets/aboutPage.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

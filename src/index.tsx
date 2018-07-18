import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import './global.css';
import 'flexboxgrid/css/flexboxgrid.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

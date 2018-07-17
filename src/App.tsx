import * as React from 'react';

import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return (
      <div >
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;

// className="flexContainer flexCenter itemCenter fullHeight"
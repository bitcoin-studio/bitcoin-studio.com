import * as React from 'react'

class Ressources extends React.Component {
  render() {
    return (
      <div className="row">
        <div className={'col-xs-10 col-xs-offset-1'}>
          <h1>Ressources</h1>
          <p>Workshop slides</p>
          <ul>
            <li>Keys, wallet, addresses</li>
            <li>Consensus, mining, forks</li>
            <li>All about transactions (legacy and segwit format)</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Ressources
import * as React from 'react'

class Services extends React.Component {
  render() {
    return (
      <div className="row">
        <div className={'col-xs-10 col-xs-offset-1'}>
          <h1>Services</h1>
          <ul>
            <li>
              Bitcoin workshops
              <ul>
                <li>Practical: Bitcoin workshop 1 day</li>
                <li>Essentials: Bitcoin workshop 2 days</li>
                <li>In-depth: Bitcoin workshop 5 days</li>
              </ul>
            </li>

            <li>Consulting for companies</li>
            <li>Private consulting for individuals</li>
            <li>Custom Bitcoin development (layer 1, layer 2)</li>
            <li>Bitcoin server/node installation</li>
          </ul>

          <h2>Consulting for companies</h2>
          <ul>
            <li>Choose a technology for your need</li>
            <li>Bitcoin: architecture, custom development, complex transaction, scripts, …</li>
            <li>System architecture</li>
            <li>Node installation (Bitcoin, LN, BTCPay, Tor) / System administration</li>
            <li>Node as a service</li>
          </ul>

          <h2>Consulting for individuals</h2>
          <ul>
            <li>Privately or in group</li>
            <li>Learn wallet/key management best practices</li>
            <li>General help, 1 day training</li>
            <li>Recover coins of bitcoin forks</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Services
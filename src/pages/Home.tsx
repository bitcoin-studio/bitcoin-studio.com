import * as React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className={'col-xs-10 col-xs-offset-1'}>
          <h1>Home</h1>

          <div className={'box'}>
            <p>Bitcoin expertise ...and more</p>
            <p>Extensive knowledge on blockchain tech</p>
          </div>

          <h2>Services</h2>
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
        </div>
      </div>
    )
  }
}

export default Home
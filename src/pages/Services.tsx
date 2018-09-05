import * as React from 'react'

class Services extends React.Component {
  render() {
    return (
      <div id={'servicesPage'}>

        <div className={"hero"} id={'hero-servicesPage'}>
          <h1>OUR SERVICES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius illum ipsum, itaque laboriosam magni
            natus quasi quisquam quos rerum similique sint ut, veritatis voluptas, voluptatem! Aut dolorem inventore
            ipsum?
          </p>
        </div>

        <section id={'workshops-servicesPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>WORKSHOPS</h2>
          <p>Practical: Bitcoin workshop 1 day</p>
          <p>Essentials: Bitcoin workshop 2 days</p>
          <p>In-depth: Bitcoin workshop 5 days</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>
        </section>

        <section id={'consultingForCompanies-servicesPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>CONSULTING & DEVELOPMENT FOR COMPANIES</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>
          <p>Custom Bitcoin development (layer 1, layer 2)</p>
          <ul>
            <li>Choose a technology for your need</li>
            <li>Bitcoin: architecture, custom development, complex transaction, scripts, …</li>
            <li>System architecture</li>
            <li>Node installation (Bitcoin, LN, BTCPay, Tor) / System administration</li>
            <li>Node as a service</li>
          </ul>
        </section>

        <section id={'consultingForIndividuals-servicesPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>PRIVATE CONSULTING & DEVELOPMENT FOR INDIVIDUALS</h2>
          <p>Custom Bitcoin development (layer 1, layer 2)</p>
          <p>Bitcoin server/node installation</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>
          <ul>
            <li>Privately or in group</li>
            <li>Learn wallet/key management best practices</li>
            <li>General help, 1 day training</li>
            <li>Recover coins of bitcoin forks</li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Services
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
          <div className="hr"><hr/></div>
          <h2>WORKSHOPS</h2>
          <p>
            We are offering three Bitcoin trainings.
            <b>Bitcoin Practical</b> on 1 day, <b>Bitcoin Essentials</b> on 2 days
            and <b>Bitcoin In-depth</b> on 5 days. Each of them is gradually more thorough.
            The workshops are taking place in the beautiful city of Lisbon, given by instructor Stéphane Roche.
            Prepare yourself for the financial revolution!
          </p>
        </section>

        <section id={'consultingForCompanies-servicesPage'}>
          <div className="hr"><hr/></div>
          <h2>IN-HOUSE TRAININGS</h2>
          <p>
            Bitcoin trainings can be given directly at your office, tailored to your specific needs.
          </p>

          <br/>

          <div className="hr"><hr/></div>
          <h2>SOFTWARE DEVELOPMENT</h2>
          <p>
            Bitcoin Studio reconcile Bitcoin with web development (mainly Typescript, React, Redux), offering custom software development on layer 1 and 2.
            System architecture, complex transaction, scripts, …
            Bitcoin Studio is also capable of helping you setting up a node (Bitcoin, LN, BTCPay, Tor bridge).
          </p>

          <br/>

          <div className="hr"><hr/></div>
          <h2>NODE AS A SERVICE</h2>
          <p>
            Partnering with the French company ADAPP, we host and manage all kind of nodes (full nodes, LN nodes, BTCpay).
            Thanks to our unique deployment stack we offer easy setup, safety and a production-ready infrastructure.
          </p>
        </section>

        <section id={'consultingForIndividuals-servicesPage'}>
          <div className="hr"><hr/></div>
          <h2>PRIVATE CONSULTING & DEVELOPMENT FOR INDIVIDUALS</h2>
          <p>
            Bitcoin Studio can answer your specific needs.
            Endeavors to recover lost coins, recover coins of Bitcoin forks.
          </p>
        </section>
      </div>
    )
  }
}

export default Services
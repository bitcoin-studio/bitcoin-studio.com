import * as React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'} className={'hero'}>
          <h1>BITCOIN STUDIO</h1>
          <p>
            Bitcoin company based in the beautiful city of Lisbon. We offer software development, workshops and in-house
            training, focusing on bitcoin technology and quality web development. Want to discover Bitcoin, or choose to
            integrate Bitcoin to your sales?
            Need to refresh your website with a new user interface, experimenting with the power of digital money?
            Bitcoin Studio, a network of experts from a variety of backgrounds and driven by the same ideals, is here
            for you.
          </p>
        </div>

        <section id={'pictures-homePage'}>
          <figure id={'picture1'}>
            <img src="assets/lisbon.jpg" alt="Lisbon"/>
          </figure>

          <figure id={'picture2'}>
            <img src="assets/btc_logo.png" alt="Bitcoin logo"/>
          </figure>
        </section>

        <section id={'services-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>THE BEST BITCOIN STUDIO</h2>
          <p>
            Fascinated by the idea and realisation of a digital, decentralized, open platform, open source,
            censorship-resistant money, we at Bitcoin Studio have a strong will to take part of this revolution.
            The company is led, and mainly composed, let's face it, by Stéphane Roche, blockchain developer (mainly
            Bitcoin and Ethereum). Depending on your needs, a team can be made.
          </p>

          <p>
            If you look around you, there is more and more individuals paying attention to this strange, untangible
            money. Many are laughing at it also! This is not a problem. We know why we are here. This technology is
            certainly the biggest revolution of our century and we want to be part of it.
          </p>
        </section>

        <section id={'servicesDetails-homePage'}>
          <div className={'serviceItem'}>
            <img src="assets/icons/software_512.png" alt="software development"/>
            <p>
              <span><em>Software development</em></span>
              Bitcoin Studio reconciles Bitcoin with web development (mainly Typescript, React, Redux), offering custom
              software development on layer 1 and 2.
              System architecture, complex transaction, scripts, …
            </p>
          </div>


          <div className={'serviceItem'}>
            {/*<img src="assets/icons/icons8-presentation-64.png" alt="workshops"/>*/}
            <img src="assets/icons/education_512.png" alt="workshops"/>
            <p>
              <span><em>Workshops</em></span>
              We are offering three Bitcoin trainings, Practical, Essentials and In-depth, each of them being gradually
              more thorough.
              They are taking place in the beautiful city of Lisbon, given by instructor Stéphane Roche.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/thought_512.png" alt="in-house training"/>
            <p>
              <span><em>In-house training</em></span>
              Bitcoin trainings can be given directly at your office, tailored to your specific needs.
              Prepare yourself for the financial revolution!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/consulting_512.png" alt="private consulting"/>
            <p>
              <span><em>Private consulting</em></span>
              Bitcoin Studio can respond to your specific needs.
              Key management best practices, endeavors to recover lost coins, recover coins from Bitcoin forks, etc.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/hosting_512.png" alt="node as a service"/>
            <p>
              <span><em>Full node</em></span>
              We can help you setting up Bitcoin full node, Lightning node and BTCPay server, on your single-board
              computer or hosted and managed by our partners in a safe and production-ready infrastructure.
            </p>
          </div>
        </section>

        <section id={'workshops-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>A NETWORK OF TALENTED PEOPLE</h2>
          <p>
            Finding the right people for the right job can be hard, especially where we have a shortage of manpower.
            But still, hiring the right people is crucial for the success of your business.
            After many years involved in the crypto space, Stéphane should know enough people to be able to constitute
            the perfect team for your project. People are living in France, Portugal and all over the world.
          </p>
          <p>
            Surely there are many awesome people with the desire to work in this delightful and refreshing field of
            Bitcoin and digital currencies. Don't hesitate to contact us if you are interested to join our network and
            motivated to lend your expertise, talents and creativity.
          </p>
        </section>


        <section id="call2action-homePage">
          <div id="call2action_ribbon">
            <h3>STOP BEING A FOLLOWER</h3>
            <p>Are you tired of the financial system? Let’s talk for real then.</p>
          </div>

          <div id="call2action_ribbon_prop" className="">
            <div className="ribbon_prop_1">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>

            <div className="ribbon_prop_2">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home
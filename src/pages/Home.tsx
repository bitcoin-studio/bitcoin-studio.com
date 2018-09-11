import * as React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'} className={'hero'}>
          <h1>BITCOIN STUDIO #1</h1>
          <p>
            Bitcoin company based in the beautiful city of Lisbon. We do software development, workshops and in-house
            trainings, focused on bitcoin technology and quality web development. Want to discover Bitcoin, or choose to
            integrate Bitcoin to your sales?
            Need to refresh your website with a new user interface, experimenting with the power of digital money?
            Bitcoin Studio, a network of experts from a variety of backgrounds and driven by the same ideals, is here
            for you.
          </p>
        </div>

        <section id={'pictures-homePage'}>
          <figure id={'picture1'}>
            <img src="https://loremflickr.com/760/380" alt="Tree frog"/>
          </figure>

          <figure id={'picture2'}>
            <img src="assets/bitcoin_logo.png" alt="Bitcoin logo"/>
          </figure>
        </section>

        <section id={'services-homePage'}>
          <div className="hr"><hr/></div>
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
              Bitcoin Studio reconcile Bitcoin with web development (mainly Typescript, React, Redux), offering custom
              software development on layer 1 and 2.
              System architecture, complex transaction, scripts, …
            </p>
          </div>


          <div className={'serviceItem'}>
            {/*<img src="assets/icons/icons8-presentation-64.png" alt="workshops"/>*/}
            <img src="assets/icons/education_512.png" alt="workshops"/>
            <p>
              <span><em>Workshops</em></span>
              We are offering three Bitcoin trainings, Practical, Essentials and In-depth, each of them is gradually
              more thorough.
              They are taking place in the beautiful city of Lisbon, given by instructor Stéphane Roche.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/thought_512.png" alt="in-house trainings"/>
            <p>
              <span><em>In-house trainings</em></span>
              Bitcoin trainings can be given directly at your office, tailored to your specific needs.
              Prepare yourself for the financial revolution!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/consulting_512.png" alt="private consulting"/>
            <p>
              <span><em>Private consulting</em></span>
              Bitcoin Studio can respond to your specific needs.
              Key management best practices, endeavors to recover lost coins, recover coins of Bitcoin forks, etc.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="assets/icons/hosting_512.png" alt="node as a service"/>
            <p>
              <span><em>Node as a Service</em></span>
              Partnering with the French company <a href="https://www.adapp.tech/" target={'_blank'}>ADAPP</a>, we host
              and manage all kind of nodes (full nodes, LN nodes,
              BTCpay).
              Our unique deployment stack allows for easy setup, safety and a production-ready infrastructure.
            </p>
          </div>
        </section>

        <section id={'workshops-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>A NETWORK OF TALENTED PEOPLE</h2>
          <p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi, deleniti dicta eos error eum fugit, officiis quaerat quas quibusdam provident?</span>
            <span>Alias culpa magni obcaecati tempore. Alias aspernatur incidunt nam quas reprehenderit ut voluptatum. Ab adipisci aut  magni modi molestias nam perferendis quibusdam tenetur, voluptatibus.</span>
            <span>Adipisci aliquam, animi beatae cum delectus deleniti dignissimos exercitationem fugit ipsam iure laborum  officia sint velit veniam. Cumque debitis eius est ipsam itaque iusto molestiae mollitia rem!</span>
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam at cumque esse ipsam
            itaque laboriosam laudantium molestias reiciendis rem sequi, similique sint, sit suscipit totam ullam,
            vitae?</p>
        </section>


        <section id="call2action-homePage">
          <div id="call2action_ribbon">
            <h1>STOP BEING A FOLLOWER</h1>
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
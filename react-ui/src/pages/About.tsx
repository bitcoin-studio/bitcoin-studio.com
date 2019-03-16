import * as React from 'react'

class About extends React.Component {
  render() {
    return (
      <div id={'aboutPage'}>
        <div className={'hero'} id={'hero-aboutPage'}>
          <h1>About</h1>
          <p>
            Geographically based in Lisbon, fiscally based in France, Bitcoin Studio is led by Stéphane Roche, Bitcoin
            developer, educator, consultant and convinced cypherpunk activist.
          </p>
        </div>

        <section id={'description-aboutPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>STEPHANE - CEO/CTO</h2>
          <img className={'about-profile-img'} src="assets/stephane_roche_profile.jpg" alt="stephane roche profile"/>
          <p className={'about-content'}>
            Stéphane starts working on Bitcoin in 2015 at the hardware wallet company Ledger. From 2016 to mid-2017 he
            is working on the Ethereum Platform. He has co-founded the french non-profit organization Asseth to promote
            Ethereum, now the biggest Ethereum non-profit
            across Europe and created the website <a href="http://asseth.fr" target={'_blank'}>asseth.fr</a>. To develop
            his skills, he undertook research work on the Dao1901 dapp, using Web3 and state of the art
            Javascript libraries, to later be involved in the making of the <a
            href="https://dether.io/" target={'_blank'}>Dether.io</a> smart contracts and Javascript tests.
          </p>

          <p>
            Since mid-2017, he is focusing uniquely on Bitcoin, building a solid expertise and now offering Bitcoin workshops and custom development.
            Coming from web development (and before that Archaeology, History and audiovisual archivist... yes it's a long story),
            Stéphane masters technologies like Typescript, Fusebox, React, Redux, Redux-sagas, etc.
            Over the years he gained a fair bit of experience on Bitcoin, blockchain technology, computer science, project management,
            and is capable of successfully bring your project to fruition in a timely manner.
          </p>
        </section>
      </div>
    )
  }
}

export default About
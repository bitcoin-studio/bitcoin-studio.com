import * as React from 'react'

class About extends React.Component {
  render() {
    return (
      <div id={'aboutPage'}>
        <div className={'hero'} id={'hero-aboutPage'}>
          <h1>About</h1>
          <p>
            Based in Lisbon, Portugal, Bitcoin Studio is led by Stéphane Roche, P2P decentralized consensus systems aka blockchain developer, and strong advocate of crypto-anarchy.
            The company also has a vast network of talented people in France, Portugal and all over the world.
          </p>
        </div>

        <section id={'description-aboutPage'}>
          <div className="hr"><hr/></div>
          <h2>STEPHANE - CEO/CTO</h2>
          <p>
            Stéphane starts working on Bitcoin in 2015 at the hardware wallet company Ledger. From 2016 to mid-2017 he is working on the Ethereum Platform. He has co-founded the french non-profit organization Asseth to promote Ethereum, now the biggest Ethereum non-profit
            across Europe and created the website <a href="http://asseth.fr" target={"_blank"}>asseth.fr</a>. Research work on the UI of dao1901, using Web3 and state of the art Javascript librairies (React, Redux, Redux-sagas). Heavily involved in the making of the <a
            href="https://dether.io/" target={"_blank"}>Dether.io</a> smart contracts and the Javascript tests.
          </p>

          <p>
            Since mid-2017, he is focusing on Bitcoin, building a solid expertise, and now offering Bitcoin Workshops (Practical, Essentials, In-depth) and custom development.
            At Bitcoin Studio we use the best web technologies (Typescript, Fusebox, React, Redux, Redux-sagas, ...) and the latest Bitcoin developments.
            Over the years he gained lot of experience on Bitcoin and blockchain technology.
          </p>

          <p>
            Contact us at <a href='ma&#105;lto&#58;rs&#116;&#101;&#37;70%&#54;8&#97;&#110;e&#64;&#37;70r&#111;t%&#54;Fn%6Dail&#46;%63om'>rs&#116;ephan&#101;&#64;proton&#109;&#97;il&#46;&#99;om</a>
          </p>

        </section>
      </div>
    )
  }
}

export default About
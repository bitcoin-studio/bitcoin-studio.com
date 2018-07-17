import * as React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="row">
        <div className={'col-xs-10 col-xs-offset-1'}>
          <h1>About</h1>
          <p>Over the past years, I have dedicated myself to P2P decentralized consensus systems, aka blockchain,
            (mainly Bitcoin and Ethereum) and became a strong advocate of crypto-anarchy.
            I highly appreciate working in a field at the crossroad of a multitude of varying disciplines, like computer
            science, economics, politics, game theory, cryptography, ...
            I founded D10e Consulting to offer blockchain technical trainings (Bitcoin, Ethereum and a variety of
            related topics) and application development on Bitcoin and Ethereum.
          </p>
          <p>
            <ul>
              <li>I start working on Bitcoin in 2015 at the Hardware wallet company Ledger.</li>
              <li>Worked on Ethereum in 2016 - mid-2017</li>
              <li>Co-found the french non-profit organization Asseth to pomote Ethereum. Now the biggest non-profit
                across Europe. Did several talks, and did the website asseth.fr
              </li>
              <li>Research work on the UI of dao1901, using Web3 and state of the art Javascript librairies (React,
                Redux, Redux-sagas)
              </li>
              <li>Dether.io. Heavily involved in the making of the smart contracts and Javascript tests</li>
              <li>Bitcoin Workshops (Practical, Essentials, In-depth)</li>
              <li>Bitcoin development</li>
            </ul>
          </p>
          <p>Contact form</p>
        </div>
      </div>
    )
  }
}

export default About
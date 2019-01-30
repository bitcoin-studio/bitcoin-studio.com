import * as React from 'react'
// @ts-ignore
const bitcoin_essentials = import('../assets/img/bitcoin_essentials.png')

interface IState {
  bitcoin_essentials?: string;
}

class Workshops extends React.Component<{}, IState> {

  constructor(props) {
    super(props)
    this.state = {
      bitcoin_essentials: ''
    }
  }

  async componentDidMount() {
    this.setState({
      bitcoin_essentials: await bitcoin_essentials.then()
    })
  }

  render() {
    return (
      <div id={'workshopPage'}>

        <div id={'hero-workshopPage'} className={'hero'}>
          <h1>BITCOIN WORKSHOPS</h1>

          <p>
            Do you wonder how Bitcoin and blockchain works and how to use it?
            Let’s explore the first, most mature, secure and decentralized blockchain that has given birth to a whole
            new industry!
            Bitcoin Studio offers you three different courses on Bitcoin depending on your needs (Practical, Essentials,
            In-depth).
          </p>
        </div>

        <section id={'section1-workshopPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>MASTER THE KING OF CRYPTO</h2>
          <p>
            If you plan to work anywhere in the blockchain industry, mastering Bitcoin is an essential skill. It is
            the first of its kind, which means the most attacked and therefore the most robust blockchain.
            Bitcoin Core developers are highly experienced, the ecosystem is big, has the biggest market
            capitalization, etc.
            More than 75% of the blockchains today are, directly or indirectly, software forks of Bitcoin.
          </p>
          <p>
            Bitcoin is also a great start because it has the simplest protocol design, with a non-Turing-complete
            smart-contract functionality. Finally, the new micropayment feature Lightning Network is bringing
            tremendous new business opportunities.
          </p>
        </section>


        <section id="workshopFlyer-workshopPage">
          <img src={this.state.bitcoin_essentials} alt="bitcoin essential flyer"/>

          <div id={'teaserWorkshop'}>
            <p>
              Buy 2 tickets for 3!<br/>
              15 participants max<br/>
              Satisfied or refunded!
            </p>
          </div>
        </section>

        <section id="offers-workshopPage">
          <section className={'practical-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2>Practical Bitcoin workshop 1 day</h2>

            <div>
              <h3>Price</h3>
              <p>100€ inc. VAT. Satisfied or refunded</p>
            </div>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>
                Focused on the practical use of Bitcoin, participants install a Bitcoin Core node on their machine and
                play with it, getting information from the blockchain, sending money, etc.
                The session alternate between practice and a bit of theory to better grasp the technology.
                We will cover all the most important things you need to know, how the Bitcoin blockchain works, wallets,
                the different types of transactions etc.
              </p>
              <p>
                After this course you will have a good understanding of the technology and capable of managing your
                bitcoins like a pro. Using Bitcoin Core from the command line will certainly give you the real feeling.
                After a day, chances are that you will never look at money the same way.
              </p>
            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>
                This workshop is a hands-on training accessible to everybody.
                Attendees don't need prior knowledge on Bitcoin, blockchain or computer science.
                Just bring your laptop and eventually an external hard drive.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                We start the workshop by setting the environment on each participant machine. The instructor provide the
                bitcoin testnet blockchain on external hard drives. Then the fun begins! We experience programmable
                money
                from the Bitcoin Core command line interface. When necessary we go back to the theory. All the teaching
                materials
                are on this website, <a href="resources">here</a>.
              </p>
              <p>
                The day generally end with an informal Q&A session where you will be able to ask any remaining question
                you have.
              </p>
            </div>
          </section>

          <section className={'essentials-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2>Essentials Bitcoin workshop 2 days</h2>

            <div>
              <h3>Price</h3>
              <p>369€ inc. VAT. Satisfied or refunded</p>
            </div>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>
                Exploring the technology more closely, this intermediary course will give you a solid basis to start
                your Bitcoin journey. The goal is really to deep dive into the Bitcoin protocol. We will explore how
                Bitcoin works in enough details, diving into several Bitcoin Improvement Proposals (the formal
                specifications) and looking into the broader ecosystem. You will learn all the specific concepts and
                vocabulary in use.
              </p>
              <p>
                We will mainly work with the Bitcoin Core software, and some other libraries depending on the need
                (btcdeb, bitcoinJS, etc).
              </p>

            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>This course should be accessible to anyone with a minimal computer science background.
                It is intended for all individuals wishing to deepen their knowledge of Bitcoin and
                blockchain technology, etc.</p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                Focusing on the essentials, this course will teach you the main technologies that compose Bitcoin
                (asymmetric cryptography, P2P networking, proof-of-work consensus and mining) and how everything is
                related
                to produce transaction strored in immutable blocks.
              </p>
              <p>
                We will illustrate the theory with practice using the Bitcoin Core software and some other libraries.
              </p>
            </div>
          </section>


          <section className={'indepth-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2>In-depth Bitcoin workshop 5 days</h2>

            <div>
              <h3>Price</h3>
              <p>
                500€ inc. VAT. Satisfied or refunded
              </p>
            </div>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>Here we will study the Bitcoin protocol in depth, including the layer 2 solution Lightning Network and
                the most recent developments. We will also have a look at various other aspects of Bitcoin like its
                historical context, the broader ecosystem, the socio-economic implications, the governance of open
                source decentralized systems, etc.
              </p>
              <p>
                Designed with an academic approach, this training will allow you to deeply understand Bitcoin and
                evaluate other blockchain protocols, providing you a solid basis to further work in this field.
              </p>

              <input className="toggle-box" id="goalsInDepthToggle" type="checkbox"/>
              <label htmlFor="goalsInDepthToggle">Read More</label>

              <div id="expandCollapsible">
                <p>
                  Together we will explore every aspects of Bitcoin.
                  We will learn how to construct regular and advanced transactions, P2SH/P2WSH smart contracts,
                  multi-signatures, timelocks, etc.
                </p>

                <p>
                  After this course, you’ll know everything you need to be able to separate fact from fiction when
                  reading claims about Bitcoin and other cryptocurrencies. You’ll have the conceptual foundations you
                  need in order to develop on top of Bitcoin or any blockchain.
                </p>
              </div>
            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>
                This course has been designed for individuals that need a deep-dive into the Bitcoin protocol and are
                not afraid of technicalities. It is suited to professional that work or want to work in the bitcoin or
                blockchain space, or to people with a strong desire to learn Bitcoin seriously.
                Bitcoin In-depth is primarily intended for developers that already master the basics of blockchain.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                This five days training has been thought to be the most comprehensive as possible.
                Starting with some general background, we will talk about the Cypherpunk movement, cryptography,
                followed by some Bitcoin background (project history, block size debate, main Core developers,
                governance model, ...).
              </p>
              <p>
                We will then study extensively all the different technologies that compose Bitcoin, naming the P2P
                network, mining, consensus, forks, wallets, keys, addresses, the different types of transactions,
                advanced scripting, layer two scaling solution Lightning Network, atomic swaps, privacy solutions, etc.
                We will alternate between lecture and code.
              </p>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default Workshops
import * as React from 'react'
import {FormWorkshop} from '../components/FormWorkshop'
// @ts-ignore
import bitcoin_essentials from '../img/bitcoin_essentials.png'

class WorkshopPreRegistration extends React.Component {
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
          <img src={bitcoin_essentials} alt="bitcoin essential flyer"/>

          <div id={'teaserWorkshop'}>
            <p>
              Got 3 tickets for 2 bought! <br/>
              First session @ 10 people <br/>
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
                Focused on the practical use of Bitcoin, after this course you will be able to understand the basics of
                the technology and manage your bitcoins like a pro. We will cover all the most important things to know,
                how the Bitcoin blockchain works, how Bitcoin wallets works, the different types of transactions, the
                broader ecosystem like exchanges and main companies, etc.
              </p>
              <p>
                If there is enough interest we will transact bitcoin in Javascript using the Bitcoin.js library in order
                to get the real feeling of how powerful is this technology.
                You will also learn where to search for relevant sources of information and you will be able to ask for
                any remaining questions. After a day chances are that you will never look at money the same way.
              </p>
            </div>

            <div>
              <h3>Public and Prerequisite</h3>
              <p>This workshop is a first hands-on Bitcoin. Accessible by everyone</p>
            </div>

            <div>
              <h3>Programme</h3>
              <p>Wallet, key management, transaction, fees, Lightning Network instant payment. Q&A</p>
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
                your Bitcoin journey. Without going too technical, the goal is really to learn the different protocols
                that compose the Bitcoin blockchain. We will review the basics of how Bitcoin works in enough details,
                diving into several Bitcoin Improvement Proposals (the formal specifications) and looking into the
                broader ecosystem.
                You will learn all the specific concepts and vocabulary in use.
              </p>
              <p>
                Same as with the Practical course, if there is enough interest we will transact bitcoin in Javascript
                using the Bitcoin.js library because this exercise is a very good way to really grasp the beauty of this
                technology.
              </p>

            </div>

            <div>
              <h3>Public and Prerequisite</h3>
              <p>This workshop is intended to curious people wanting to better understand Bitcoin and blockchain
                technology. This workshop is technical but should stay accessible as long as you have a basic
                understanding of
                computer science. It is intended to all individuals wishing to deepen their knowledge of Bitcoin and
                blockchain
                technology, either you are a developer, product manager, attorney, designer, builder, entrepreneur,
                etc.</p>
            </div>

            <div>
              <h3>Programme</h3>
              <p>Focus on the essentials</p>
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
              <p>After an introduction to cryptography and Elliptic Curves in particular we will study the Bitcoin protocols quite in-depth, including the layer 2 Lightning Network.
                We will also have a look at various other aspects like its historical context, the broader ecosystem, the socio-economic
                implications, the governance of open source decentralized systems, etc.
              </p>
              <p>
                Designed with an academic approach, we will alternate between theory and code practice (command line,
                Javascript). This training will allow you to deeply understand and evaluate
                blockchain protocols and will provide you a solid basis to work on Bitcoin or on any blockchain.
              </p>

              <input className="toggle-box" id="goalsInDepthToggle" type="checkbox"/>
              <label htmlFor="goalsInDepthToggle">Read More</label>

              <div id="expandCollapsible">
                <p>Together we will explore the scripting language and Lightning Network.
                  Focusing on the new Segregated Witness transaction format, we will learn how to
                  construct regular transactions, P2WSH smart contracts, multi-signatures and timelock transactions;
                  composing raw transactions using Javascript libraries.
                </p>

                <p>
                  After this course, you’ll know everything you need to be able to separate fact from fiction when
                  reading claims about Bitcoin and other cryptocurrencies. You’ll have the conceptual foundations you
                  need in order to develop on top of Bitcoin or any blockchain.
                </p>
              </div>
            </div>

            <div>
              <h3>Public and Prerequisite</h3>
              <p>
                This course is intended to individuals that needs a deep-dive into Bitcoin protocols. Ideal if you
                already have a project, a business idea, or simply the strong desire to learn Bitcoin seriously.
                Bitcoin In-depth is primarily intended to developers.
                Attendees are expected to master the basics of blockchain, otherwise it is recommended to take the
                Bitcoin Essentials course before.
              </p>
            </div>

            <div>
              <h3>Programme</h3>
              <ul>
                General background
                <li>Emergence of cryptography</li>
                <li>The Cypherpunks movement</li>
                <li>Internet</li>
                <li>Blockchain ecosystem</li>
              </ul>

              <ul>
                Bitcoin background
                <li>Project history</li>
                <li>Block size debate</li>
                <li>Main Core developers</li>
                <li>Ecosystem</li>
                <li>Governance model</li>
              </ul>

              <ul>
                Cryptography 101
                <li>General cryptography concepts</li>
                <li>Symmetrical and asymmetrical encryption</li>
                <li>Digital signatures</li>
                <li>Hash functions</li>
                <li>Merkle trees, …</li>
              </ul>

              <ul>
                P2P network
                <li>Topology</li>
                <li>Different types of node</li>
              </ul>

              <ul>
                Mining, consensus and forks
                <li>Proof of Work</li>
                <li>Blockchain mechanisms</li>
              </ul>

              <ul>
                Wallets, keys and addresses
                <li>Elliptic curve digital signature algorithm (ECDSA)</li>
                <li>Bitcoin address</li>
                <li>HD wallets</li>
                <li>Mnemonic backup</li>
              </ul>

              <ul>
                Transactions
                <li>Structure (input, output, witness)</li>
                <li>Signing and verification</li>
                <li>Different types (regular, smart contracts)</li>
                <li>Different versions (legacy, Segwit nested in legacy, native Segwit)</li>
                <li>Data recording output (colored coins)</li>
              </ul>

              <ul>
                Advanced scripting and transactions
                <li>Main language opcodes</li>
                <li>P2WSH smart contracts</li>
                <li>Multi-signatures</li>
                <li>Timelocks</li>
                <li>Payment channels (Lightning Network)</li>
              </ul>
            </div>
          </section>
        </section>

        {/*
        <section className={'formPreRegistration-workshopPage'}>
          <h3>Form. BTCpay server / fiat</h3>
          <FormWorkshop/>
        </section>
        */}
      </div>
    )
  }
}

export default WorkshopPreRegistration
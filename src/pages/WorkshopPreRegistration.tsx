import * as React from 'react'
import {FormWorkshop} from '../components/FormWorkshop'
import bitcoin_essentials from '../img/bitcoin_essentials.png'

class WorkshopPreRegistration extends React.Component {
  render() {
    return (
      <div id={'workshopPage'}>

        <div id={'hero-workshopPage'} className={"hero"}>
          <h1>WORKSHOP <br/> PRE-REGISTRATION</h1>

          <p>Interested in Bitcoin and blockchain? Do you wonder how it works?
            Let’s study the first, most mature, secure and decentralized blockchain that has given birth to a whole
            new
            industry!
            Stéphane Roche/D10eConsulting offer you a 15 hours immersive course on Bitcoin (Practical, Essentials,
            In-depth)
          </p>

          <p> If you plan to work anywhere in the blockchain industry, mastering Bitcoin is an essential skill. It is
            the first of its kind, which means the most attacked and therefore the most robust blockchain.
            Main Bitcoin Core developers are highly experienced, the ecosystem is big, it has the biggest market
            capitalization, etc.
            More than 75% of the blockchains today are, directly or indirectly, software forks of Bitcoin (Litecoin,
            Dash, Zcash,
            Decred, Komodo, Factom, Particl, Dogecoin, and thousands of others).
            Working in the field but skipping Bitcoin is in our view irresponsible.

            Bitcoin is also a great start because it has the simplest protocol design, with a non-Turing-complete
            smart-contract functionality. Finally, Lightning Network, the new micropayment feature, should bring
            tremendous new business opportunities.</p>

          <p>25% off</p>
          <p>Sign Up!</p>
          <p>3 tickets for 2</p>
          <p>First session: 10 people</p>
          <p>Get refunded at any time</p>
        </div>

        <img id="workshopFlyer-workshopPage" src={bitcoin_essentials} alt="bitcoin essential flyer"/>


        <section id="offers-workshopPage">

          <section className={'practical-offer-workshopPage'}>
            <div className="hr40pc"><hr/></div>
            <h2>Practical: Bitcoin workshop 1 day</h2>
            <h3>Price</h3>
            <p>100€ inc. VAT. Satisfied or refunded</p>
            <h3>Goals</h3>
            <p>
              Focused on practical use of Bitcoin. Important things to know. Knowing where to search
            </p>
            <h3>Public and Prerequisite</h3>
            <p>This workshop is a first hands-on Bitcoin. Accessible by everyone</p>
            <h3>Programme</h3>
            <p>Wallet, key management, transaction, fees, Lightning Network instant payment. Q&A</p>
          </section>

          <section className={'essentials-offer-workshopPage'}>
            <div className="hr40pc"><hr/></div>
            <h2>Essentials: Bitcoin workshop 2 days</h2>

            <h3>Price</h3>
            <p>369€ inc. VAT. Satisfied or refunded</p>

            <h3>Goals</h3>
            <p>Starts your Bitcoin journey on solid basis</p>

            <h3>Public and Prerequisite</h3>
            <p>This workshop is intended to curious people wanting to better understand Bitcoin and blockchain
              technology. This workshop is technical but should stay accessible as long as you have a basic
              understanding of
              computer science. It is intended to all individuals wishing to deepen their knowledge of Bitcoin and
              blockchain
              technology, either you are a developer, product manager, attorney, designer, builder, entrepreneur,
              etc.</p>
            <h3>Programme</h3>
            <p>Focus on the essentials</p>
          </section>


          <section className={'indepth-offer-workshopPage'}>
            <div className="hr40pc"><hr/></div>
            <h2>In-depth: Bitcoin workshop 5 days</h2>
            <h3>Price</h3>
            <p>
              500€ inc. VAT. Satisfied or refunded
            </p>

            <h3>Goals</h3>
            <p>In this course we will study the Bitcoin protocol quite in-depth and various other aspects like its
              historical context, the broader ecosystem, the socio-economic
              implications, the governance of open source decentralized systems, etc. You will also learn all the
              specific concepts and vocabulary used in this technology.
              Designed with an academic approach, we will alternate between theory and code practice (command line,
              Javascript, Python).
              This training will allow you to deeply understand and evaluate
              blockchain protocols and will provide you a solid basis to work on Bitcoin or on any blockchain.
            </p>

            <p>Bitcoin In-depth is primarily intended to developers. Together we will explore the scripting language and
              Lightning Network. Focusing on the new Segregated Witness transaction format, we will learn how to
              construct regular transactions, P2WSH smart contracts, multi-signatures and timelock transactions;
              composing raw transactions and using Javascript libraries.
              Attendees are expected to master the main aspects of Bitcoin, otherwise it is recommended to take the
              Bitcoin Essentials course before. Also, in order to make sure that this course suits you well, you will
              have a small interview with our team.
            </p>

            <p>
              After this course, you’ll know everything you need to be able to separate fact from fiction when reading
              claims about Bitcoin and other cryptocurrencies. You’ll have the conceptual foundations you need, and
              you’ll be able to integrate ideas from Bitcoin in your own projects.
            </p>

            <h3>Public and Prerequisite</h3>
            <p>This course is intended to individuals that needs a deep-dive into Bitcoin protocols. Ideal if you
              already have a project, a business idea, or simply the strong desire to learn Bitcoin seriously.</p>

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
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
          </p>
        </div>

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

        <section id={'masterTheKing-workshopPage'}>
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

        <section id="offers-workshopPage">
          <section className={'intro-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>Introduction To Bitcoin</h2>
            <h3 className={'offers-h3'}>1 day workshop</h3>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>
                The goal of this one day workshop is to get familiar with the technology, little by little  over the course of the day, without being too technical.
              </p>
            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>
                This training is accessible to everybody. Attendees don't need prior knowledge of Bitcoin, blockchain or computer science.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                It will presented the main concepts you need to know to understand Bitcoin (transactions, mining, wallet, etc).
                You will learn how to set up a wallet, how to create a secure backup, the best practices and how to be prepared for the worst (attacks, death).
              </p>
              <p>
                We will experiment with the technology by receiving and sending money using different wallets, on-chain
                and off-chain (Lightning Network), on a simulation network and on the real network (games, stores).
                Then it will be shown how to use the blockchain to notarized document (timestamping and signing).
              </p>
              <p>
                To raise your curiosity, the instructor will demo what we can do with the command line integrated to the Bitcoin Core software.
              </p>
            </div>
          </section>

          <section className={'programming-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>Bitcoin Programming with Bitcoin Core and BitcoinJS</h2>
            <h3 className={'offers-h3'}>1 day workshop</h3>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>
                The goal of this training is to explore the Bitcoin protocol and learn how to craft different kind of
                transactions and smart contracts, using Bitcoin Core RPC commands and the BitcoinJS library.
              </p>

            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>
                This training is technical and only accessible to people comfortable with computers, Javascript (simple
                code) and command line. It is recommended to already have some understanding of Bitcoin and to follow
                the course Introduction To Bitcoin if it’s not the case.
              </p>
              <p>
                We will type some Bash commands in a terminal and Javascript commands in a Node.js console. You will need
                to have Bitcoin Core, Node.js, JQ and a code editor installed on your machine. We will work on Regtest,
                a local blockchain, so you don't need to download the Testnet blockchain.
              </p>
              <p>
                If you are not able to set up this environement you can download an Ubuntu 18.10 Virtual Machine image
                with all the softwares included.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                Participants will install the Bitcoin Core software on their machine and perform different kind of
                transactions by hand using Bitcoin RPC commands and Javascript.
              </p>
              <p>
                We will create P2PKH transactions, used to send bitcoins to someone; data anchoring using a special type
                of transaction with OP_RETURN; P2SH, which consists of locking bitcoins to a custom smart contract
                (puzzles, timelocks, hashlocks, multi-signatures).
              </p>
              <p>
                You will learn how Bitcoin transaction works internally, how to read a raw transaction, what we can do
                with Bitcoin scripts and all kinds of useful Bitcoin Core commands. We will not spend too much time on
                the new Segwit transaction format as it is more advanced and not essential to understand how Bitcoin works.
              </p>
            </div>
          </section>

        </section>
      </div>
    )
  }
}

export default Workshops
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
                The goal of this one day workshop is to help you gradually become familiar with the Bitcoin technology.
                You will benefit from the vast experience of the instructor, learn how to securely store your bitcoins and how
                to use it with confidence.
                While being the least technical as possible, you will still have to understand a few simple technical concepts.
              </p>
            </div>

            <div className={'public-workshopPage'}>
              <h3>Public and Prerequisite</h3>
              <p>
                This training is accessible to everybody. Attendees don't need prior knowledge of Bitcoin, blockchain or
                computer science. To follow along, it is much better if you can bring a laptop, where we will install at least one Bitcoin
                wallet. We may also install a mobile wallet.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                First of all, it will presented to you the main concepts you need to know to understand Bitcoin, namely
                transactions, mining and wallet. We will take time to explain each of this topic separately, and at the
                end you will be able to understand how they relate to each other and to get the bigger picture.
              </p>
              <p>
                We will set up a real Bitcoin wallet, which will be the occasion to teach you how to securely store digital
                assets. You will learn, not simply how to create a secure backup and the best practices, but really how to be
                prepared for the worst, namely attacks and death.
              </p>
              <p>
                Then we will experiment with the technology by sending and receiving money, using different wallets, on-chain
                and off-chain (Lightning Network), on a simulation network and on the real network (games, stores).
                We will also use the blockchain to notarized a document (timestamping and signing).
                You will learn how to examine a transaction in a blockchain explorer, and this will also be the occasion
                to raise awareness about privacy in Bitcoin.
              </p>
              <p>
                Lastly, mainly to raise your curiosity, the instructor will demo what you can do from the command line console
                integrated in the Bitcoin Core software.
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
                code) and command line. It is recommended to already have some understanding of Bitcoin, starting with the
                Introduction To Bitcoin course otherwise.
              </p>
              <p>
                We will type Bash commands in a terminal and Javascript commands in a Node.js console. You will need
                to have Bitcoin Core, Node.js, jq and a code editor installed on your machine.
                If you are not able or don't want to set up this environment on your machine you can download the <a
                href="https://keybase.pub/janakasteph/ubuntu-18.10-desktop-amd64-virtualbox-iso/" target={'_blank'}>Ubuntu
                Virtual Machine image</a> that we provide, which includes all the required softwares.
                Also note that we will work in Regtest mode, which allows a fake blockchain local to the machine, so that we don't
                need to download any blockchain data.
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>Programme</h3>
              <p>
                To begin, we will focus on Bitcoin Core and its API. Participants will install the software on their machine
                (or use the provided virtual machine), determine how to interact with a Bitcoin node and how to perform
                different kind of transactions. Starting with the simplest commands we will gradually explore how to create
                more complex transactions by hand, and by doing so learning a lot about Bitcoin.
              </p>
              <p>
                In a second time we will work with the BitcoinJS library to compose a variety of transactions in Javascript.
                We will create P2PKH transactions, used to send bitcoins to someone; data anchoring using a special type
                of transaction with OP_RETURN; P2SH, which consists of locking bitcoins to a custom smart contract. We will
                spend some time investigating how the Bitcoin scripting language works and the different building blocks that allows
                us to construct a variety of smart contracts like puzzles, timelocks, hashlocks and multi-signatures.
              </p>
              <p>
                At the end of this day, you will understand how Bitcoin transaction works internally, how to read a raw transaction,
                how to interact with a node, getting various information from it and sending transactions. You will also discover
                the Bitcoin scripting language and what is possible to do with Bitcoin smart contracts.
              </p>
              <p>
                Finally, note that we will not spend too much time on the new Segwit transaction format as it already requires to master
                Bitcoin programming and is in any way essential to understand Bitcoin.
              </p>
            </div>
          </section>

          <section className={'programming-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>Introduction to Lightning Network (coming soon)</h2>
            <h3 className={'offers-h3'}>1 day workshop</h3>

            <div className={'goals-workshopPage'}>
              <h3>Goals</h3>
              <p>
                The goal of this training is to explore the Lightning Network protocol and learn how to program with it.
              </p>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default Workshops
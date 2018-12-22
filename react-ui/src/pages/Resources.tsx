import * as React from 'react'

class Resources extends React.Component {
  render() {
    return (
      <div id="resourcesPage">
        <div className={'hero'} id={'hero-resourcesPage'}>
          <h1>Resources</h1>
          <p>
            At Bitcoin Studio we are dedicated to move the Bitcoin tech community forward. This is why we put at your
            disposal various free educational works.
            The presentations made by Stéphane Roche are exploring numerous aspects of the Bitcoin protocol like
            cryptographic keys, HD wallet, consensus, mining, forks, transactions (legacy and Segwit format), etc.
          </p>
        </div>


        <section id={'resourcesPage-BitcoinJSGuide'}>
          <div className="hr"><hr/></div>
          <h2>Bitcoin Programming with BitcoinJS</h2>
          <p>
            If you are interested learning Bitcoin programming with Javascript, you should definitely check out the 
            open-source guide we wrote on BitcoinJS. We present how to do all the various types of transaction, and is
            sufficiently detailed to be accessible to new developers. <br/>
            <a href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS" target={"_blank"}>➱ Bitcoin Programming with BitcoinJS</a>
          </p>
        </section>


        <section id={'slides-resourcesPage'}>
          <div className="hr"><hr/></div>
          <h2>BITCOIN TRAININGS SLIDES</h2>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Bitcoin_forks_history_S_Roche.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/Bitcoin_forks_history_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Mining_consensus_forks_S_Roche.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Mining_consensus_forks_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Bitcoin_transaction_S_Roche.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Bitcoin_transaction_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'}
                      data="workshopSlides/Bitcoin_script_S_Roche.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/Bitcoin_script_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <button>
              <a>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>
        </section>
      </div>
    )
  }
}

export default Resources
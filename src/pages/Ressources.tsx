import * as React from 'react'

class Ressources extends React.Component {
  render() {
    return (
      <div id="ressourcesPage">
        <div className={'hero'} id={'hero-ressourcesPage'}>
          <h1>Ressources</h1>
          <p>
            Have a look at our work. You can view and download some of the Bitcoin presentations made by Stéphane Roche, exploring a variety of aspects like cryptographic keys, HD wallet, consensus, mining, forks, transactions (legacy and segwit format), ...
            More soon!
          </p>
        </div>

        <div id="hr-slides-ressourcesPage">
          <div className="hr">
            <hr/>
          </div>
        </div>

        <section id={'slides-ressourcesPage'}>
          <h2>BITCOIN TRAININGS SLIDES</h2>

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
                      data="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf" download>DOWNLOAD</a>
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
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf" download>DOWNLOAD</a>
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

          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <button>
              <a>DOWNLOAD</a>
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default Ressources
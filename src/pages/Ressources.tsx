import * as React from 'react'

class Ressources extends React.Component {
  render() {
    return (
      <div id="ressourcesPage">
        <div className={'hero'} id={'hero-ressourcesPage'}>
          <h1>Ressources</h1>
          <p>Workshop slides - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur delectus
            doloremque eos mollitia, nihil sint velit. Aspernatur fuga iste labore perferendis quasi rem! A delectus
            enim ipsum modi quam.</p>
          <p>Keys, wallet, addresses, Consensus, mining, forks, All about transactions (legacy and segwit format)</p>
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
                      data="workshopSlides/Bitcoin_forks_history.pdf"></object>
            </div>
            <button>
              <a href="workshopSlides/Bitcoin_forks_history.pdf" download>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Bitcoin_keys_addresses_wallets.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Bitcoin_keys_addresses_wallets.pdf" download>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Mining-Consensus-Forks.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Mining-Consensus-Forks.pdf" download>DOWNLOAD</a>
            </button>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Next_challenges_of_Bitcoin.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Next_challenges_of_Bitcoin.pdf" download>DOWNLOAD</a>
            </button>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type="application/pdf"
                      data="workshopSlides/Bitcoin_transaction.pdf"></object>
            </div>
            <button>
            <a href="workshopSlides/Bitcoin_transaction.pdf" download>DOWNLOAD</a>
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default Ressources
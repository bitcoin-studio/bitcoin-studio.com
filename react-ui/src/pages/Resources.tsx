import * as React from 'react'
import { withNamespaces, Trans } from 'react-i18next'

interface IProps {
  t: ((string) => string)
}
interface IState {}

class Resources extends React.Component<IProps, IState> {
  render() {
    const {t} = this.props
    return (
      <div id="resourcesPage">
        <div className={'hero'} id={'hero-resourcesPage'}>
          <h1>{t('title')}</h1>
          <p>{t('hero')}</p>
        </div>

        <section id={'projects-resourcesPage'}>
          <div className="hr"><hr/></div>
          <h2>{t('projects.bitcoinJS.title')}</h2>
          <p>
            <Trans i18nKey={"projects.bitcoinJS.p1"}>
              FAKE TEXT BLA BLA If you are interested in learning Bitcoin programming using Javascript, you should definitely check out the
              open-source guide we wrote on BitcoinJS. We present how to perform all of the various types of transaction. This guide is
              sufficiently detailed to be accessible to new developers. <br/>
              <a href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS" target={"_blank"}>➱ Bitcoin Programming with BitcoinJS</a>
            </Trans>
          </p>

          <h2 className={'mt35'}>{t('projects.bitcoin-vm.title')}</h2>
          <p>
            <Trans i18nKey={"projects.bitcoin-vm.p1"}>
              FAKE TEXT BLA BLA This tool is made of three technologies, Packer, Vagrant and Ansible, allowing us to generate an Ubuntu
              18.10 VirtualBox image and a Vagrant box packaged with softwares for Bitcoin / Lightning Network.
              You can find Bitcoin Core, LND, c-lightning, Electrum, the BitcoinJS guide above, etc. <br/>
              The image is ideal for Bitcoin workshops, hackathons, etc. <br/>
              <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={"_blank"}>➱ Vagrant box</a><br/>
              <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine" target={"_blank"}>➱ VirtualBox image</a><br/>
              <a href="https://github.com/bitcoin-studio/Bitcoin-VirtualMachine" target={"_blank"}>➱ Github Repository</a>
            </Trans>
          </p>

          <h2 className={'mt35'}>{t('projects.mnemonic.title')}</h2>
          <p>
            <Trans i18nKey={"projects.mnemonic.p1"}>
              FAKE TEXT BLA BLA A handy template to write down your mnemonic code (24 words back up). The idea behind it is to have a document that gathers
              all the necessary information you need to be able to recover coins.
              In particular, it prompts the user to fill in the derivation path, assuming the user knows or will search for it.
              Having the right mnemonic code, but missing the derivation path does not permit coin recovery might make it very difficult to recover coins.
              Finally, this template got its inspiration from the reading of Pamela Morgan <a href="https://empoweredlaw.com/books/" target={"_blank"}>Cryptoasset Inheritance Planning</a> book.
              Bitcoin owners should make sure that the funds are redeemable by their heirs in the eventuality of their death.
              <br/>
              <a href="assets/bitcoin_mnemonic_code_template.pdf" download>➱ Bitcoin Mnemonic Code Template</a>
            </Trans>
          </p>
        </section>

        <section id={'slides-resourcesPage'}>
          <div className="hr"><hr/></div>
          <h2>{t('slides.title')}</h2>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Technical_Intro_Bitcoin_S_Roche_LQ.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Technical_Intro_Bitcoin_S_Roche_LQ.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/TheBeginningOfYourBlockchainJourney_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_forks_history_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_forks_history_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Bitcoin_keys_addresses_wallets_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Mining_consensus_forks_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Mining_consensus_forks_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>


          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_transaction_S_Roche_LQ.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Bitcoin_transaction_S_Roche_LQ.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_Script_Stephane_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_Script_Stephane_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Next_challenges_of_Bitcoin_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Cryptographic_tools_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Cryptographic_tools_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <div className="slideButton">
              <a>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <div className="slideButton">
              <a>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2 fakeItemContainer'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem fakeItem'}
                      data="workshopSlides/slide_fake.png"></object>
            </div>
            <div className="slideButton">
              <a>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <div className={'slideItemContainer2 extraItem'}>
          </div>

          <p className={"slidesDesc"}>
            <Trans i18nKey={"slides.slidesDesc"}>
              You can download all the presentations <a href="workshopSlides/Bitcoin_Training_S_Roche.zip" download>here</a>.
            </Trans>
          </p>
        </section>
      </div>
    )
  }
}

export default  withNamespaces('Resources')(Resources)
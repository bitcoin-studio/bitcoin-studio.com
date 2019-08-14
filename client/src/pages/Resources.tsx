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

          <h2 className={'mt35'}>{t('projects.utxo.title')}</h2>
          <p>
            <Trans i18nKey={"projects.utxo.p1"}>
              FAKE TEXT BLA BLA
              <br/>
              <a href="assets/transactions_utxo_model.pdf" download>➱ Bitcoin Transactions Templates</a>
            </Trans>
          </p>

          <h2 className={'mt35'}>{t('projects.nespressoLN.title')}</h2>
          <div id={'nespressoLightningDesc'}>
            <p>
              <Trans i18nKey={"projects.nespressoLN.p1"}>
                FAKE TEXT BLA BLA
                <a href="https://www.elecrow.com/wiki/index.php?title=ESP8266_IOT_Board(Arduino_IDE_or_NodeMCU_Lua_Programming)" target={"_blank"}>ESP8266 --</a>
                FAKE TEXT BLA BLA
                <a href="http://theblock.cafe/" target={"_blank"}>The Block --</a>
                FAKE TEXT BLA BLA
                <br/>
                FAKE TEXT BLA BLA
                <br/>
                <a href="https://coffee.bitcoin-studio.com" target={"_blank"}>➱ The custom user interface</a><br/>
                <a href="https://github.com/bitcoin-studio/LightningNespressoUI" target={"_blank"}>➱ The custom user interface code</a><br/>
                <a href="https://github.com/bitcoin-studio/LightningNespressoServer" target={"_blank"}>➱ The code that runs on the board</a><br/>
                <a href="https://www.thingiverse.com/thing:3772726" target={"_blank"}>➱ CAD Files on Thingiverse</a><br/>
                <a href="https://www.yoctopuce.com/EN/article/an-automatic-nespresso-capsule-dispenser" target={"_blank"}>➱ More info about the original machine</a>
              </Trans>
            </p>
            <img src="assets/NespressoLightning_1.jpg" alt="Nespresso Lightning Vending Machine"/>
          </div>
        </section>

        <section id={'slides-resourcesPage'}>
          <div className="hr"><hr/></div>
          <h2>{t('slides.title')}</h2>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Technical_Intro_Bitcoin_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Technical_Intro_Bitcoin_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Beginning_Of_Your_Blockchain_Journey_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Beginning_Of_Your_Blockchain_Journey_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_Forks_History_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_Forks_History_S_Roche.pdf" download>{t('slides.download')}</a>
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
                      data="workshopSlides/Bitcoin_Transaction_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
            <a href="workshopSlides/Bitcoin_Transaction_S_Roche.pdf" download>{t('slides.download')}</a>
            </div>
          </div>

          <div className={'slideItemContainer2'}>
            <div className={'slideItemContainer'}>
              <object className={'slideItem'} type={'application/pdf'}
                      data="workshopSlides/Bitcoin_Script_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Bitcoin_Script_S_Roche.pdf" download>{t('slides.download')}</a>
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
                      data="workshopSlides/Cryptographic_Tools_S_Roche.pdf"></object>
            </div>
            <div className="slideButton">
              <a href="workshopSlides/Cryptographic_Tools_S_Roche.pdf" download>{t('slides.download')}</a>
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
              You can download all the presentations <a href="workshopSlides/Bitcoin_Slides_S_Roche.zip" download>here</a> or
              consult them on <a href="https://www.slideshare.net/bitcoin-studio" target={"_blank"}>SlideShare</a>.
            </Trans>
          </p>
        </section>
      </div>
    )
  }
}

// @ts-ignore
export default  withNamespaces('Resources')(Resources)
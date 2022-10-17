import React from 'react'
import {Trans, useTranslation} from 'react-i18next'
// Video
import {Helmet} from 'react-helmet'
import VendingMachineVideo from '../assets/videos/bitcoin_nespresso_vending_machine.mp4'
import VendingMachineThumbnail from '../assets/videos/bitcoin_nespresso_vending_machine_thumbnail.jpg'
// Slide covers
import techIntro from '../assets/education/technical_intro_bitcoin_bitcoin-studio.jpg'
import blockchainJourney from '../assets/education/blockchain_journey_bitcoin-studio.jpg'
import forks from '../assets/education/forks_history_bitcoin-studio.jpg'
import keys from '../assets/education/keys_addresses_wallets_bitcoin-studio.jpg'
import mining from '../assets/education/mining_consensus_forks_bitcoin-studio.jpg'
import transaction from '../assets/education/bitcoin_transaction_bitcoin-studio.jpg'
import script from '../assets/education/bitcoin_script_bitcoin-studio.jpg'
import challenges from '../assets/education/next_challenges_bitcoin-studio.jpg'
import cryptoTools from '../assets/education/cryptographic_tools_bitcoin-studio.jpg'
import dataAnchoring from '../assets/education/data_anchoring_bitcoin-studio.jpg'
import fake from '../assets/education/slide_fake.jpg'

export const Resources: React.FC = () => {
  const {t, i18n} = useTranslation(['Resources', 'Meta'])

  return (
    <>
      <Helmet>
        <title>{t('Meta:title.resources')}</title>
        <meta name="description" content={t('Meta:description.resources')}/>
        {i18n.language === 'fr'
          ? <link rel="canonical" href="https://www.bitcoin-studio.com/fr/ressources"/>
          : <link rel="canonical" href="https://www.bitcoin-studio.com/resources"/>}
      </Helmet>
      <div className="page page--xs" id="resourcesPage">
        <div className="hero">
          <h1>{t('title')}</h1>
          <p>{t('hero')}</p>
        </div>

        <section id="projects">
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('projects.bitcoinJS.title')}</h2>
          <p>
            <Trans i18nKey="projects.bitcoinJS.p1" t={t}>
              0
              <br/>
              <a
                href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ xxx
              </a>
              <br/>
              <a
                href="https://bitcoinjs-guide.bitcoin-studio.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ xxx
              </a>
            </Trans>
          </p>

          <h2 className="mt55">{t('projects.bitcointestwallets.title')}</h2>
          <p>
            <Trans i18nKey="projects.bitcointestwallets.p1" t={t}>
              0
              <br/>
              <a
                href="https://github.com/bitcoin-studio/Bitcoin-Test-Wallets-Generator"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ xxx
              </a>
            </Trans>
          </p>

          <h2 className="mt55">{t('projects.bitcoin-vm.title')}</h2>
          <p>
            <Trans i18nKey="projects.bitcoin-vm.p1" t={t}>
              0
              <br/>
              2
              <br/>
              <a
                href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ Vagrant box
              </a>
              <br/>
              <a
                href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ VirtualBox image
              </a>
              <br/>
              <a
                href="https://github.com/bitcoin-studio/Bitcoin-VirtualMachine"
                rel="noopener noreferrer"
                target="_blank"
              >
                ➱ Github Repository
              </a>
            </Trans>
          </p>

          <h2 className="mt55">{t('projects.mnemonic.title')}</h2>
          <p>
            <Trans i18nKey="projects.mnemonic.p1" t={t}>
              0
              <a
                href="src/pages/Resources"
                rel="noopener noreferrer"
                target="_blank"
              >
                x
              </a>
              2
              <br/>
              <a href={`${process.env.PUBLIC_URL}/assets/bitcoin_mnemonic_code_template.pdf`} download={true}>➱ xxx</a>
            </Trans>
          </p>

          <h2 className="mt55">{t('projects.utxo.title')}</h2>
          <p>
            <Trans i18nKey="projects.utxo.p1" t={t}>
              0
              <br/>
              <a href={`${process.env.PUBLIC_URL}/assets/transactions_utxo_model.pdf`} download={true}>➱ xxx</a>
            </Trans>
          </p>

          <h2 className="mt55">{t('projects.nespressoLN.title')}</h2>
          <div id="nespressoLightningDesc">
            <p>
              <Trans i18nKey="projects.nespressoLN.p1" t={t}>
                0
                <a
                  // eslint-disable-next-line max-len
                  href="https://www.elecrow.com/wiki/index.php?title=ESP8266_IOT_Board(Arduino_IDE_or_NodeMCU_Lua_Programming)"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  x
                </a>
                2
                <a
                  href="src/pages/Resources"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  x
                </a>
                4
                <br/>
                <a
                  href="https://coffee.bitcoin-studio.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ➱ The custom user interface
                </a>
                <br/>
                <a
                  href="https://github.com/bitcoin-studio/LightningNespressoUI"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ➱ The custom user interface code
                </a>
                <br/>
                <a
                  href="https://github.com/bitcoin-studio/LightningNespressoServer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ➱ The code that runs on the board
                </a>
                <br/>
                <a
                  href="https://www.thingiverse.com/thing:3772726"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ➱ CAD Files on Thingiverse
                </a>
                <br/>
                <a
                  href="https://www.yoctopuce.com/EN/article/an-automatic-nespresso-capsule-dispenser"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ➱ More info about the original machine
                </a>
              </Trans>
            </p>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              controls={true}
              loop={true}
              id="NespressoLightningVideo"
              poster={VendingMachineThumbnail}
              src={VendingMachineVideo}
            >
              Sorry, this video cannot be played in your current browser
            </video>

            <p id="NespressoLightningPrice">
              <span id="NespressoLightningPrice1">{t('projects.nespressoLN.price1')}</span>
              <span id="NespressoLightningPrice2">{t('projects.nespressoLN.price2')}</span>
            </p>
          </div>
        </section>

        <section id="slides">
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('slides.title')}</h2>

          <div className="slide">
            <img src={techIntro} alt="technical introduction to bitcoin"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/technical_intro_bitcoin_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={blockchainJourney} alt="overview of blockchain technologies"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/blockchain_journey_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={forks} alt="bitcoin forks history"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/forks_history_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={keys} alt="keys, addresses and wallets"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/keys_addresses_wallets_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={mining} alt="mining, consensus mechanism and forks"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/mining_consensus_forks_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={transaction} alt="bitcoin transactions"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/bitcoin_transaction_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={script} alt="bitcoin script"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/bitcoin_script_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={challenges} alt="next challenges of bitcoin"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/next_challenges_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={cryptoTools} alt="cryptographic tools"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/cryptographic_tools_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide">
            <img src={dataAnchoring} alt="data anchoring"/>
            <div className="slide__btn">
              <a href={`${process.env.PUBLIC_URL}/assets/education/data_anchoring_bitcoin-studio.pdf`} download={true}>
                {t('slides.download')}
              </a>
            </div>
          </div>

          <div className="slide slide--fake">
            <img src={fake} alt=""/>
            <div className="slide__btn">
              <button
                className="btn-link"
                type="button"
              >
                {t('slides.download')}
              </button>
            </div>
          </div>

          <div className="slide slide--fake">
            <img src={fake} alt=""/>
            <div className="slide__btn">
              <button
                className="btn-link"
                type="button"
              >
                {t('slides.download')}
              </button>
            </div>
          </div>

          <div className="slide extraItem"/>

          <div className="slide extraItem"/>

          <div className="slide extraItem"/>

          <div className="slide extraItem"/>

          <p className="slidesDesc">
            <Trans i18nKey="slides.slidesDesc" t={t}>
              _
              <a href={`${process.env.PUBLIC_URL}/assets/education/slides_bitcoin-studio.zip`} download={true}>_</a>
              _
              <a
                href="https://www.slideshare.net/bitcoin-studio"
                rel="noopener noreferrer"
                target="_blank"
              >
                _
              </a>
            </Trans>
          </p>
        </section>
      </div>
    </>
  )
}

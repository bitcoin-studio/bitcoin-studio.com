import * as React from 'react'
import {withTranslation, Trans, WithTranslation, WithTranslationProps} from 'react-i18next'

type Props = WithTranslation & {}
type X = React.ComponentType<Omit<Props, keyof WithTranslation> & WithTranslationProps>

export const Resources: X = withTranslation('Resources')
(({t}: Props) => {

  return (
    <div className={'page page--xs'} id="resourcesPage">
      <div className={'hero'}>
        <h1>{t('title')}</h1>
        <p>{t('hero')}</p>
      </div>

      <section id={'projects'}>
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('projects.bitcoinJS.title')}</h2>
        <p>
          <Trans i18nKey={'projects.bitcoinJS.p1'} t={t}>
            0 <br/>
            <a href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS" target={'_blank'}>➱ xxx</a>
            <br/>
            <a href="https://bitcoinjs-guide.bitcoin-studio.com" target={'_blank'}>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.bitcointestwallets.title')}</h2>
        <p>
          <Trans i18nKey={'projects.bitcointestwallets.p1'} t={t}>
            0 <br/>
            <a href="https://github.com/bitcoin-studio/Bitcoin-Test-Wallets-Generator" target={'_blank'}>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.bitcoin-vm.title')}</h2>
        <p>
          <Trans i18nKey={'projects.bitcoin-vm.p1'} t={t}>
            0 <br/>
            2 <br/>
            <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>➱ Vagrant box</a><br/>
            <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine" target={'_blank'}>➱ VirtualBox image</a><br/>
            <a href="https://github.com/bitcoin-studio/Bitcoin-VirtualMachine" target={'_blank'}>➱ Github Repository</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.mnemonic.title')}</h2>
        <p>
          <Trans i18nKey={'projects.mnemonic.p1'} t={t}>
            0 <a href="https://empoweredlaw.com/books/" target={'_blank'}>xxx</a>
            2 <br/>
            <a href={'assets/bitcoin_mnemonic_code_template.pdf'} download>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.utxo.title')}</h2>
        <p>
          <Trans i18nKey={'projects.utxo.p1'} t={t}>
            0 <br/>
            <a href={'assets/transactions_utxo_model.pdf'} download>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.nespressoLN.title')}</h2>
        <div id={'nespressoLightningDesc'}>
          <p>
            <Trans i18nKey={'projects.nespressoLN.p1'} t={t}>
              0 <a href="https://www.elecrow.com/wiki/index.php?title=ESP8266_IOT_Board(Arduino_IDE_or_NodeMCU_Lua_Programming)"
                   target={'_blank'}>xxx</a>
              2 <a href="http://theblock.cafe/" target={'_blank'}>xxx</a>
              4 <br/>
              <a href="https://coffee.bitcoin-studio.com" target={'_blank'}>➱ The custom user interface</a><br/>
              <a href="https://github.com/bitcoin-studio/LightningNespressoUI" target={'_blank'}>➱ The custom user interface code</a><br/>
              <a href="https://github.com/bitcoin-studio/LightningNespressoServer" target={'_blank'}>➱ The code that runs on the
                board</a><br/>
              <a href="https://www.thingiverse.com/thing:3772726" target={'_blank'}>➱ CAD Files on Thingiverse</a><br/>
              <a href="https://www.yoctopuce.com/EN/article/an-automatic-nespresso-capsule-dispenser" target={'_blank'}>➱ More info about
                the original machine</a>
            </Trans>
          </p>
          <video
            controls
            loop
            id={'NespressoLightningVideo'}
            poster={'assets/video/LN_Nespresso_Vending_Machine_Thumbnail.jpg'}
            src={'assets/video/LN_Nespresso_Vending_Machine.mp4'}
          >Sorry, this video cannot be played in your current browser
          </video>

          <p id={'NespressoLightningPrice'}>
            <span id={'NespressoLightningPrice1'}>{t('projects.nespressoLN.price1')}</span>
            <span id={'NespressoLightningPrice2'}>{t('projects.nespressoLN.price2')}</span>
          </p>
        </div>
      </section>

      <section id={'slides'}>
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('slides.title')}</h2>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/technical_intro_bitcoin_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/technical_intro_bitcoin_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/blockchain_journey_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/blockchain_journey_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/forks_history_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/forks_history_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/keys_addresses_wallets_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/keys_addresses_wallets_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/mining_consensus_forks_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/mining_consensus_forks_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>


        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/bitcoin_transaction_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/bitcoin_transaction_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/bitcoin_script_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/bitcoin_script_bitcoin-studio.pdf'} download>{t('slides.download')}</a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/next_challenges_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/next_challenges_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/cryptographic_tools_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/cryptographic_tools_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/data_anchoring_bitcoin-studio.pdf'}/>
          </div>
          <div className="slideButton">
            <a href={'assets/education/data_anchoring_bitcoin-studio.pdf'} download>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2 fakeItemContainer'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem fakeItem'}
              data={'assets/education/slide_fake.jpg'}/>
          </div>
          <div className="slideButton">
            <button className={'btn-link'}>{t('slides.download')}</button>
          </div>
        </div>

        <div className={'slideItemContainer2 fakeItemContainer'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem fakeItem'}
              data={'assets/education/slide_fake.jpg'}/>
          </div>
          <div className="slideButton">
            <button className={'btn-link'}>{t('slides.download')}</button>
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

        <p className={'slidesDesc'}>
          <Trans i18nKey={'slides.slidesDesc'} t={t}>
            You can download all the presentations <a href={'assets/education/slides_bitcoin-studio.zip'} download>here</a> or
            consult them on <a href="https://www.slideshare.net/bitcoin-studio" target={'_blank'}>SlideShare</a>.
          </Trans>
        </p>
      </section>
    </div>
  )
})
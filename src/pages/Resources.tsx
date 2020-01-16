import React, {FC} from 'react'
import {Trans, useTranslation} from 'react-i18next'

export const Resources: FC = () => {
  const {t} = useTranslation('Resources')

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
            0
            <br/>
            <a
              href="https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ xxx'}
            </a>
            <br/>
            <a
              href="https://bitcoinjs-guide.bitcoin-studio.com"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ xxx'}
            </a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.bitcointestwallets.title')}</h2>
        <p>
          <Trans i18nKey={'projects.bitcointestwallets.p1'} t={t}>
            0
            <br/>
            <a
              href="https://github.com/bitcoin-studio/Bitcoin-Test-Wallets-Generator"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ xxx'}
            </a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.bitcoin-vm.title')}</h2>
        <p>
          <Trans i18nKey={'projects.bitcoin-vm.p1'} t={t}>
            0
            <br/>
            2
            <br/>
            <a
              href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ Vagrant box'}
            </a>
            <br/>
            <a
              href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ VirtualBox image'}
            </a>
            <br/>
            <a
              href="https://github.com/bitcoin-studio/Bitcoin-VirtualMachine"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'➱ Github Repository'}
            </a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.mnemonic.title')}</h2>
        <p>
          <Trans i18nKey={'projects.mnemonic.p1'} t={t}>
            0
            <a
              href="https://empoweredlaw.com/books/"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'x'}
            </a>
            2
            <br/>
            <a href={'assets/bitcoin_mnemonic_code_template.pdf'} download={true}>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.utxo.title')}</h2>
        <p>
          <Trans i18nKey={'projects.utxo.p1'} t={t}>
            0
            <br/>
            <a href={'assets/transactions_utxo_model.pdf'} download={true}>➱ xxx</a>
          </Trans>
        </p>

        <h2 className={'mt55'}>{t('projects.nespressoLN.title')}</h2>
        <div id={'nespressoLightningDesc'}>
          <p>
            <Trans i18nKey={'projects.nespressoLN.p1'} t={t}>
              0
              <a
                // eslint-disable-next-line max-len
                href="https://www.elecrow.com/wiki/index.php?title=ESP8266_IOT_Board(Arduino_IDE_or_NodeMCU_Lua_Programming)"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'x'}
              </a>
              2
              <a
                href="http://theblock.cafe/"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'x'}
              </a>
              4
              <br/>
              <a
                href="https://coffee.bitcoin-studio.com"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'➱ The custom user interface'}
              </a>
              <br/>
              <a
                href="https://github.com/bitcoin-studio/LightningNespressoUI"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'➱ The custom user interface code'}
              </a>
              <br/>
              <a
                href="https://github.com/bitcoin-studio/LightningNespressoServer"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'➱ The code that runs on the board'}
              </a>
              <br/>
              <a
                href="https://www.thingiverse.com/thing:3772726"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'➱ CAD Files on Thingiverse'}
              </a>
              <br/>
              <a
                href="https://www.yoctopuce.com/EN/article/an-automatic-nespresso-capsule-dispenser"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                {'➱ More info about the original machine'}
              </a>
            </Trans>
          </p>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            controls={true}
            loop={true}
            id={'NespressoLightningVideo'}
            poster={'assets/video/LN_Nespresso_Vending_Machine_Thumbnail.jpg'}
            src={'assets/video/LN_Nespresso_Vending_Machine.mp4'}
          >
            Sorry, this video cannot be played in your current browser
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
              data={'assets/education/technical_intro_bitcoin_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/technical_intro_bitcoin_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/blockchain_journey_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/blockchain_journey_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/forks_history_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/forks_history_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/keys_addresses_wallets_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/keys_addresses_wallets_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/mining_consensus_forks_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/mining_consensus_forks_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/bitcoin_transaction_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/bitcoin_transaction_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/bitcoin_script_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/bitcoin_script_bitcoin-studio.pdf'} download={true}>{t('slides.download')}</a>
          </div>
        </div>

        <div className={'slideItemContainer2'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem'}
              type={'application/pdf'}
              data={'assets/education/next_challenges_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/next_challenges_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/cryptographic_tools_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/cryptographic_tools_bitcoin-studio.pdf'} download={true}>
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
              data={'assets/education/data_anchoring_bitcoin-studio.pdf'}
            />
          </div>
          <div className="slideButton">
            <a href={'assets/education/data_anchoring_bitcoin-studio.pdf'} download={true}>
              {t('slides.download')}
            </a>
          </div>
        </div>

        <div className={'slideItemContainer2 fakeItemContainer'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem fakeItem'}
              data={'assets/education/slide_fake.jpg'}
            />
          </div>
          <div className="slideButton">
            <button
              className={'btn-link'}
              type={'button'}
            >
              {t('slides.download')}
            </button>
          </div>
        </div>

        <div className={'slideItemContainer2 fakeItemContainer'}>
          <div className={'slideItemContainer'}>
            <object
              aria-label="slides"
              className={'slideItem fakeItem'}
              data={'assets/education/slide_fake.jpg'}
            />
          </div>
          <div className="slideButton">
            <button
              className={'btn-link'}
              type={'button'}
            >
              {t('slides.download')}
            </button>
          </div>
        </div>

        <div className={'slideItemContainer2 extraItem'}/>

        <div className={'slideItemContainer2 extraItem'}/>

        <div className={'slideItemContainer2 extraItem'}/>

        <div className={'slideItemContainer2 extraItem'}/>

        <p className={'slidesDesc'}>
          <Trans i18nKey={'slides.slidesDesc'} t={t}>
            {'You can download all the presentations '}
            <a href={'assets/education/slides_bitcoin-studio.zip'} download={true}>
              {'here'}
            </a>
            {'or consult them on '}
            <a
              href="https://www.slideshare.net/bitcoin-studio"
              rel="noopener noreferrer"
              target={'_blank'}
            >
              {'SlideShare'}
            </a>
          </Trans>
        </p>
      </section>
    </div>
  )
}

import React, {useCallback} from 'react'
import {Trans, withTranslation, WithTranslation} from 'react-i18next'
import workshopImg from '../assets/img/workshop_img.jpg'
import swal from '@sweetalert/with-react'
import {RegistrationFirstScreen} from './WorkshopsRegistration/RegistrationFirstScreen'

export const Workshops: React.ComponentClass<any> | React.FunctionComponent<any> = withTranslation('Workshops')
(({t}: WithTranslation) => {

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    el && el.scrollIntoView({behavior: 'smooth', block: 'start'})
  }, [])

  return (
    <div className={'page page--xs'} id={'workshopPage'}>

      <div className={'hero'}>
        <h1>{t('title')}</h1>
        <p>{t('hero')}</p>
      </div>

      <section id="workshopFlyer">
        <img src={workshopImg} alt="workshops"/>

        <div id={'teaserWorkshop'}>
          <p>
            {t('teaserWorkshop.1')}<br/>
            {t('teaserWorkshop.2')}<br/>
            {t('teaserWorkshop.3')}
          </p>
        </div>
      </section>

      <section id={'masterTheKing'}>
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('masterTheKing.title')}</h2>
        <p>{t('masterTheKing.p1')}</p>
        <p>{t('masterTheKing.p2')}</p>
      </section>

      <section id="offers">
        <section id={'next-sessions'}>
          <div className="hr hr75pc">
            <hr/>
          </div>
          <h2 className={'offers-h2'}>{t('next-session.title')}</h2>

          {/* Mastering Fundamentals */}
          <ul className={'next-session'}>
            <li className={'next-session__li--bold'}>
              <Trans i18nKey={'next-session.masteringFundamentals.p1What'} t={t}>
                <a href={'#bitcoin-intro-workshop'}
                   onClick={(e) => handleLinkClick(e, 'bitcoin-intro-workshop')}>
                  {'xxx'}
                </a>
              </Trans>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.masteringFundamentals.t2When')}</span>
              <span>{t('next-session.masteringFundamentals.p2When')}</span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.masteringFundamentals.t3Where')}</span>
              <span>
                  <Trans i18nKey={'next-session.masteringFundamentals.p3Where'} t={t}>
                    <a href="https://goo.gl/maps/adzSdmLqrBjCA9BbA" target={'_blank'}>xx</a>
                  </Trans>
                </span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.masteringFundamentals.t4Price')}</span>
              <span>{t('next-session.masteringFundamentals.p4Price')}</span>
            </li>
          </ul>

          {/* Bitcoin Programming */}
          <ul className={'next-session'}>
            <li className={'next-session__li--bold'}>
              <Trans i18nKey={'next-session.bitcoinProgramming.p1What'} t={t}>
                <a href={'#bitcoin-programming-workshop'}
                   onClick={(e) => handleLinkClick(e, 'bitcoin-programming-workshop')}>
                  {'xxx'}
                </a>
              </Trans>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.bitcoinProgramming.t2When')}</span>
              <span>{t('next-session.bitcoinProgramming.p2When')}</span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.bitcoinProgramming.t3Where')}</span>
              <span>
                  <Trans i18nKey={'next-session.bitcoinProgramming.p3Where'} t={t}>
                    <a href="https://goo.gl/maps/adzSdmLqrBjCA9BbA" target={'_blank'}>xx</a>
                  </Trans>
                </span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.bitcoinProgramming.t4Price')}</span>
              <span>{t('next-session.bitcoinProgramming.p4Price')}</span>
            </li>
          </ul>

          {/* Initiation to Lightning Network */}
          <ul className={'next-session'}>
            <li className={'next-session__li--bold'}>
              <Trans i18nKey={'next-session.lightningNetwork.p1What'} t={t}>
                <a
                  href={'#lightning-workshop'}
                  onClick={(e) => handleLinkClick(e, 'lightning-workshop')}>
                  {'xxx'}
                </a>
              </Trans>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.lightningNetwork.t2When')}</span>
              <span>{t('next-session.lightningNetwork.p2When')}</span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.lightningNetwork.t3Where')}</span>
              <span>
                  <Trans i18nKey={'next-session.lightningNetwork.p3Where'} t={t}>
                    <a href="https://goo.gl/maps/adzSdmLqrBjCA9BbA" target={'_blank'}>xx</a>
                  </Trans>
                </span>
            </li>

            <li className={'next-session__li'}>
              <span className={'next-session__li--bold'}>{t('next-session.lightningNetwork.t4Price')}</span>
              <span>{t('next-session.lightningNetwork.p4Price')}</span>
            </li>
          </ul>

          <div id={'buttonRegisterWorkshop'}>
            <button
              className="btn-yellow"
              onClick={(ev) => swal({
                content: <RegistrationFirstScreen t={t} ev={ev}/>,
                button: false,
              })}
            >
              {t('next-session.registerNow.button')}
            </button>
          </div>
        </section>

        {/* Mastering Fundamentals Workshop */}
        <section id={'bitcoin-intro-workshop'}>
          <div className="hr hr75pc">
            <hr/>
          </div>
          <h2 className={'offers-h2'}>{t('intro-offer.title')}</h2>
          <h3 className={'offers-h3'}>{t('intro-offer.duration')}</h3>

          <div>
            <h3>{t('intro-offer.goals.title')}</h3>
            <p>{t('intro-offer.goals.p1')}</p>
          </div>

          <div>
            <h3>{t('intro-offer.public.title')}</h3>
            <p>{t('intro-offer.public.p1')}</p>
          </div>

          <div>
            <h3>{t('intro-offer.programme.title')}</h3>
            <p>{t('intro-offer.programme.p1')}</p>
            <p>{t('intro-offer.programme.p2')}</p>
            <p>{t('intro-offer.programme.p3')}</p>
            <p>
              <Trans i18nKey={'intro-offer.programme.p4'} t={t}>
                0
                <a
                  href={'#bitcoin-programming-workshop'}
                  onClick={(e) => handleLinkClick(e, 'bitcoin-programming-workshop')}
                >{'xxx'}</a>
                2
              </Trans>
            </p>
          </div>
        </section>

        {/* Bitcoin Programming Workshop */}
        <section id={'bitcoin-programming-workshop'}>
          <div className="hr hr75pc">
            <hr/>
          </div>
          <h2 className={'offers-h2'}>{t('programming-offer.title')}</h2>
          <h3 className={'offers-h3'}>{t('programming-offer.duration')}</h3>

          <div>
            <h3>{t('programming-offer.goals.title')}</h3>
            <p>{t('programming-offer.goals.p1')}</p>
          </div>

          <div>
            <h3>{t('programming-offer.public.title')}</h3>
            <p>
              <Trans i18nKey={'programming-offer.public.p1'} t={t}>
                0 <a href={'#bitcoin-intro-workshop'} onClick={(e) => handleLinkClick(e, 'bitcoin-intro-workshop')}>{'xxx'}</a>
                2
              </Trans>
            </p>
            <p>
              <Trans i18nKey={'programming-offer.public.p2'} t={t}>
                0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                4
              </Trans>
            </p>
          </div>

          <div>
            <h3>{t('programming-offer.programme.title')}</h3>
            <p>
              <Trans i18nKey={'programming-offer.programme.p1'} t={t}>
                0 <a href={'resources'} target={'_blank'}>Resources</a>
                2
              </Trans>
            </p>
            <p>
              <Trans i18nKey={'programming-offer.programme.p2'} t={t}>
                0 <a href="https://bitcoinjs-guide.bitcoin-studio.com/" target={'_blank'}>BitcoinJS guide</a>
                2
              </Trans>
            </p>
            <p>{t('programming-offer.programme.p3')}</p>
          </div>
        </section>

        {/* Lightning Workshop */}
        <section id={'lightning-workshop'}>
          <div className="hr hr75pc">
            <hr/>
          </div>
          <h2 className={'offers-h2'}>{t('ln.title')}</h2>
          <h3 className={'offers-h3'}>{t('ln.duration')}</h3>

          <div>
            <h3>{t('ln.goals.title')}</h3>
            <p>{t('ln.goals.p1')}</p>
          </div>

          <div>
            <h3>{t('ln.public.title')}</h3>
            <p>
              <Trans i18nKey={'ln.public.p1'} t={t}>
                0 <a href={'#bitcoin-programming-workshop'}
                     onClick={(e) => handleLinkClick(e, 'bitcoin-programming-workshop')}>{'xxx'}</a>
                2
              </Trans>
            </p>
            <p>
              <Trans i18nKey={'ln.public.p2'} t={t}>
                0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                4
              </Trans>
            </p>
          </div>

          <div>
            <h3>{t('ln.programme.title')}</h3>
            <p>{t('ln.programme.p1')}</p>
            <p>{t('ln.programme.p2')}</p>
            <p>{t('ln.programme.p3')}</p>
            <p>{t('ln.programme.p4')}</p>
          </div>

        </section>
      </section>
    </div>
  )
})
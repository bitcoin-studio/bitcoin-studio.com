import * as React from 'react'
import {Trans, withNamespaces} from 'react-i18next'

interface IProps {
  t: ((string) => string)
}
interface IState {}

class Workshops extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      workshop_image: ''
    }
  }

  render() {
    const {t} = this.props
    return (
      <div id={'workshopPage'}>

        <div className={'hero'}>
          <h1>{t('title')}</h1>
          <p>{t('hero')}</p>
        </div>

        <section id="workshopFlyer">
          <img src={'assets/img/workshop_img.jpg'} alt="workshops"/>

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
          <section>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('next-session.title')}</h2>
            <p id={'next-session-p'}>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t1')}</span>
                <span>{t('next-session.p1')}</span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t2')}</span>
                <span>{t('next-session.p2')}</span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t3')}</span>
                <span>{t('next-session.p3')}</span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t4')}</span>
                <span>{t('next-session.p4')}</span>
              </span>
              <span>{t('next-session.contactMe')}</span>
            </p>
          </section>

          {/* Bitcoin Introduction Workshop */}
          <section>
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
              <p>{t('intro-offer.programme.p4')}</p>
            </div>
          </section>

          {/* Bitcoin Programming Workshop */}
          <section>
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
              <p>{t('programming-offer.public.p1')}</p>
              <p>
                <Trans i18nKey={"programming-offer.public.p2"}>
                  0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                  2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                </Trans>
              </p>
            </div>

            <div>
              <h3>{t('programming-offer.programme.title')}</h3>
              <p>{t('programming-offer.programme.p1')}</p>
              <p>{t('programming-offer.programme.p2')}</p>
              <p>{t('programming-offer.programme.p3')}</p>
              <p>{t('programming-offer.programme.p4')}</p>
            </div>
          </section>

          {/* Lightning Workshop */}
          <section>
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
              <p>{t('ln.public.p1')}</p>
              <p>
                <Trans i18nKey={"ln.public.p2"}>
                  0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                  2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
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
  }
}

export default withNamespaces('Workshops')(Workshops)
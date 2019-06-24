import * as React from 'react'
import {Trans, withNamespaces} from 'react-i18next'
// @ts-ignore
const bitcoin_essentials = import('../assets/img/bitcoin_essentials.png')

interface IProps {
  t: ((string) => string)
}
interface IState {
  bitcoin_essentials?: string;
}

class Workshops extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      bitcoin_essentials: ''
    }
  }

  async componentDidMount() {
    this.setState({
      bitcoin_essentials: await bitcoin_essentials.then()
    })
  }

  render() {
    const {t} = this.props
    return (
      <div id={'workshopPage'}>

        <div id={'hero-workshopPage'} className={'hero'}>
          <h1>{t('title')}</h1>

          <p>{t('hero')}</p>
        </div>

        <section id="workshopFlyer-workshopPage">
          <img src={this.state.bitcoin_essentials} alt="bitcoin essential flyer"/>

          <div id={'teaserWorkshop'}>
            <p>
              {t('teaserWorkshop.1')}<br/>
              {t('teaserWorkshop.2')}<br/>
              {t('teaserWorkshop.3')}
            </p>
          </div>
        </section>

        <section id={'masterTheKing-workshopPage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('masterTheKing.title')}</h2>
          <p>{t('masterTheKing.p1')}</p>
          <p>{t('masterTheKing.p2')}</p>
        </section>

        <section id="offers-workshopPage">
          <section className={'intro-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('intro-offer.title')}</h2>
            <h3 className={'offers-h3'}>{t('intro-offer.duration')}</h3>

            <div className={'goals-workshopPage'}>
              <h3>{t('intro-offer.goals.title')}</h3>
              <p>{t('intro-offer.goals.p1')}</p>
            </div>

            <div className={'public-workshopPage'}>
              <h3>{t('intro-offer.public.title')}</h3>
              <p>{t('intro-offer.public.p1')}</p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>{t('intro-offer.programme.title')}</h3>
              <p>{t('intro-offer.programme.p1')}</p>
              <p>{t('intro-offer.programme.p2')}</p>
              <p>{t('intro-offer.programme.p3')}</p>
              <p>{t('intro-offer.programme.p4')}</p>
            </div>
          </section>

          <section className={'programming-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('programming-offer.title')}</h2>
            <h3 className={'offers-h3'}>{t('programming-offer.duration')}</h3>

            <div className={'goals-workshopPage'}>
              <h3>{t('programming-offer.goals.title')}</h3>
              <p>{t('programming-offer.goals.p1')}</p>

            </div>

            <div className={'public-workshopPage'}>
              <h3>{t('programming-offer.public.title')}</h3>
              <p>{t('programming-offer.public.p1')}</p>
              <p>
                <Trans i18nKey={"programming-offer.public.p2"}>
                  0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                  2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                </Trans>
              </p>
            </div>

            <div className={'programme-workshopPage'}>
              <h3>{t('programming-offer.programme.title')}</h3>
              <p>{t('programming-offer.programme.p1')}</p>
              <p>{t('programming-offer.programme.p2')}</p>
              <p>{t('programming-offer.programme.p3')}</p>
              <p>{t('programming-offer.programme.p4')}</p>
            </div>
          </section>

          <section className={'intro-ln-offer-workshopPage'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('intro-ln-offer.title')}</h2>
            <h3 className={'offers-h3'}>{t('intro-ln-offer.duration')}</h3>

            <div className={'goals-workshopPage'}>
              <h3>{t('intro-ln-offer.goals.title')}</h3>
              <p>{t('intro-ln-offer.goals.p1')}</p>
            </div>
          </section>
        </section>
      </div>
    )
  }
}

export default withNamespaces('Workshops')(Workshops)
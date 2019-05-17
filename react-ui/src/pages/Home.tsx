import * as React from 'react'
import { withNamespaces } from 'react-i18next'

// Import assets
// @ts-ignore
const lisbon = import('../assets/img/lisbon.jpg')
// @ts-ignore
const btc_logo = import('../assets/img/btc_logo.png')
// @ts-ignore
const software_512 = import('../assets/img/home_software_512.png')
// @ts-ignore
const education_512 = import('../assets/img/home_education_512.png')
// @ts-ignore
const thought_512 = import('../assets/img/home_thought_512.png')
// @ts-ignore
const consulting_512 = import('../assets/img/home_consulting_512.png')
// @ts-ignore
const hosting_512 = import('../assets/img/home_hosting_512.png')

interface IProps {
  t: ((string) => string)
}
interface IState {
  lisbon?: string,
  btc_logo?: string,
  software_512?: string,
  education_512?: string,
  thought_512?: string,
  consulting_512?: string,
  hosting_512?: string
}

class Home extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      lisbon: '',
      btc_logo:'',
      software_512: '',
      education_512: '',
      thought_512: '',
      consulting_512: '',
      hosting_512: ''
    }
  }

  async componentDidMount() {
    this.setState({
      lisbon: await lisbon.then(),
      btc_logo: await btc_logo.then(),
      software_512: await software_512.then(),
      education_512: await education_512.then(),
      thought_512: await thought_512.then(),
      consulting_512: await consulting_512.then(),
      hosting_512: await hosting_512.then()
    })
  }

  render() {
    const {t} = this.props
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'} className={'hero'}>
          <h1>BITCOIN STUDIO</h1>
          <p>
            {t('hero')}
          </p>
        </div>

        <section id={'pictures-homePage'}>
          <figure id={'picture1'}>
            <img src={this.state.lisbon} alt="Lisbon"/>
          </figure>

          <figure id={'picture2'}>
            <img src={this.state.btc_logo} alt="Bitcoin logo"/>
          </figure>
        </section>

        <section id={'services-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('services.title')}</h2>
          <p>{t('services.p1')}</p>
          <p>{t('services.p2')}</p>
        </section>

        <section id={'servicesDetails-homePage'}>
          <div className={'serviceItem'}>
            <img src={this.state.software_512} alt="software development"/>
            <p>
              <span><em>{t('servicesDetails.1.title')}</em></span>
              {t('servicesDetails.1.desc')}
            </p>
          </div>


          <div className={'serviceItem'}>
            <img src={this.state.education_512} alt="workshops"/>
            <p>
              <span><em>{t('servicesDetails.2.title')}</em></span>
              {t('servicesDetails.2.desc')}
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src={this.state.thought_512} alt="in-house training"/>
            <p>
              <span><em>{t('servicesDetails.3.title')}</em></span>
              {t('servicesDetails.3.desc')}
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src={this.state.consulting_512} alt="private consulting"/>
            <p>
              <span><em>{t('servicesDetails.4.title')}</em></span>
              {t('servicesDetails.4.desc')}
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src={this.state.hosting_512} alt="node as a service"/>
            <p>
              <span><em>{t('servicesDetails.5.title')}</em></span>
              {t('servicesDetails.5.desc')}
            </p>
          </div>
        </section>

        <section id={'network-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('network.title')}</h2>
          <p>
            {t('network.p1')}
          </p>
          <p>
            {t('network.p2')}
          </p>
        </section>


        <section id="call2action-homePage">
          <div id="call2action_ribbon">
            <h3>{t('call2action.title')}</h3>
            <p>{t('call2action.p')}</p>
          </div>

          <div id="call2action_ribbon_prop" className="">
            <div className="ribbon_prop_1">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">{t('call2action.circle.1')}</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">{t('call2action.circle.2')}</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">{t('call2action.circle.3')}</a></span>
              </div>
            </div>

            <div className="ribbon_prop_2">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">{t('call2action.circle.1')}</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">{t('call2action.circle.2')}</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">{t('call2action.circle.3')}</a></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withNamespaces('Home')(Home)
import * as React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18n from '../i18n'
import logo from '../assets/img/bitcoin-studio-black.svg'

interface IProps extends WithTranslation {
  t: ((s: string) => string)
}
interface IState {
  activeItem: string
}

class Header extends React.Component<IProps & WithTranslation, IState> {

  constructor(props: Readonly<IProps>) {
    super(props)
    this.activate = this.activate.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.state = {
      activeItem: 'HOME'
    }
  }

  componentDidMount() {
    let page = window.location.pathname
    if (page === '/') this.setState({activeItem: 'HOME'})
    else if (page === '/workshops') this.setState({activeItem: 'WORKSHOPS'})
    else if (page === '/resources') this.setState({activeItem: 'RESOURCES'})
    else if (page === '/about') this.setState({activeItem: 'ABOUT'})
    else if (page === '/contact') this.setState({activeItem: 'CONTACT'})
  }

  activate(item: string) {
    this.setState({activeItem: item})
  }

  changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
      .catch((e) => console.error(e))
  }

  render() {
    const {t} = this.props
    return (
        <nav className={"nav"}>
          <ul>
            <li>
              <Link className={this.state.activeItem === 'HOME' ? 'active' : ''}  onClick={this.activate.bind(this, 'HOME')} to="/">
                <img src={logo} alt="Bitcoin Studio Logo"/>
              </Link>
            </li>
            <li>
              <Link className={this.state.activeItem === 'WORKSHOPS' ? 'active' : ''} onClick={this.activate.bind(this, 'WORKSHOPS')} to="/workshops">{t('workshops')}</Link>
            </li>
            <li>
              <Link className={this.state.activeItem === 'RESOURCES' ? 'active' : ''} onClick={this.activate.bind(this, 'RESOURCES')} to="/resources">{t('resources')}</Link>
            </li>
            <li>
              <Link className={this.state.activeItem === 'ABOUT' ? 'active' : ''} onClick={this.activate.bind(this, 'ABOUT')} to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link className={this.state.activeItem === 'CONTACT' ? 'active' : ''} onClick={this.activate.bind(this, 'CONTACT')} to="/contact">{t('contact')}</Link>
            </li>

            <li id={'translation-btn'}>
              <button className={'btn-link'} onClick={() => this.changeLanguage('en')}>EN</button>
              {'/'}
              <button className={'btn-link'} onClick={() => this.changeLanguage('fr')}>FR</button>
            </li>
          </ul>
        </nav>
    )
  }
}

export default withTranslation('Header')(Header)
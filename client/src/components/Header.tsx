import * as React from 'react'
import { Link } from 'fuse-react'
import { withNamespaces } from 'react-i18next'
import i18n from '../i18n'

interface IProps {
  t: ((string) => string)
}
interface IState {
  activeItem: string
}

class Header extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.activate = this.activate.bind(this)
    this.changeLanguage = this.changeLanguage.bind(this)
    this.state = {
      activeItem: 'HOME'
    }
  }

  componentDidMount() {
    // @ts-ignore
    let page = window.location.pathname
    if (page === '/') this.setState({activeItem: 'HOME'})
    else if (page === '/workshops') this.setState({activeItem: 'WORKSHOPS'})
    else if (page === '/resources') this.setState({activeItem: 'RESOURCES'})
    else if (page === '/about') this.setState({activeItem: 'ABOUT'})
  }

  activate(item) {
    this.setState({activeItem: item})
  }

  changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  render() {
    const {t} = this.props
    return (
        <nav className={"nav"}>
          <ul>
            <li>
              <Link className={this.state.activeItem === 'HOME' ? 'active' : ''}  onClick={this.activate.bind(this, 'HOME')} to="/">{t('home')}</Link>
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

            <li id={'translation-btn'}>
              <button onClick={() => this.changeLanguage('en')}>en</button>
              <button onClick={() => this.changeLanguage('fr')}>fr</button>
            </li>
          </ul>


        </nav>
    )
  }
}

export default withNamespaces('Header')(Header)
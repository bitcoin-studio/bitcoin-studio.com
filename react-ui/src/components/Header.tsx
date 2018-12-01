import * as React from 'react'
import { Link } from 'fuse-react'

type MyProps = {}
type MyState = { activeItem: string }

class Header extends React.Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.activate = this.activate.bind(this);

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

  render() {
    return (
      <nav className={"nav"}>
        <ul>
          <li>
            <Link className={this.state.activeItem === 'HOME' ? 'active' : ''}  onClick={this.activate.bind(this, 'HOME')} to="/">HOME</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'WORKSHOPS' ? 'active' : ''} onClick={this.activate.bind(this, 'WORKSHOPS')} to="/workshops">WORKSHOPS</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'RESOURCES' ? 'active' : ''} onClick={this.activate.bind(this, 'RESOURCES')} to="/resources">RESOURCES</Link>
          </li>
          <li>
            <Link className={this.state.activeItem === 'ABOUT' ? 'active' : ''} onClick={this.activate.bind(this, 'ABOUT')} to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
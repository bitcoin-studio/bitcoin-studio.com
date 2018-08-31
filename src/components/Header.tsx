import * as React from 'react'
import {Button, Navbar} from '@blueprintjs/core'
import {Link, navigate, mergeQuery, setQuery} from 'fuse-react'

class Header extends React.Component {
  render() {
    return (
      /*<Navbar>
        <Navbar.Group align="left">
          <Navbar.Heading>D10e Consulting</Navbar.Heading>
          <Navbar.Divider/>
          <Button className="bp3-minimal" icon="home" onClick={() => navigate('/')} text="Home"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/services')} text="Services"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/workshop-preregistration')} text="Worshops"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/ressources')} text="Ressources"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/about')} text="About"/>
        </Navbar.Group>
      </Navbar>*/

      <nav id={"nav"}>
        <ul>
          <li>
            <Link activeClassName="active" to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/workshop-preregistration">Worshops</Link>
          </li>
          <li>
            <Link to="/ressources">Ressources</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
import * as React from 'react'
import {Button, Navbar} from '@blueprintjs/core'
import {navigate, mergeQuery, setQuery} from 'fuse-react'

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align="left">
          <Navbar.Heading>D10e Consulting</NavbarHeading>
          <Navbar.Divider/>
          <Button className="bp3-minimal" icon="home" onClick={() => navigate('/')} text="Home"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/services')} text="Services"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/workshop-preregistration')} text="Worshops"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/ressources')} text="Ressources"/>
          <Button className="bp3-minimal" icon="document" onClick={() => navigate('/about')} text="About"/>
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default Header
import React, {useState, useEffect, useRef} from 'react'
import FocusLock from 'react-focus-lock'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Burger from './components/BurgerMenu'
import { useOnClickOutside } from './hooks'

interface IAppProps extends RouteComponentProps {}

function App({history}: IAppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const node = useRef(null)
  const menuId = 'main-menu'
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleScrolling()
      setIsMenuOpen(false)
    }
  })

  useEffect(() => {
    return history.listen(() => {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    })
  })

  function toggleScrolling() {
    if (isMenuOpen && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }

  function onToggleMenu() {
    toggleScrolling()
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div ref={node} className={'header__container'}>
        {/* FocusLock for A11y */}
        <FocusLock disabled={!isMenuOpen}>
          <Burger
            aria-controls={menuId}
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => onToggleMenu()}
          />
          <Header
            id={menuId}
            isMenuOpen={isMenuOpen}
          />
        </FocusLock>
      </div>

      <Main/>

      <Footer/>
    </>
  )
}

export default withRouter(App)
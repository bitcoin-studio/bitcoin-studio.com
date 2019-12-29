import React, {useState, useEffect, useRef, useCallback, FC} from 'react'
import FocusLock from 'react-focus-lock'
import {useHistory} from 'react-router-dom'
import {Header} from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import {Burger} from './components/BurgerMenu'
import {useOnClickOutside} from './hooks'

export const App: FC = () => {
  const menuId = 'main-menu'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const node = useRef(null)
  const history = useHistory()

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

  const toggleScrolling = useCallback(() => {
    if (isMenuOpen && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isMenuOpen])

  const onToggleMenu = useCallback(() => {
    toggleScrolling()
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen, toggleScrolling])

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
import React, {useState, useEffect, useRef, useCallback} from 'react'
import {Helmet} from 'react-helmet'
import FocusLock from 'react-focus-lock'
import {useHistory} from 'react-router-dom'
import {Header} from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import {Burger} from './components/BurgerMenu'
import {useOnClickOutside} from './hooks'

export const App: React.FC = () => {
  const menuId = 'main-menu'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const node = useRef(null)
  const history = useHistory()

  const toggleScrolling = useCallback(() => {
    if (isMenuOpen && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isMenuOpen])

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleScrolling()
      setIsMenuOpen(false)
    }
  })

  useEffect(() => history.listen(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }))

  const onToggleMenu = useCallback(() => {
    toggleScrolling()
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen, toggleScrolling])

  return (
    <>
      <Helmet
        titleTemplate="%s - Bitcoin Studio"
      >
        <script type="application/ld+json">
          {`
            {
              "@context":"http://schema.org",
              "@type":"WebSite",
              "name":"Bitcoin Studio",
              "url":"https://www.bitcoin-studio.com"
            }
          `}
        </script>
      </Helmet>
      <div ref={node} className="header__container">
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

import React, {memo} from 'react'
import {Route, Routes} from 'react-router-dom'
import i18n from '../i18n'
import {Home} from '../pages/Home'
import {Workshops} from '../pages/Workshops'
import {Resources} from '../pages/Resources'
import {About} from '../pages/About'
import {Contact} from '../pages/Contact'
import {NotFound} from "../pages/NotFound";

export const Main = memo(function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={i18n.language === 'en' ? '/workshops' : '/formations'} element={<Workshops />} />
        <Route path={i18n.language === 'en' ? '/resources' : '/ressources'} element={<Resources />} />
        <Route path={i18n.language === 'en' ? '/about' : '/a-propos'} element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
})

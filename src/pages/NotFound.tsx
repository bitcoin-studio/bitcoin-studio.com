import React from 'react'
import {useTranslation} from 'react-i18next'
import notFound from '../assets/img/notFound.jpg'
import {useMetaTitle} from '../hooks'

export const NotFound: React.FC = () => {
  const {t} = useTranslation('NotFound')
  useMetaTitle('Not Found Page')

  return (
    <div className="page page--xs" id="notFoundPage">
      <div className="hero">

        <h1>
          {t('title')}
        </h1>

        <img id="notFound-img" src={notFound} alt="not found 404"/>

      </div>
    </div>
  )
}

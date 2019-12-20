import * as React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import notFound from '../assets/img/notFound.jpg'

function NotFound({t} : WithTranslation) {

  return (
    <div id={'notFoundPage'}>
      <div className={'hero'}>
        <h1>
          {t('title')}
        </h1>

        <img id={'notFound-img'} src={notFound} alt="not found 404"/>

      </div>
    </div>
  )
}

export default withTranslation('NotFound')(NotFound)
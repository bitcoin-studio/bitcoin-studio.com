import * as React from 'react'
import { withNamespaces } from 'react-i18next'

function NotFound({t}) {

  return (
    <div id={'notFoundPage'}>
      <div className={'hero'}>
        <h1>
          {t('title')}
        </h1>

        <img id={'notFound-img'} src={'assets/img/notFound.jpg'} alt="not found 404"/>

      </div>
    </div>
  )
}

export default  withNamespaces('NotFound')(NotFound)
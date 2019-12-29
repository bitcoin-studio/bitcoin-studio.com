import * as React from 'react'
import {withTranslation, WithTranslation, WithTranslationProps} from 'react-i18next'
import notFound from '../assets/img/notFound.jpg'

type Props = WithTranslation & {}
type X = React.ComponentType<Omit<Props, keyof WithTranslation> & WithTranslationProps>

export const NotFound: X = withTranslation('NotFound')
(({t}: Props) => {

  return (
    <div className={'page page--xs'} id={'notFoundPage'}>
      <div className={'hero'}>
        <h1>
          {t('title')}
        </h1>

        <img id={'notFound-img'} src={notFound} alt="not found 404"/>

      </div>
    </div>
  )
})
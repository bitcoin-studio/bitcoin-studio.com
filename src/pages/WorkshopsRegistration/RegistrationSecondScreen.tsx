import React, {FC, useState} from 'react'
import swal from '@sweetalert/with-react'
import i18next, {TFunction} from 'i18next'

const trainings = [
  {
    id: 'Face2Face1DayNonTech',
    price: '200',
    txtLabel: 'registration.secondScreen.Face2Face1DayNonTech',
  },
  {
    id: 'Face2Face1DayTech',
    price: '400',
    txtLabel: 'registration.secondScreen.Face2Face1DayTech',
  },
  {
    id: 'Face2Face2Days',
    price: '600',
    txtLabel: 'registration.secondScreen.Face2Face2Days',
  },
  {
    id: 'Distance1DayNonTech',
    price: '150',
    txtLabel: 'registration.secondScreen.Distance1DayNonTech',
  },
  {
    id: 'Distance1DayTech',
    price: '300',
    txtLabel: 'registration.secondScreen.Distance1DayTech',
  },
  {
    id: 'Distance2DaysTech',
    price: '450',
    txtLabel: 'registration.secondScreen.Distance2DaysTech',
  },
]

type InputRadioTrainingsProps = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  setSelectedOffer: React.Dispatch<React.SetStateAction<string>>
}

const InputRadioTrainings: FC<InputRadioTrainingsProps> = (
  {
    t,
    ev,
    setSelectedOffer,
  }
) => {
  const trainingsElements = trainings.map((training) => (
    <div key={training.id}>
      <input
        id={training.id}
        type="radio"
        name="training"
        onClick={() => setSelectedOffer((ev.target as HTMLInputElement).value)}
        value={training.price}
      />
      <label className={'training__radio-label'} htmlFor={training.id}>
        {
          i18next.language === 'en'
            ? `${t(training.txtLabel)} - €${training.price}`
            : `${t(training.txtLabel)} - ${training.price}€`
        }
      </label>
    </div>
  ))
  return <>{trainingsElements}</>
}


type RegistrationSecondScreenProps = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

export const RegistrationSecondScreen: FC<RegistrationSecondScreenProps> = ({t, ev}) => {
  const [selectedOffer, setSelectedOffer] = useState('0')

  return (
    <div id={'registrationSecondScreen'}>
      <div className={'swal-title'}>{t('registration.secondScreen.title')}</div>
      <div className={'swal-text'}>{t('registration.secondScreen.p1')}</div>
      <div className={'swal-text'}>{t('registration.secondScreen.p2')}</div>
      <div className={'swal-text'}>{t('registration.secondScreen.p3')}</div>

      <div id={'training-offers'}>
        <InputRadioTrainings ev={ev} setSelectedOffer={setSelectedOffer} t={t}/>
      </div>

      <div id={'buttons'}>
        <button
          className={'swal-button swal-button--cancel'}
          onClick={() => swal.close()}
          type={'button'}
        >
          {t('registration.secondScreen.close')}
        </button>
        <form method="POST" action="https://nodes.bitcoin-studio.com/api/v1/invoices">
          <input type="hidden" name="storeId" value="BGdJzfMmXohC7J731eVuPBuDdWH3fZqBiitrN6HwGoeu"/>
          <input id={'registerOfferPrice'} type="hidden" name="price" value={selectedOffer}/>
          <input type="hidden" name="currency" value="EUR"/>
          <input type="hidden" name="checkoutDesc" value="Training"/>
          <input type="hidden" name="notifyEmail" value="rstephane@protonmail.com"/>
          <input type="hidden" name="browserRedirect" value="https://www.bitcoin-studio.com"/>
          {(i18next.language === 'fr') && (<input type="hidden" name="checkoutQueryString" value={'lang=fr-FR'}/>)}
          <input
            alt="Pay with BTCPay, Self-Hosted Bitcoin Payment Processor"
            name="submit"
            src="https://nodes.bitcoin-studio.com/img/paybutton/pay.svg"
            type="image"
          />
        </form>
      </div>
    </div>
  )
}

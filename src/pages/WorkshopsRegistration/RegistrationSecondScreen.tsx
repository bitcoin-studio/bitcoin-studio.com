import React, {useState} from 'react'
import swal from '@sweetalert/with-react'
import i18next, {TFunction} from 'i18next'

const trainings = [
  {
    id: 'Face2Face1DayNonTech',
    price: '200',
    txtLabel: 'next-session.registerNow.emailSent.Face2Face1DayNonTech',
  },
  {
    id: 'Face2Face1DayTech',
    price: '400',
    txtLabel: 'next-session.registerNow.emailSent.Face2Face1DayTech',
  },
  {
    id: 'Face2Face2Days',
    price: '600',
    txtLabel: 'next-session.registerNow.emailSent.Face2Face2Days',
  },
  {
    id: 'Distance1DayNonTech',
    price: '150',
    txtLabel: 'next-session.registerNow.emailSent.Distance1DayNonTech',
  },
  {
    id: 'Distance1DayTech',
    price: '300',
    txtLabel: 'next-session.registerNow.emailSent.Distance1DayTech',
  },
  {
    id: 'Distance2DaysTech',
    price: '450',
    txtLabel: 'next-session.registerNow.emailSent.Distance2DaysTech',
  },
]

type InputRadioTrainingsProps = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  setSelectedOffer: React.Dispatch<React.SetStateAction<string>>
}

const InputRadioTrainings: React.FunctionComponent<InputRadioTrainingsProps> = ({t, ev, setSelectedOffer}) => {
  const trainingsElements = trainings.map((training) => {
    return (
      <div key={training.id}>
        <input
          id={training.id}
          type="radio"
          name="training"
          onClick={() => setSelectedOffer((ev.target as HTMLInputElement).value)}
          value={training.price}
        />
        <label htmlFor={training.id}>
          {`${t(training.txtLabel)} - ${training.price}`}
        </label>
      </div>
    )
  })
  return <>{trainingsElements}</>
}


type RegistrationSecondScreenProps = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

export const RegistrationSecondScreen: React.FunctionComponent<RegistrationSecondScreenProps> = ({t, ev}) => {
  const [selectedOffer, setSelectedOffer] = useState('0')

  return (
    <div id={'swalRegisterEmailSent'}>
      <div className={'swal-title'}>{t('next-session.registerNow.emailSent.title')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p1')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p2')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p3')}</div>

      <div id={'training-offers'}>
        <InputRadioTrainings ev={ev} setSelectedOffer={setSelectedOffer} t={t}/>
      </div>

      <div id={'buttons'}>
        <button className={'swal-button swal-button--cancel'} onClick={() => swal.close()}>
          {t('next-session.registerNow.emailSent.close')}
        </button>
        <form method="POST" action="https://nodes.bitcoin-studio.com/api/v1/invoices">
          <input type="hidden" name="storeId" value="BGdJzfMmXohC7J731eVuPBuDdWH3fZqBiitrN6HwGoeu"/>
          <input id={'registerOfferPrice'} type="hidden" name="price" value={selectedOffer}/>
          <input type="hidden" name="currency" value="EUR"/>
          <input type="hidden" name="checkoutDesc" value="Training"/>
          <input type="hidden" name="notifyEmail" value="rstephane@protonmail.com"/>
          <input type="hidden" name="browserRedirect" value="https://www.bitcoin-studio.com"/>
          {(i18next.language === 'fr') && (<input type="hidden" name="checkoutQueryString" value={'lang=fr-FR'}/>)}
          <input type="image" src="https://nodes.bitcoin-studio.com/img/paybutton/pay.svg" name="submit"
                 alt="Pay with BTCPay, Self-Hosted Bitcoin Payment Processor"/>
        </form>
      </div>
    </div>
  )
}
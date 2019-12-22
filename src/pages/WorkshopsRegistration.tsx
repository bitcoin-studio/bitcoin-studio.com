import React, {useState, FC} from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {object, string} from 'yup'
import axios from 'axios'
import * as swal from '@sweetalert/with-react'
import i18next, {TFunction} from 'i18next'

interface IHandleRegisterWorkshopProps {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  t: TFunction
}

interface IFormValuesProps {
  name: string;
  email: string;
  message: string;
}

const initialFormValues: IFormValuesProps =
  {
    name: '',
    email: '',
    message: '',
  }

export default function handleRegisterWorkshop({e, t}: IHandleRegisterWorkshopProps) {
  swal({
    content: (<Formik
      initialValues={initialFormValues}
      validationSchema={object().shape({
        name: string()
          .min(2, t('next-session.registerNow.errors.tooShort'))
          .max(50, t('next-session.registerNow.errors.tooLong'))
          .required(t('next-session.registerNow.errors.required')),
        email: string()
          .email(t('next-session.registerNow.errors.emailInvalid'))
          .required(t('next-session.registerNow.errors.required')),
        message: string()
          .max(2000, t('next-session.registerNow.errors.tooLong'))
          .required(t('next-session.registerNow.errors.required')),
      })}
      onSubmit={(values: IFormValuesProps, actions) => {
        axios
          .post('/send-email', values)
          .then(() => {
            actions.resetForm({values: initialFormValues})
          })
          .then(() => {
            actions.setSubmitting(false)
          })
          .then(() => {
            swal({
              content: (<RegistrationSecondScreen t={t} e={e}/>),
              icon: 'success',
              button: false,
            })
          })
          .catch(error => {
            console.log('Error while submitting email form ', error.response)
          })
      }}
    >
      {() => <RegistrationFirstScreen t={t}/>}
    </Formik>),
    button: false,
  })
}

const RegistrationFirstScreen: FC<{ t: TFunction }> = ({t}) => {
  return (
    <div id="swalRegisterForm">
      <div className={'swal-title'}>{t('next-session.registerNow.swalRegisterForm.title')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.swalRegisterForm.text')}</div>
      <Form
        role="form"
        action={'/send-email'}
        method="post"
        className="form"
      >
        <Field
          name="name"
          type="text"
          id="name"
          placeholder={t('next-session.registerNow.placeholders.name')}
          required
        />
        <p>
          <ErrorMessage name="name"/>
        </p>

        <Field
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <p>
          <ErrorMessage name="email"/>
        </p>

        <Field
          component="textarea"
          id="message"
          name="message"
          placeholder="Message"
          maxLength={2000}
          rows={15}
          required
        />
        <p>
          <ErrorMessage name="message"/>
        </p>

        <button
          className="btn-yellow"
          id="submit"
          name="submit"
          type="submit"
        >
          {t('next-session.registerNow.sendMail')}
        </button>
      </Form>
    </div>
  )
}

const RegistrationSecondScreen: FC<IHandleRegisterWorkshopProps> = ({t, e}) => {
  const [selectedOffer, setSelectedOffer] = useState('0')

  return (
    <div id={'swalRegisterEmailSent'}>
      <div className={'swal-title'}>{t('next-session.registerNow.emailSent.title')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p1')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p2')}</div>
      <div className={'swal-text'}>{t('next-session.registerNow.emailSent.p3')}</div>
      <div id={'training-offers'}>
        <div>
          <input
            id="training1day"
            type="radio"
            name="training"
            onClick={() => setSelectedOffer((e.target as HTMLInputElement).value)}
            value="100"
          />
          <label htmlFor="training1day">{t('next-session.registerNow.emailSent.1-non-tech')}</label>
        </div>
        <div>
          <input
            id="training1day"
            type="radio"
            name="training"
            onClick={() => setSelectedOffer((e.target as HTMLInputElement).value)}
            value="200"
          />
          <label htmlFor="training1day">{t('next-session.registerNow.emailSent.1-tech')}</label>
        </div>
        <div>
          <input
            id="training2days"
            type="radio"
            name="training"
            onClick={() => setSelectedOffer((e.target as HTMLInputElement).value)}
            value="300"
          />
          <label htmlFor="training2days">{t('next-session.registerNow.emailSent.2-tech')}</label>
        </div>
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
import React, {FC} from 'react'
import log from 'loglevel'
import {TFunction} from 'i18next'
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import {RegistrationSecondScreen} from './RegistrationSecondScreen'

type Props = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

type FormValues = {
  from_name: string
  from_email: string
  message: string
}

const initialFormValues: FormValues = {
  from_name: '',
  from_email: '',
  message: '',
}

const RegisterSchema = (t: TFunction) => Yup.object().shape({
  from_name: Yup.string()
    .min(2, t('registration.errors.tooShort'))
    .max(50, t('registration.errors.tooLong'))
    .required(t('registration.errors.required')),
  from_email: Yup.string()
    .email(t('registration.errors.emailInvalid'))
    .required(t('registration.errors.required')),
  message: Yup.string()
    .max(2000, t('registration.errors.tooLong'))
    .required(t('registration.errors.required')),
})

const submitForm = (
  values: FormValues,
  actions: FormikHelpers<FormValues>,
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  t: TFunction
) => {
  axios
    .post('/api/send-email',{...values,
      to_email: 'bitcoin-studio@protonmail.com',
      subject: 'Bitcoin Studio Workshop Registration'})
    .then(() => {
      actions.resetForm({values: initialFormValues})
    })
    .then(() => {
      actions.setSubmitting(false)
    })
    .then(() => {
      swal({
        content: <RegistrationSecondScreen t={t} ev={ev}/>,
        icon: 'success',
        button: false,
      })
    })
    .catch((error) => {
      log.error('Error while submitting email form')
      log.error(error.response)
    })
}

export const RegistrationFirstScreen: FC<Props> = ({t, ev}) => (
  <Formik
    initialValues={initialFormValues}
    validationSchema={() => RegisterSchema(t)}
    onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => submitForm(values, actions, ev, t)}
  >
    <div id="registrationFirstScreen">
      <div className="swal-title">{t('registration.firstScreen.title')}</div>
      <div className="swal-text">{t('registration.firstScreen.text')}</div>
      <Form className="form">
        <Field
          name="from_name"
          type="text"
          placeholder={t('registration.placeholders.name')}
        />
        <p>
          <ErrorMessage name="from_name"/>
        </p>

        <Field
          type="email"
          name="from_email"
          placeholder="E-mail"
        />
        <p>
          <ErrorMessage name="from_email"/>
        </p>

        <Field
          component="textarea"
          name="message"
          placeholder="Message"
          rows={15}
        />
        <p>
          <ErrorMessage name="message"/>
        </p>

        <button
          className="btn-yellow"
          type="submit"
        >
          {t('registration.sendMail')}
        </button>
      </Form>
    </div>
  </Formik>
)

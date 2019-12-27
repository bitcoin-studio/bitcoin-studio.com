import React from 'react'
import {TFunction} from 'i18next'
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import swal from "@sweetalert/with-react"
import {RegistrationSecondScreen} from './RegistrationSecondScreen'

type Props = {
  t: TFunction
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
}

type FormValues = {
  name: string
  email: string
  message: string
}

const initialFormValues: FormValues =
  {
    name: '',
    email: '',
    message: '',
  }

const RegisterSchema = (t: TFunction) => Yup.object().shape({
  name: Yup.string()
    .min(2, t('next-session.registerNow.errors.tooShort'))
    .max(50, t('next-session.registerNow.errors.tooLong'))
    .required(t('next-session.registerNow.errors.required')),
  email: Yup.string()
    .email(t('next-session.registerNow.errors.emailInvalid'))
    .required(t('next-session.registerNow.errors.required')),
  message: Yup.string()
    .max(2000, t('next-session.registerNow.errors.tooLong'))
    .required(t('next-session.registerNow.errors.required')),
})

const submitForm = (
  values: FormValues,
  actions: FormikHelpers<FormValues>,
  ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  t: TFunction) => {

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
        content: <RegistrationSecondScreen t={t} ev={ev}/>,
        icon: 'success',
        button: false,
      })
    })
    .catch(error => {
      console.log('Error while submitting email form')
      console.log(error.response)
    })
}

export const RegistrationFirstScreen: React.FunctionComponent<Props> = ({t, ev}) => {

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={() => RegisterSchema(t)}
      onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => submitForm(values, actions, ev, t)}
    >
      <div id="swalRegisterForm">
        <div className={'swal-title'}>{t('next-session.registerNow.swalRegisterForm.title')}</div>
        <div className={'swal-text'}>{t('next-session.registerNow.swalRegisterForm.text')}</div>
        <Form className="form">
          <Field
            name="name"
            type="text"
            placeholder={t('next-session.registerNow.placeholders.name')}
          />
          <p>
            <ErrorMessage name="name"/>
          </p>

          <Field
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <p>
            <ErrorMessage name="email"/>
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
            {t('next-session.registerNow.sendMail')}
          </button>
        </Form>
      </div>
    </Formik>
  )
}

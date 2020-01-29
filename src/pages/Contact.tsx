import React, {FC} from 'react'
import log from 'loglevel'
import {useTranslation} from 'react-i18next'
import {Formik, Field, Form, ErrorMessage, FormikHelpers} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import swal from '@sweetalert/with-react'
import keybase from '../assets/icons/keybase.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pgp from '../assets/icons/pgp.svg'
import twitter from '../assets/icons/twitter.svg'

type FormValues = {
  name: string
  email: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

export const Contact: FC = () => {
  const {t} = useTranslation('Contact')

  return (
    <div className="page page--xs" id="contactPage">
      <div className="hero" id="contact-hero">
        <h1>
          {t('title')}
        </h1>
      </div>

      <section id="contact-info">
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('contact-info.title')}</h2>
        <p>
          {t('contact-info.p')}
        </p>

        <div id="contact-info-links">
          <h3 className="contact-subtitles">
            {t('contact-info.subtitle1')}
          </h3>
          <a href={'m&#97;ilto&#58;bitc&#111;&#105;n&#37;2&#68;st&#117;d%69o&#64;pro%&#55;&#52;&#111;nm%61%69l&#46;co&#109;'}>
            <span className="e-mail" data-user="oiduts-nioctib" data-website="moc.liamnotorp"/>
          </a>

          <h3 className="contact-subtitles">
            {t('contact-info.subtitle2')}
          </h3>
          <a
            href="https://twitter.com/janakaSteph"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-icons" src={twitter} alt="twitter logo"/>
          </a>

          <a
            href="https://www.linkedin.com/in/stephane-roche"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-icons" src={linkedin} alt="linkedin logo"/>
          </a>

          <a
            href="https://keybase.io/janakasteph"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-icons" src={keybase} alt="keybase logo"/>
          </a>

          <a
            href="assets/pgp_roche_33659843.asc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-icons" src={pgp} alt="pgp logo"/>
          </a>
        </div>
      </section>

      <section className="form" id="contact-form">
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(2, t('contact-form.errors.tooShort'))
              .max(50, t('contact-form.errors.tooLong'))
              .required(t('contact-form.errors.required')),
            email: Yup.string()
              .email(t('contact-form.errors.emailInvalid'))
              .required(t('contact-form.errors.required')),
            message: Yup.string()
              .max(2000, t('contact-form.errors.tooLong'))
              .required(t('contact-form.errors.required')),
          })}
          onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
            axios
              .post('/send-email', values)
              .then(() => {
                actions.resetForm({values: initialValues})
              })
              .then(() => {
                swal({
                  title: t('emailSent.title'),
                  text: t('emailSent.text'),
                  icon: 'success',
                })
                  .then(() => {
                    actions.setSubmitting(false)
                  })
              })
              .catch((error) => {
                log.error('Error while submitting email form')
                log.error(error.response)
              })
          }}
        >
          {() => (
            <Form>
              <Field
                name="name"
                placeholder={t('contact-form.placeholders.name')}
                type="text"
              />
              <p>
                <ErrorMessage name="name"/>
              </p>

              <Field
                name="email"
                placeholder="E-mail"
                type="email"
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
                {t('send')}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

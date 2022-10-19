import React from 'react'
import log from 'loglevel'
import {useTranslation} from 'react-i18next'
import {Formik, Field, Form, ErrorMessage, FormikHelpers} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
// @ts-ignore
import swal from '@sweetalert/with-react'
import {Helmet} from 'react-helmet'
import keybase from '../assets/icons/keybase.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pgp from '../assets/icons/pgp.svg'
import twitter from '../assets/icons/twitter.svg'

type FormValues = {
  from_name: string
  from_email: string
  message: string
}

const initialValues: FormValues = {
  from_name: '',
  from_email: '',
  message: '',
}

export const Contact: React.FC = () => {
  const {t, i18n} = useTranslation(['Contact', 'Meta'])

  // @ts-ignore
  return (
    <>
      <Helmet>
        <title>{t('Meta:title.contact')}</title>
        <meta name="description" content={t('Meta:description.contact')}/>
        {i18n.language === 'fr'
          ? <link rel="canonical" href="https://www.bitcoin-studio.com/fr/contact"/>
          : <link rel="canonical" href="https://www.bitcoin-studio.com/contact"/>}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.bitcoin-studio.com",
              "name": "Bitcoin Studio",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "bitcoin-studio@protonmail.com",
                "contactType": "Customer service"
              }
            }
          `}
        </script>
      </Helmet>

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
            <a href="m&#97;ilto&#58;bitc&#111;&#105;n&#37;2&#68;st&#117;d%69o&#64;pro%&#55;&#52;&#111;nm%61%69l&#46;co&#109;">
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
              href={`${process.env.PUBLIC_URL}/assets/pgp_roche_33659843.asc`}
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
              from_name: Yup.string()
                .trim()
                .min(2, t('contact-form.errors.tooShort'))
                .max(50, t('contact-form.errors.tooLong'))
                .required(t('contact-form.errors.required')),
              from_email: Yup.string()
                .trim()
                .email(t('contact-form.errors.emailInvalid'))
                .required(t('contact-form.errors.required')),
              message: Yup.string()
                .trim()
                .max(2000, t('contact-form.errors.tooLong'))
                .required(t('contact-form.errors.required')),
            })}
            onSubmit={async (values: FormValues, actions: FormikHelpers<FormValues>) => {
              const data = {...values,
                to_email: 'bitcoin-studio@protonmail.com',
                subject: 'Bitcoin Studio Website Form'}

              axios
                .post(`${process.env.REACT_APP_SEND_EMAIL_URL}`, data)
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
                  log.error(error)
                })
            }}
          >
            {() => (
              <Form>
                <Field
                  name="from_name"
                  placeholder={t('contact-form.placeholders.name')}
                  type="text"
                />
                <p>
                  <ErrorMessage name="from_name"/>
                </p>

                <Field
                  name="from_email"
                  placeholder="E-mail"
                  type="email"
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
                  {t('send')}
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  )
}

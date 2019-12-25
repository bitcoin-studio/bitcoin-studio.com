import * as React from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import axios from 'axios'
import * as swal from '@sweetalert/with-react'
import keybase from '../assets/icons/keybase.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pgp from '../assets/icons/pgp.svg'
import twitter from '../assets/icons/twitter.svg'

interface FormValues {
  name: string;
  email: string;
  message: string;
}

function Contact({t}: WithTranslation) {

  const initialValues: FormValues =
    {
      name: '',
      email: '',
      message: ''
    }

  return (
    <div className={'page page--xs'} id={'contactPage'}>
      <div className={'hero'} id={'contact-hero'}>
        <h1>
          {t('title')}
        </h1>
      </div>

      <section id={'contact-info'}>
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('contact-info.title')}</h2>
        <p>
          {t('contact-info.p')}
        </p>

        <div id={'contact-info-links'}>
          <h3 className={'contact-subtitles'}>
            {t('contact-info.subtitle1')}
          </h3>
          <a href="m&#97;ilto&#58;bitc&#111;&#105;n&#37;2&#68;st&#117;d%69o&#64;pro%&#55;&#52;&#111;nm%61%69l&#46;co&#109;">
            <span className="e-mail" data-user="oiduts-nioctib" data-website="moc.liamnotorp"/>
          </a>

          <h3 className={'contact-subtitles'}>
            {t('contact-info.subtitle2')}
          </h3>
          <a href={'https://twitter.com/janakaSteph'} target={'_blank'}>
            <img className={'contact-icons'} src={twitter} alt="twitter logo"/>
          </a>

          <a href={'https://www.linkedin.com/in/stephane-roche'} target={'_blank'}>
            <img className={'contact-icons'} src={linkedin} alt="linkedin logo"/>
          </a>

          <a href={'https://keybase.io/janakasteph'} target={'_blank'}>
            <img className={'contact-icons'} src={keybase} alt="keybase logo"/>
          </a>

          <a href={'assets/pgp_roche_33659843.asc'} target={'_blank'}>
            <img className={'contact-icons'} src={pgp} alt="pgp logo"/>
          </a>
        </div>
      </section>

      <section className={'form'} id={'contact-form'}>
        <Formik
          initialValues={initialValues}
          validationSchema={object().shape({
            name: string()
              .min(2, t('contact-form.errors.tooShort'))
              .max(50, t('contact-form.errors.tooLong'))
              .required(t('contact-form.errors.required')),
            email: string()
              .email(t('contact-form.errors.emailInvalid'))
              .required(t('contact-form.errors.required')),
            message: string()
              .max(2000, t('contact-form.errors.tooLong'))
              .required(t('contact-form.errors.required'))
          })}
          onSubmit={(values: FormValues, actions) => {
            axios
              .post("/send-email", values)
              .then(() => {
                actions.resetForm({values: initialValues})
              })
              .then(() => {
                swal({
                  title: t('emailSent.title'),
                  text: t('emailSent.text'),
                  icon: "success",
                })
                  .then(() => {
                    actions.setSubmitting(false)
                  })
              })
              .catch(error => {
                console.log('Error while submitting email form ')
                console.log(error)
              })
          }}
          >
          {() => (
            <Form
              role="form"
              action={'/send-email'}
              method="post"
            >
              <Field
                name="name"
                type="text"
                id="name"
                placeholder={t('contact-form.placeholders.name')}
                required
              />
              <p>
                <ErrorMessage name="name" />
              </p>

              <Field
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                required
              />
              <p>
                <ErrorMessage name="email" />
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
                <ErrorMessage name="message" />
              </p>

              <button
                className="btn-yellow"
                id="submit"
                name="submit"
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

export default  withTranslation('Contact')(Contact)
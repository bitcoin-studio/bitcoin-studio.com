import * as React from 'react'
import {Trans, withNamespaces} from 'react-i18next'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import {object, string} from 'yup'
import axios from 'axios'
import * as swal from '@sweetalert/with-react'
import i18n from 'i18next'

interface IProps {
  t: ((string) => string)
}

interface IState {
  selectedOffer: string;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

class Workshops extends React.Component<IProps, IState> {

  constructor(props) {
    super(props)
    this.state = {
      selectedOffer: '100'
    }
    this.handleLinkClick = this.handleLinkClick.bind(this)
    this.handleRegisterWorkshop = this.handleRegisterWorkshop.bind(this)
    this.handleOfferRadio = this.handleOfferRadio.bind(this)
  }

  handleLinkClick(e, id) {
    e.preventDefault()
    let el = document.getElementById(id)
    el.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  handleOfferRadio(e) {
    let registerOfferPrice = document.getElementById('registerOfferPrice')
    this.setState({
      selectedOffer: e.target.value
    }, () => {
      // @ts-ignore
      registerOfferPrice.value = this.state.selectedOffer
    })
  }

  handleRegisterWorkshop(e, t) {
    const initialValues: FormValues =
      {
        name: '',
        email: '',
        message: '',
      }

    swal({
      content: (<Formik
        initialValues={initialValues}
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
        onSubmit={(values: FormValues, actions) => {
          axios
            .post('/send-email', values)
            .then(() => {
              actions.resetForm({values: initialValues})
            })
            .then(() => {
              actions.setSubmitting(false)
            })
            .then(() => {
              swal({
                content: (
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
                          onClick={this.handleOfferRadio}
                          value="100"
                        />
                        <label htmlFor="training1day">1 Day Training - 100€</label>
                      </div>
                      <div>
                        <input
                          id="training2days"
                          type="radio"
                          name="training"
                          onClick={this.handleOfferRadio}
                          value="150"
                        />
                        <label htmlFor="training2days">2 Days Training - 150€</label>
                      </div>
                    </div>
                    <div id={'buttons'}>
                      <button className={'swal-button swal-button--cancel'} onClick={() => swal.close()}>
                        {t('next-session.registerNow.emailSent.close')}
                      </button>
                      <form method="POST" action="https://nodes.bitcoin-studio.com/api/v1/invoices">
                        <input type="hidden" name="storeId" value="BGdJzfMmXohC7J731eVuPBuDdWH3fZqBiitrN6HwGoeu"/>
                        <input id={'registerOfferPrice'} type="hidden" name="price" value={this.state.selectedOffer}/>
                        <input type="hidden" name="currency" value="EUR"/>
                        <input type="hidden" name="checkoutDesc" value="Training"/>
                        <input type="hidden" name="notifyEmail" value="rstephane@protonmail.com"/>
                        <input type="hidden" name="browserRedirect" value="https://www.bitcoin-studio.com"/>
                        {(i18n.language === 'fr') && (<input type="hidden" name="checkoutQueryString" value={'lang=fr-FR'}/>)}
                        <input type="image" src="https://nodes.bitcoin-studio.com/img/paybutton/pay.svg" name="submit"
                               alt="Pay with BTCPay, Self-Hosted Bitcoin Payment Processor"/>
                      </form>
                    </div>
                  </div>),
                icon: 'success',
                button: false
              })
            })
            .catch(error => {
              console.log('Error while submitting email form ', error.response)
            })
        }}
      >
        {(values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting) => (
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
                className="btnYellowStyle"
                id="submit"
                name="submit"
                type="submit"
              >
                {t('next-session.registerNow.sendMail')}
              </button>
            </Form>
          </div>
        )}
      </Formik>),
      button: false,
    })
  }

  render() {
    const {t} = this.props
    return (
      <div id={'workshopPage'}>

        <div className={'hero'}>
          <h1>{t('title')}</h1>
          <p>{t('hero')}</p>
        </div>

        <section id="workshopFlyer">
          <img src={'assets/img/workshop_img.jpg'} alt="workshops"/>

          <div id={'teaserWorkshop'}>
            <p>
              {t('teaserWorkshop.1')}<br/>
              {t('teaserWorkshop.2')}<br/>
              {t('teaserWorkshop.3')}
            </p>
          </div>
        </section>

        <section id={'masterTheKing'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>{t('masterTheKing.title')}</h2>
          <p>{t('masterTheKing.p1')}</p>
          <p>{t('masterTheKing.p2')}</p>
        </section>

        <section id="offers">
          <section id={'next-sessions'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('next-session.title')}</h2>
            <p id={'next-session-p'}>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t1')}</span>
                <span>
                  <Trans i18nKey={'next-session.p1'}>
                    0 <a href={'#bitcoin-programming-workshop'}
                         onClick={(e) => this.handleLinkClick(e, 'bitcoin-programming-workshop')}>{'xxx'}</a>
                    2 <a href={'#lightning-workshop'} onClick={(e) => this.handleLinkClick(e, 'lightning-workshop')}>{'xxx'}</a>
                    4
                  </Trans>
                </span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t2')}</span>
                <span>{t('next-session.p2')}</span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t3')}</span>
                <span>
                  <Trans i18nKey={'next-session.p3'}>
                    <a href="https://goo.gl/maps/adzSdmLqrBjCA9BbA" target={'_blank'}>xx</a>
                  </Trans>
                </span>
              </span>
              <span className={'next-session-row'}>
                <span className={'next-session-t'}>{t('next-session.t4')}</span>
                <span>{t('next-session.p4')}</span>
              </span>
            </p>
            <div id={'buttonRegisterWorkshop'}>
              <button
                className="btnYellowStyle"
                onClick={(e) => this.handleRegisterWorkshop(e, t)}
              >
                {t('next-session.registerNow.button')}
              </button>
            </div>
          </section>

          {/* Bitcoin Introduction Workshop */}
          <section id={'bitcoin-intro-workshop'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('intro-offer.title')}</h2>
            <h3 className={'offers-h3'}>{t('intro-offer.duration')}</h3>

            <div>
              <h3>{t('intro-offer.goals.title')}</h3>
              <p>{t('intro-offer.goals.p1')}</p>
            </div>

            <div>
              <h3>{t('intro-offer.public.title')}</h3>
              <p>{t('intro-offer.public.p1')}</p>
            </div>

            <div>
              <h3>{t('intro-offer.programme.title')}</h3>
              <p>{t('intro-offer.programme.p1')}</p>
              <p>{t('intro-offer.programme.p2')}</p>
              <p>{t('intro-offer.programme.p3')}</p>
              <p>{t('intro-offer.programme.p4')}</p>
            </div>
          </section>

          {/* Bitcoin Programming Workshop */}
          <section id={'bitcoin-programming-workshop'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('programming-offer.title')}</h2>
            <h3 className={'offers-h3'}>{t('programming-offer.duration')}</h3>

            <div>
              <h3>{t('programming-offer.goals.title')}</h3>
              <p>{t('programming-offer.goals.p1')}</p>
            </div>

            <div>
              <h3>{t('programming-offer.public.title')}</h3>
              <p>
                <Trans i18nKey={'programming-offer.public.p1'}>
                  0 <a href={'#bitcoin-intro-workshop'} onClick={(e) => this.handleLinkClick(e, 'bitcoin-intro-workshop')}>{'xxx'}</a>
                  2
                </Trans>
              </p>
              <p>
                <Trans i18nKey={'programming-offer.public.p2'}>
                  0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                  2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                  4
                </Trans>
              </p>
            </div>

            <div>
              <h3>{t('programming-offer.programme.title')}</h3>
              <p>{t('programming-offer.programme.p1')}</p>
              <p>{t('programming-offer.programme.p2')}</p>
              <p>{t('programming-offer.programme.p3')}</p>
              <p>{t('programming-offer.programme.p4')}</p>
            </div>
          </section>

          {/* Lightning Workshop */}
          <section id={'lightning-workshop'}>
            <div className="hr hr75pc">
              <hr/>
            </div>
            <h2 className={'offers-h2'}>{t('ln.title')}</h2>
            <h3 className={'offers-h3'}>{t('ln.duration')}</h3>

            <div>
              <h3>{t('ln.goals.title')}</h3>
              <p>{t('ln.goals.p1')}</p>
            </div>

            <div>
              <h3>{t('ln.public.title')}</h3>
              <p>
                <Trans i18nKey={'ln.public.p1'}>
                  0 <a href={'#bitcoin-programming-workshop'}
                       onClick={(e) => this.handleLinkClick(e, 'bitcoin-programming-workshop')}>{'xxx'}</a>
                  2
                </Trans>
              </p>
              <p>
                <Trans i18nKey={'ln.public.p2'}>
                  0 <a href="https://keybase.pub/janakasteph/Bitcoin-VirtualMachine/" target={'_blank'}>Ubuntu Virtual Machine image</a>
                  2 <a href="https://app.vagrantup.com/bitcoin-studio/boxes/Bitcoin-VirtualMachine" target={'_blank'}>Vagrant box</a>
                  4
                </Trans>
              </p>
            </div>

            <div>
              <h3>{t('ln.programme.title')}</h3>
              <p>{t('ln.programme.p1')}</p>
              <p>{t('ln.programme.p2')}</p>
              <p>{t('ln.programme.p3')}</p>
              <p>{t('ln.programme.p4')}</p>
            </div>

          </section>
        </section>
      </div>
    )
  }
}

export default withNamespaces('Workshops')(Workshops)
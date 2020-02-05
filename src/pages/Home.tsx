import React from 'react'
import {useTranslation} from 'react-i18next'
import software from '../assets/img/home_software_512.png'
import education from '../assets/img/home_education_512.png'
import training from '../assets/img/home_thought_512.png'
import consulting from '../assets/img/home_consulting_512.png'
import hosting from '../assets/img/home_hosting_512.png'
import {useMetaTitle} from '../hooks'

export const Home: React.FC = () => {
  const {t} = useTranslation('Home')
  useMetaTitle('A Company Dedicated To Bitcoin')

  return (
    <div className="page" id="homePage">
      <section id="bgHome">
        <p>
          {t('hero')}
        </p>
      </section>

      <section id="services">
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('services.title')}</h2>
        <p>{t('services.p1')}</p>
        <p>{t('services.p2')}</p>
      </section>

      <section id="servicesDetails">
        <div className="serviceItem">
          <img src={software} alt="software development"/>
          <p>
            <span><em>{t('servicesDetails.1.title')}</em></span>
            {t('servicesDetails.1.desc')}
          </p>
        </div>


        <div className="serviceItem">
          <img src={education} alt="workshops"/>
          <p>
            <span><em>{t('servicesDetails.2.title')}</em></span>
            {t('servicesDetails.2.desc')}
          </p>
        </div>

        <div className="serviceItem">
          <img src={training} alt="in-house training"/>
          <p>
            <span><em>{t('servicesDetails.3.title')}</em></span>
            {t('servicesDetails.3.desc')}
          </p>
        </div>

        <div className="serviceItem">
          <img src={consulting} alt="private consulting"/>
          <p>
            <span><em>{t('servicesDetails.4.title')}</em></span>
            {t('servicesDetails.4.desc')}
          </p>
        </div>

        <div className="serviceItem">
          <img src={hosting} alt="node as a service"/>
          <p>
            <span><em>{t('servicesDetails.5.title')}</em></span>
            {t('servicesDetails.5.desc')}
          </p>
        </div>
      </section>

      <section id="network-homePage">
        <div className="hr">
          <hr/>
        </div>
        <h2>{t('network.title')}</h2>
        <p>
          {t('network.p1')}
        </p>
        <p>
          {t('network.p2')}
        </p>
      </section>


      <section id="call2action-homePage">
        <div id="call2action_ribbon">
          <h3>{t('call2action.title')}</h3>
          <div id="call2action_text">
            <span>{t('call2action.p1')}</span>
            <span>{t('call2action.p2')}</span>
          </div>
        </div>

        <div id="call2action_ribbon_prop" className="">
          <div className="ribbon_prop_1">
            <div className="inside">
              <a href="m&#97;ilto&#58;bitc&#111;&#105;n&#37;2&#68;st&#117;d%69o&#64;pro%&#55;&#52;&#111;nm%61%69l&#46;co&#109;">
                <span className="clickhere">
                  {t('call2action.circle.1')}
                </span>
                <span className="request">
                  {t('call2action.circle.2')}
                </span>
                <span className="proposal">
                  {t('call2action.circle.3')}
                </span>
              </a>
            </div>
          </div>

          <div className="ribbon_prop_2">
            <div className="inside">
              <span className="clickhere">
                {t('call2action.circle.1')}
              </span>
              <span className="request">
                {t('call2action.circle.2')}
              </span>
              <span className="proposal">
                {t('call2action.circle.3')}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

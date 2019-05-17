import * as React from 'react'
import { withNamespaces } from 'react-i18next'

interface IProps {
  t: ((string) => string)
}

class Footer extends React.Component<IProps, {}> {
  render() {
    const {t} = this.props
    return (
     <footer className="footer">
       <div id="services_footer">
         <h2>{t('col1.title')}</h2>
         <nav>
           <ul>
             <li><a href="">{t('col1.1')}</a></li>
             <li><a href="./about">{t('col1.2')}</a></li>
             <li><a href="./resources">{t('col1.3')}</a></li>
             <li><a href='&#109;ailto&#58;&#114;s&#116;eph%61ne&#37;40%70ro%74%6Fn&#37;6D&#97;il&#46;co&#37;6&#68;'>{t('col1.4')}</a></li>
           </ul>
         </nav>
       </div>

       <div id="connect">
         <h2>{t('col2.title')}</h2>
         <nav>
           <ul>
             <li><a target="_blank" href='https://github.com/bitcoin-studio'>{t('col2.1')}</a></li>
             <li><a target="_blank" href="http://twitter.com/JanakaSteph">{t('col2.2')}</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/in/stephane-roche">{t('col2.3')}</a></li>
             <li><a target="_blank" href='https://janakasteph.keybase.pub/'>{t('col2.4')}</a></li>
           </ul>
         </nav>
       </div>
     </footer>
    )
  }
}

// @ts-ignore
export default withNamespaces('Footer')(Footer)
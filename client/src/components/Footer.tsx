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
             <li><a href='m&#97;ilto&#58;bitc&#111;&#105;n&#37;2&#68;st&#117;d%69o&#64;pro%&#55;&#52;&#111;nm%61%69l&#46;co&#109;'>{t('col1.4')}</a></li>
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
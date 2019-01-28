import * as React from 'react'

class Footer extends React.Component {
  render() {
    return (
     <footer className="footer">
       <div id="services_footer">
         <h2>SERVICES</h2>
         <nav>
           <ul>
             <li><a href="">Homepage</a></li>
             <li><a href="./about">About our Studio</a></li>
             <li><a href="./resources">Resources</a></li>
             <li><a href='&#109;ailto&#58;&#114;s&#116;eph%61ne&#37;40%70ro%74%6Fn&#37;6D&#97;il&#46;co&#37;6&#68;'>Contact Information</a></li>
           </ul>
         </nav>
       </div>

       <div id="connect">
         <h2>CONNECT</h2>
         <nav>
           <ul>
             <li><a target="_blank" href='https://github.com/bitcoin-studio'>Github</a></li>
             <li><a target="_blank" href="http://twitter.com/JanakaSteph">Twitter</a></li>
             <li><a target="_blank" href="https://www.linkedin.com/in/stephane-roche">Linkedin</a></li>
             <li><a target="_blank" href='https://janakasteph.keybase.pub/'>Keybase</a></li>
           </ul>
         </nav>
       </div>
     </footer>
    )
  }
}

export default Footer
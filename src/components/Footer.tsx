import * as React from 'react'
import {Link, navigate, mergeQuery, setQuery} from 'fuse-react'

class Footer extends React.Component {
  render() {
    return (
     <footer className="footer">
       <div id="services_footer">
         <h2>SERVICES</h2>
         <nav>
           <ul>
             <li><a href="http://teixido.co/">Homepage</a></li>
             <li><a href="http://teixido.co/studio">About our Studio</a></li>
             <li><a href="http://teixido.co/work">Selected Works</a></li>
             <li><a href="mailto:hello@teixido.co">Contact Information</a></li>
           </ul>
         </nav>
       </div>

       <div id="connect">
         <h2>CONNECT</h2>
         <nav>
           <ul>
             <li><a href="mailto:hello@teixido.co">Email us at hello@bitcoin-studio-one.co</a></li>
             <li><a target="_blank" href="http://twitter.com/Teixido">Follow @JanakaSteph on Twitter</a></li>
             <li><a target="_blank" href="http://www.flickr.com/photos/juanmateixido">Flickr Stream</a></li>
             <li><a target="_blank" href="mailto:rstephane@teixido.co">Work with Us</a></li>
           </ul>
         </nav>
       </div>
     </footer>
    )
  }
}

export default Footer
import * as React from 'react'

//import { Button, Intent } from "@blueprintjs/core";

class Home extends React.Component {
  render() {
    return (
      <div className={'homePage'}>
        <div className={'hero'}>
          <h1>BITCOIN STUDIO #1</h1>
          <p>
            Bitcoin expertise ...and more
            Extensive knowledge on blockchain tech
            A network of real experts
            <br/>
            a branding, web/interface design studio that blah blah blah. In all seriousness, we can pretty much write whatever we want here and chances are, nobody will notice. The itsy bitsy spider went up the water spout. Down came the rain, and washed the spider out. See what we mean? Scroll down and find out why this happens...
          </p>
        </div>

        <div className={'content'}>
          <div className={'services'}>
            <h2>SERVICES</h2>
            <ul>
              <li>
                Bitcoin workshops
                <ul>
                  <li>Practical: Bitcoin workshop 1 day</li>
                  <li>Essentials: Bitcoin workshop 2 days</li>
                  <li>In-depth: Bitcoin workshop 5 days</li>
                </ul>
              </li>

              <li>Consulting for companies</li>
              <li>Private consulting for individuals</li>
              <li>Custom Bitcoin development (layer 1, layer 2)</li>
              <li>Bitcoin server / node installation / Node as a service</li>
            </ul>
          </div>

          <div className={"stuff"}>
            <h2>PEOPLE SIMPLY DON’T READ WEBSITES ANYMORE</h2>
            <p>
              They just scan it. They glance at it in the same way you glance at advertisements in a magazine. Don’t
              believe us? Just think about this for a second. Think about your own browsing behavior. How many times have
              you Googled a website, clicked on one of the first results, waited for the page to load, scrolled down,
              scrolled back up and then gone back to the results page? We’re guessing more than once.

              Ten years ago you were wondering whether you even needed a website. Nowadays the question is: What can you
              do to your website so it will stop being invisible to your potential customers?

              You need to be authentic — you can’t fake it anymore. The new consumer is choosier and more knowledgeable
              than ever before. They just won’t consume brands, nor spend time on websites that don’t ooze authenticity,
              passion and quality. Why should they? They’ve got so many options to choose from and so little time to make
              their choices.

              This is where we come in. Through a streamlined, five-milestone process we will PLAN, DESIGN, BUILD, LAUNCH
              and MANAGE your professional and high-impact online presence for your company.
            </p>
          </div>
        </div>


        <div id="call2action" className="call2action">
          <div id="call2action_ribbon">
            <div className=""><h1>STOP BEING INVISIBLE TODAY</h1></div>
            <div className=""><p>Are you tired of being invisible to your customers? Let’s talk for
              real then.</p></div>
            <div className="">
              <p><a href="mailto:hello@bitcoin-studio.co">Request Proposal</a></p>
            </div>
          </div>

          <div id="call2action_ribbon_prop" className="">
            <div className="ribbon_prop_1">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <h1><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></h1>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>

            <div className="ribbon_prop_2">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <h1><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></h1>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Home
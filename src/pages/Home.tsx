import * as React from 'react'
//import { Button, Intent } from "@blueprintjs/core";

class Home extends React.Component {
  render() {
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'}>
          <h1>BITCOIN STUDIO #1</h1>
          <p>
            Expertise on blockchain tech, particularly Bitcoin. A network of real experts, design studio, web/interface
            that blah blah blah. In all seriousness, we can pretty much write whatever we want here and chances are,
            nobody will notice. The itsy bitsy spider went up the water spout. Down came the rain, and washed the spider
            out. See what we mean? Scroll down and find out why this happens...
          </p>
        </div>

        <section id={'services-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>THE BEST BITCOIN STUDIO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>
        </section>

        <section id={'stuff-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>WHEN THE WEB MEETS BITCOIN</h2>
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
        </section>

        <section id={'workshops-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>WORD CLASS WORKSHOPS</h2>
          <p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi, deleniti dicta eos error eum fugit, officiis quaerat quas quibusdam provident?</span>
            <span>Alias culpa magni obcaecati tempore. Alias aspernatur incidunt nam quas reprehenderit ut voluptatum. Ab adipisci aut  magni modi molestias nam perferendis quibusdam tenetur, voluptatibus.</span>
            <span>Adipisci aliquam, animi beatae cum delectus deleniti dignissimos exercitationem fugit ipsam iure laborum  officia sint velit veniam. Cumque debitis eius est ipsam itaque iusto molestiae mollitia rem!</span>
            <span>Architecto corporis deleniti dolorum eos esse est eveniet, ex exercitationem fugit laboriosam magnam. Itaque maxime nobis odio quasi, quia repellat rerum! Illo.</span>
          </p>
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
        </section>


        <section id="call2action-homePage">
          <div id="call2action_ribbon">
            <h1>STOP BEING A FOLLOWER</h1>
            <p>Are you tired of the financial system? Let’s talk for real then.</p>
          </div>

          <div id="call2action_ribbon_prop" className="">
            <div className="ribbon_prop_1">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>

            <div className="ribbon_prop_2">
              <div className="inside">
                <span><a href="mailto:hello@bitcoin-studio.co" className="clickhere">Click Here to</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="request">REQUEST</a></span>
                <span><a href="mailto:hello@bitcoin-studio.co" className="proposal">a Proposal</a></span>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home
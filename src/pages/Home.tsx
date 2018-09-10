import * as React from 'react'

//import { Button, Intent } from "@blueprintjs/core";

class Home extends React.Component {
  render() {
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'} className={'hero'}>
          <h1>BITCOIN STUDIO #1</h1>
          <p>
            Expertise on blockchain tech, particularly Bitcoin. A network of real experts, design studio, web/interface
            that blah blah blah. In all seriousness, we can pretty much write whatever we want here and chances are,
            nobody will notice. The itsy bitsy spider went up the water spout. Down came the rain, and washed the spider
            out. See what we mean? Scroll down and find out why this happens...
          </p>
        </div>

        <section id={'pictures-homePage'}>
          <figure id={'picture1'}>
            <img src="https://loremflickr.com/760/420" alt="Tree frog"/>
            <figcaption>Random placeholder carefully chosen</figcaption>
          </figure>

          <figure id={'picture2'}>
            <img src="https://loremflickr.com/436/420" alt="Tree frog"/>
            <figcaption>Random placeholder carefully chosen</figcaption>
          </figure>
        </section>

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

          <p>Consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dicta
            expedita magni minus
            numquam perspiciatis quod sint sunt vero? Laboriosam non pariatur repellat repellendus similique. Inventore
            nemo quidem vitae. </p>
        </section>

        <section id={'servicesDetails-homePage'}>
          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Software development</em></span>
              Bitcoin Studio reconcile Bitcoin with web development (mainly Typescript, React, Redux), offering custom
              software development on layer 1 and 2.
              System architecture, complex transaction, scripts, …
            </p>
          </div>


          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Workshops</em></span>
              We are offering three Bitcoin trainings, Practical, Essentials and In-depth, each of them is gradually more thorough.
              They are taking place in the beautiful city of Lisbon, given by instructor Stéphane Roche.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>In-house trainings</em></span>
              Bitcoin trainings can be given directly at your office, tailored to your specific needs.
              Prepare yourself for the financial revolution!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Private consulting</em></span>
              Bitcoin Studio can respond to your specific needs.
              Key management best practices, endeavors to recover lost coins, recover coins of Bitcoin forks, etc.
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Node as a Service</em></span>
              Partnering with the French company ADAPP, we host and manage all kind of nodes (full nodes, LN nodes,
              BTCpay).
              Our unique deployment stack allows for easy setup, safety and a production-ready infrastructure.
            </p>
          </div>
        </section>

        <section id={'workshops-homePage'}>
          <div className="hr">
            <hr/>
          </div>
          <h2>A NETWORK OF TALENTED PEOPLE</h2>
          <p>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus commodi, deleniti dicta eos error eum fugit, officiis quaerat quas quibusdam provident?</span>
            <span>Alias culpa magni obcaecati tempore. Alias aspernatur incidunt nam quas reprehenderit ut voluptatum. Ab adipisci aut  magni modi molestias nam perferendis quibusdam tenetur, voluptatibus.</span>
            <span>Adipisci aliquam, animi beatae cum delectus deleniti dignissimos exercitationem fugit ipsam iure laborum  officia sint velit veniam. Cumque debitis eius est ipsam itaque iusto molestiae mollitia rem!</span>
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam at cumque esse ipsam
            itaque laboriosam laudantium molestias reiciendis rem sequi, similique sint, sit suscipit totam ullam,
            vitae?</p>
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
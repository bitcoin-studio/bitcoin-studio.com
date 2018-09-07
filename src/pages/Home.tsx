import * as React from 'react'
//import { Button, Intent } from "@blueprintjs/core";

class Home extends React.Component {
  render() {
    return (
      <div id={'homePage'}>

        <div id={'hero-homePage'} className={"hero"}>
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
            <img src="https://loremflickr.com/760/420" alt="Tree frog" />
            <figcaption>Random placeholder carefully chosen</figcaption>
          </figure>

          <figure id={'picture2'}>
            <img src="https://loremflickr.com/436/420" alt="Tree frog" />
            <figcaption>Random placeholder carefully chosen</figcaption>
          </figure>
        </section>

        <section id={'services-homePage'}>
          <div className="hr"><hr/></div>
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
              <span><em>When the web meets Bitcoin</em></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!
            </p>
          </div>


          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Help people grasp the tech</em></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Help companies build products</em></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Node installation</em></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!
            </p>
          </div>

          <div className={'serviceItem'}>
            <img src="https://loremflickr.com/200/150" alt="img22"/>
            <p>
              <span><em>Node as a Service</em></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam doloremque ex hic itaque non, perspiciatis totam voluptas? Debitis doloribus nulla omnis quaerat quis reprehenderit similique totam ut veniam voluptate!
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

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet aperiam at cumque esse ipsam itaque laboriosam laudantium molestias reiciendis rem sequi, similique sint, sit suscipit totam ullam, vitae?</p>
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
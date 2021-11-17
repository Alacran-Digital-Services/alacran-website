import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{ textAlign: `center` }}>
      <StaticImage
        src="../images/scorpion-tail.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>Alacrán Digital Services</h1>
      <h2>Poised for Growth. Building the Future.</h2>
    </div>

    <p>We take a custom-tailored approach to build fast, responsive websites that get the job done.</p>
    <p>Our engineering team tirelessly finds the latest, most effective solutions to build your site and tell your story, saving you cookie cutter platform headaches and ensuring the vision of your website comes to life.</p>
    <button>Schedule your consultation call</button>
    <hr></hr>
    <h2>Our Services</h2>
    <p>
      We build and host websites for businesses and only build what makes sense. We focus on speed of your site and guarantee an excellent visitor experience.
    </p>
    <p>Services we offer include:</p>
    <ul>
      <li>Contact Forms</li>
      <li>Photo Galleries</li>
      <li>Blogs</li>
      <li>Email Automation</li>
    </ul>
    <ul>
      <li>Text Automation</li>
      <li>SEO</li>
      <li>Payment Processing</li>
      <li>And More</li>
    </ul>
    <button>Get a quote today</button>
    <hr></hr>

    <h2>Client Testimonials</h2>
    <p>We pride ourselves in our service to our clients. Our mission is to make technology accessible to everyone and empower businesses in the digital age.</p>
    <p>Not knowing how to effectively build a website shouldn't hold you back from accomplishing your dreams. Work with us and let us handle the technical details to share the story of your business. Here's what our clients are saying.</p>

    <div>[container with various quotes from clients]</div>

    <hr></hr>

    <h2>About Us</h2>
    <p>A paragraph about Alacran Digital Services</p>
    <p>An image of the founder.</p>
    <p>A paragraph of the founder.</p>

    <button>Schedule a call with us</button>

    <p>[insert a blog on the tech we use, our way of working, and our outlook on the world]</p>

    <p>Add a snazzy end line that ties in our brand. Something like, together, our resilience and readiness will allow us to face any challenge. Because we're like a scorpion. But obviously needs to sound <em>waaaaay</em> better and catchy than that.</p>
  </Layout>
)

export default IndexPage

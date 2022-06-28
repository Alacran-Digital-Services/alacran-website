import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/global.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="homeWelcomeScreen">
      <StaticImage
        src="../images/Alacran_Logo_FC_Large.png"
        width={300}
        quality={95}
        placeholder="none"
        formats={["auto", "webp", "avif"]}
        alt="The Alacran Studio Logo"
        style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}
      />
      <h1>alacrán studio</h1>
      <h2>Ready for what's next.</h2>
      <button className="primaryButton">start</button>
    </div>

    <div className="contentBlock">
      <h1 className="titleCopy">craft your story, grow your business</h1>
      <p>Alacrán Studio was built to serve communities and elevate their brand. With organized processes, thoughtful design, the latest technology, and accessible consultants, we strive to grow your digital presence to get in front of the audience that matters to you.</p>
      <div className="contentBlockFooter">
        <button className="primaryButton">schedule your consultation</button>
      </div>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">Organized Process</h2>

      <p>
        We create a personalized roadmap to navigate

        your organization’s journey and break through barriers.

        We meet our clients where they are and bring them to their highest potential.
      </p>

      <span>
        [image of scorpion finding a path up the mountain]
      </span>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">
        Thoughtful Design
      </h2>

      <p>
        Work with our experts to integrate best design practices that lead to results.

        Carefully craft designs that share your meaningful message to the world.
      </p>

      <span>
        [thoughtful design concepts, a scorpion thinking]
      </span>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">
        Latest Technology
      </h2>

      <p>
        We are passionate about fast, light-weight, high-ranking, and state-of-the-art tools and tech.

        Using the JAMstack, a new way to build headless sites, we incessantly chase innovation and distill it down to where our clients can most benefit.
      </p>

      <span>
        [scorpion on a rocket ship, stars, innovation, speed, state-of-the-art]
      </span>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">
        Accessible Consultants
      </h2>

{/* TODO: Change to mainFeature once we have appropriate assets. */}
      <div className="textAndImageBox--person">
        <p>
          We care about the individual. Partner with our expert consultant teams and rest assured there’s always a human on the other side.
        </p>
        <p>
          [two scorpions talking to each other, a scorpion talking to the counsel of elder scorpions]
        </p>
      </div>

      <div className="contentBlockFooter">
        <button className="primaryButton">Get Started Today</button>
      </div>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">Our Services</h2>
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
      <hr></hr>
    </div>

    <div className="contentBlock">
      <strong>Let alacrán studio tell your story.</strong>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">Client Testimonials</h2>
      <p>We pride ourselves in our service to our clients. Our mission is to make technology accessible to everyone and empower businesses in the digital age.</p>
      <p>Not knowing how to effectively build a website shouldn't hold you back from accomplishing your dreams. Work with us and let us handle the technical details to share the story of your business. Here's what our clients are saying.</p>
      <p>[container with various quotes from clients]</p>
      <hr></hr>
    </div>

    <div className="contentBlock">
      <h2 className="titleCopy">Meet The Team</h2>
      <p>Alacrán Studio was built with a passion for community. We saw the gap between our visionary entrepreneurial community and the realization of those dreams.

        We saw a gap between hopeful business owners and their technological presence. Our mission is to use our knowledge, tools, and technology to elevate their brand and expand their reach.</p>

      <div className="textAndImageBox--person">
        <div className="personTextContainer">
          <h3 className="personTextTitle">Team Member 1</h3>
          <h4>A Fun Little Subtitle</h4>
          <p>A paragraph of the founder. This is the second sentence in this paragraph. And then, there was a third. The fourth really added some nice flavor, then the second half delivered and closed.
          </p>
          <p>For style purposes, paragraphs for people shouldn't exceed much longer than this. This would be a bit too long, but is just fine in this example. Now, stop; you're done.</p>
        </div>
        <p className="personImage">An image of the founder.</p>
      </div>

      <div className="textAndImageBox--person">
        <p className="personImage">An image of a team member.</p>
        <div className="personTextContainer">
          <h3 className="personTextTitle">Team Member 2</h3>
          <p>A paragraph of the team member. This is the second sentence in this paragraph. And then, there was a third. The fourth really added some nice flavor, then the second half delivered and closed.</p>
        </div>
      </div>

      <div className="contentBlockFooter">
        <button className="primaryButton">schedule a call</button>
      </div>
    </div>

    <div className="contentBlock">
      <div className="textAndImageBox--blogHeader">
        <h1>The Alacrán Blog</h1>
        <StaticImage
          src="../images/Alacran_Logo_BLK_Small.png"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="The Alacran Studio Logo"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>

      <div className="blogContent">
        <p>
          - Organization
          - How do you craft ideas for someone?
          - Organization
          - How to use Notion to track business expenses
          - Design
          - How different colors interact together
          - Case Study
          - How we used Gatsby to build Device Fix Inc.’s website
        </p>
        <p>Add a snazzy end line that ties in our brand. Something like, together, our resilience and readiness will allow us to face any challenge. Because we're like a scorpion. But obviously needs to sound <em>waaaaay</em> better and catchy than that.</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

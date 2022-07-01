import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/global.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div style={{ textAlign: `center`, paddingTop: `1rem` }}>
      <StaticImage
        src="../images/Alacran_Logo_FC_Large.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>alacrán studio</h1>
    </div>

    <div className="contentBlocks">
      <div className="contentBlockContainer">
        <div className="contentBlockImage">
          <StaticImage
            src="../images/craftyourstory.png"
            alt="craft your story"
            height={300}
          ></StaticImage>
        </div>
        <div className="contentBlockText">
          <h1 className="titleCopy">craft your story, grow your business</h1>
          <p className="bodyCopy">
            Alacrán Studio was built to serve communities and elevate their
            brand. With organized processes, thoughtful design, the latest
            technology, and accessible consultants, we strive to grow your
            digital presence to get in front of the audience that matters to
            you.
          </p>
          <button className="primaryButton">
            schedule your free consultation
          </button>
        </div>
      </div>

      <div className="contentBlockContainer">
        <div className="contentBlockText">
          <h2 className="titleCopy">Organized Process</h2>
          <p className="bodyCopy">
            We create a personalized roadmap to navigate your organization’s
            journey and break through barriers. We meet our clients where they
            are and bring them to their highest potential.
          </p>
        </div>
        <div className="contentBlockImage">
          <StaticImage
            src="../images/organizedprocess.png"
            alt="craft your story"
            height={300}
          ></StaticImage>
        </div>
      </div>

      <div className="contentBlockContainer">
        <div className="contentBlockImage">
          <StaticImage
            src="../images/thoughtfuldesign.png"
            alt="craft your story"
            height={300}
          ></StaticImage>
        </div>
        <div className="contentBlockText">
          <h2 className="titleCopy">Thoughtful Design</h2>
          <p className="bodyCopy">
            Work with our experts to integrate best design practices that lead
            to results. Carefully craft designs that share your meaningful
            message to the world.
          </p>
        </div>
      </div>

      <div className="contentBlockContainer">
        <div className="contentBlockText">
          <h2 className="titleCopy">Latest Technology</h2>
          <p className="bodyCopy">
            We are passionate about fast, light-weight, high-ranking, and
            state-of-the-art tools and tech. Using the JAMstack, a new way to
            build headless sites, we incessantly chase innovation and distill it
            down to where our clients can most benefit.
          </p>
        </div>
        <div className="contentBlockImage">
          <StaticImage
            src="../images/latesttechnology.png"
            alt="craft your story"
            height={300}
          ></StaticImage>
        </div>
      </div>

      <div className="contentBlockContainer">
        <div className="contentBlockImage">
          <StaticImage
            src="../images/latesttechnology.png"
            alt="craft your story"
            height={300}
          ></StaticImage>
        </div>
        <div className="contentBlockText">
          <h2 className="titleCopy">Accessible Consultants</h2>
          <p className="bodyCopy">
            We care about the individual. Partner with our expert consultant
            teams and rest assured there’s always a human on the other side.
          </p>
          <button className="primaryButton">build your story today</button>
        </div>
      </div>

      <h2 className="titleCopy">Our Services</h2>
      <p>
        We build and host websites for businesses and only build what makes
        sense. We focus on speed of your site and guarantee an excellent visitor
        experience.
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
      <button className="primaryButton">get a quote today</button>
      <hr></hr>

      <strong>Let alacrán studio tell your story.</strong>
    </div>
    <h2 className="titleCopy">Client Testimonials</h2>
    <p>
      We pride ourselves in our service to our clients. Our mission is to make
      technology accessible to everyone and empower businesses in the digital
      age.
    </p>
    <p>
      Not knowing how to effectively build a website shouldn't hold you back
      from accomplishing your dreams. Work with us and let us handle the
      technical details to share the story of your business. Here's what our
      clients are saying.
    </p>

    <div>[container with various quotes from clients]</div>

    <hr></hr>

    <h2 className="titleCopy">About Us</h2>
    <p>
      Alacrán Studio was built with a passion for community. We saw the gap
      between our visionary entrepreneurial community and the realization of
      those dreams. We saw a gap between hopeful business owners and their
      technological presence. Our mission is to use our knowledge, tools, and
      technology to elevate their brand and expand their reach.
    </p>
    <p>An image of the founder.</p>
    <p>A paragraph of the founder.</p>

    <button className="primaryButton">schedule a call</button>

    <h1>Alacrán Blog</h1>

    <p>
      - Organization - How do you craft ideas for someone? - Organization - How
      to use Notion to track business expenses - Design - How different colors
      interact together - Case Study - How we used Gatsby to build Device Fix
      Inc.’s website
    </p>

    <p>
      Add a snazzy end line that ties in our brand. Something like, together,
      our resilience and readiness will allow us to face any challenge. Because
      we're like a scorpion. But obviously needs to sound <em>waaaaay</em>{" "}
      better and catchy than that.
    </p>
  </Layout>
)

export default IndexPage

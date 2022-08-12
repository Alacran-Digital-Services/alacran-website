import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../css/homeWelcomeScreen.scss"

class HomeWelcomeScreen extends React.Component {
  handleClick() {
    document.getElementById("firstHomeContent").scrollIntoView()
  }

  render() {
    return (
      <div className="homeWelcomeScreenContainer">
        <StaticImage
          src="../images/Alacran_Logo_FC_Large.png"
          width={300}
          quality={95}
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="The Alacran Studio Logo"
          className="homeLogo"
          style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}
        />
        <h1>alacrán studio</h1>
        <h3>Ready For What's Next</h3>
        <button className="startButton" onClick={() => this.handleClick()}>
          start
        </button>
      </div>
    )
  }
}

export default HomeWelcomeScreen

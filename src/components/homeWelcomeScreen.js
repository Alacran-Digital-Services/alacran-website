import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import "../css/homeWelcomeScreen.scss"

const HomeWelcomeScreen = () => {
	return (
		<div className='homeWelcomeScreenContainer'>
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
			<h2>Ready for what's next.</h2>
			<button className="startButton">start</button>
		</div>
	)
}

export default HomeWelcomeScreen

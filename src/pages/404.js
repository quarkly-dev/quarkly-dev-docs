import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				404 | Quarkly
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"404 | Quarkly"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/landing/q-og-1200.png"} />
			<link rel={"shortcut icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon.png?v=2020-09-25T11:53:45.486Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<meta name={"msapplication-TileImage"} content={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-270w.png?v=2020-09-25T11:53:45.477Z"} />
		</Helmet>
		<Components.MobileMenu />
		<Components.Header />
		<Box
			min-height="500px"
			display="flex"
			flex-direction="column"
			align-items="center"
			justify-content="center"
			color="--light"
			position="absolute"
			left="0px"
			right="0px"
			bottom="0px"
			top="80px"
		>
			<Text font="normal 900 132px/140px --fontFamily-googleSourceSansPro">
				404
			</Text>
			<Text margin="0px 0px 54px 0px" font="400 24px/30px sans-serif">
				Page Not Found
			</Text>
			<Link
				padding="8px 24px 8px 24px"
				background="--color-secondary"
				color="--dark"
				text-decoration-line="initial"
				font="--base"
				href="/"
				border-radius="26px"
			>
				Go Home
			</Link>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
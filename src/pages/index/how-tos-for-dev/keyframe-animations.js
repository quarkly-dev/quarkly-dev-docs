import React from "react";
import theme from "theme";
import { Theme, Link, Em, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/how-tos-for-dev/keyframe-animations"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MobileMenu>
			<Override slot="menu">
				<Override slot="item-404" display="none" />
			</Override>
		</Components.MobileMenu>
		<Components.Header />
		<Box display="flex" quarkly-title="Content">
			<Components.SidebarMenuDev />
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpSubheader>
					How to's
				</Components.HelpSubheader>
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Как делать анимации по ключевым кадрам (keyframes)
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					In the current version, it is possible to animate only a custom code component using{"  "}
					<Em>
						animation
					</Em>
					{" "}and{" "}
					<Em>
						keyframes
					</Em>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Here’s a step-by-step guide on how to apply rotating animation to an element:
				</Components.HelpParagraph>
				<Components.HelpListNumbered>
					<Components.HelpListItem>
						Create a code component. Click on the + button in the{" "}
						<Em>
							Project
						</Em>
						{" "}section of the{" "}
						<Em>
							Components
						</Em>
						{" "}tab.
					</Components.HelpListItem>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Import dependencies from styled-components into the component:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="import MyComponent from &quot;./MyComponent&quot;;" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Create a{" "}
							<Em>
								rotate
							</Em>
							{" "}variable with{" "}
							<Em>
								keyframes
							</Em>
							{" "}and styles:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="const rotate = keyframes`\\\\\\\\n  0% {\\\\\\\\n    transform: rotate(0deg);\\\\\\\\n    background-color: #ff4400;\\\\\\\\n  }\\\\\\\\n  50% {\\\\\\\\n    transform: rotate(180deg);\\\\\\\\n    background-color: #000000;\\\\\\\\n  }\\\\\\\\n  100% {\\\\\\\\n    transform: rotate(360deg);\\\\\\\\n    background-color: #ff4400;\\\\\\\\n  }\\\\\\\\n`;" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Create a component using styled-components:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="const Rotate = styled.div`\\\\\\\\n  display: inline-block;\\\\\\\\n  padding: 2rem 1rem;\\\\\\\\n  border-radius: 10px;\\\\\\\\n  font-size: 1.2rem;\\\\\\\\n  background: red;\\\\\\\\n`;" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Add the{" "}
							<Em>
								animation
							</Em>
							{" "}property to the{" "}
							<Em>
								rotate
							</Em>
							{" "}variable:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="const Rotate = styled.div`\\\\\\\\n  animation: ${rotate} 2s linear infinite;\\\\\\\\n  display: inline-block;\\\\\\\\n  padding: 2rem 1rem;\\\\\\\\n  border-radius: 10px;\\\\\\\\n  font-size: 1.2rem;\\\\\\\\n  background: red;\\\\\\\\n`;" />
					</Components.HelpListGroup>
				</Components.HelpListNumbered>
				<Components.HelpParagraph>
					Here’s the whole component code:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import atomize from &quot;@quarkly/atomize&quot;;\\\\\\\\n// Import the keyframes\\\\\\\\nimport styled, { keyframes } from &quot;styled-components&quot;;\\\\\\\\n// Create the keyframes\\\\\\\\nconst rotate = keyframes`\\\\\\\\n  0% {\\\\\\\\n    transform: rotate(0deg);\\\\\\\\n    background-color: #ff4400;\\\\\\\\n  }\\\\\\\\n  50% {\\\\\\\\n    transform: rotate(180deg);\\\\\\\\n    background-color: #000000;\\\\\\\\n  }\\\\\\\\n  100% {\\\\\\\\n    transform: rotate(360deg);\\\\\\\\n    background-color: #ff4400;\\\\\\\\n  }\\\\\\\\n`;\\\\\\\\n// Here we create a component that will rotate everything we with an interval of 2 seconds\\\\\\\\nconst Rotate = styled.div`\\\\\\\\n  display: inline-block;\\\\\\\\n  animation: ${rotate} 2s linear infinite;\\\\\\\\n  padding: 2rem 1rem;\\\\\\\\n  border-radius: 10px;\\\\\\\\n  font-size: 1.2rem;\\\\\\\\n  background: red;\\\\\\\\n`;\\\\\\\\n\\\\\\\\nexport default atomize(Rotate)({\\\\\\\\n  name: &quot;Rotate Animation&quot;,\\\\\\\\n  effects: {\\\\\\\\n    hover: &quot;:hover&quot;\\\\\\\\n  },\\\\\\\\n  normalize: true,\\\\\\\\n  mixins: true,\\\\\\\\n  description: {\\\\\\\\n    // paste here the description for your component\\\\\\\\n    en:\\\\\\\\n      &quot;Rotate Animation Component&quot;,\\\\\\\\n  },\\\\\\\\n  propInfo: {\\\\\\\\n    // paste here the props description for your component\\\\\\\\n    yourCustomProps: {\\\\\\\\n      control: &quot;input&quot;\\\\\\\\n    }\\\\\\\\n  }\\\\\\\\n});" />
				<Components.HelpPrevNextButton hierarchy="several" />
			</Section>
		</Box>
		<Components.FooterHigh />
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
import React from "react";
import theme from "theme";
import { Theme, Link, Em, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/tutorials-for-dev/make-a-staff-files-with-airtable"} />
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
				<Components.HelpSubheader />
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Make a Staff Files (with Airtable)
				</Components.HelpHeader2>
				<Components.HelpHeader3>
					Introduction. Why Airtable?
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Airtable is a popular no-code tool for creating large databases. They look like tables but have much more powerful functionality. We chose Airtable for our tutorial because it’s easier to transfer data via API.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					If you are new to Airtable, read the{" "}
					<Link href="https://support.airtable.com/hc/en-us/sections/360009677453">
						official guide
					</Link>
					{" "}on the company website before working with it.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					For the front-end{" "}
					<Link href="https://quarkly.io/">
						Quarkly
					</Link>
					{" "}part we will use just two components:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpParagraph>
						<Em>
							An employee card
						</Em>
						. It will contain a photo, text, and two buttons: send email and call. The card will receive this data from the parent component — the wrapper.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						<Em>
							Wrapper
						</Em>
						. It will fetch data from Airtable, generate cards, and pass data to them.
					</Components.HelpParagraph>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					If you don’t have time to read the whole post, you can watch this video with subtitles and time codes:
				</Components.HelpParagraph>
				<Components.HelpVideo videoId="mbPukPi0RZA" margin="12px 0px 0px 0px" />
				<Components.HelpHeader3>
					Part 1. Develop front end on Quarkly
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					To create a card:
				</Components.HelpParagraph>
				<Components.HelpListNumbered>
					<Components.HelpParagraph>
						Create a new project on Quarkly. Let’s call it{" "}
						<Em>
							Airtable Example
						</Em>
						;
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Go to the project;
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Add a ready-made block with employee cards. To do this, click on the black “+” icon and select a block from the{" "}
						<Em>
							Team{" "}
						</Em>
						category;
					</Components.HelpParagraph>
				</Components.HelpListNumbered>
				<Components.HelpParagraph>
					<Strong>
						Остальное взять отсюда https://alex-quarkly.medium.com/creating-an-app-with-a-staff-base-in-react-using-airtable-and-quarkly-12f51b7e4bc4
					</Strong>
				</Components.HelpParagraph>
				<Components.HelpPrevNextButton hierarchy="one" />
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
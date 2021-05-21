import React from "react";
import theme from "theme";
import { Theme, Link, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly – Design tool for creating websites and web apps.
			</title>
			<meta name={"description"} content={"A unique tool for webmasters, designers and developers. Here you can create websites as quickly as in website builders and as beautifully as in graphic editors."} />
			<meta property={"og:title"} content={"Quarkly – Design tool for creating websites and web apps."} />
			<meta property={"og:description"} content={"A unique tool for webmasters, designers and developers. Here you can create websites as quickly as in website builders and as beautifully as in graphic editors."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/landing/q-og-1200.png"} />
			<link rel={"shortcut icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon.png?v=2020-09-25T11:53:45.486Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-152w.png?v=2020-09-25T11:53:45.538Z"} />
			<meta name={"msapplication-TileImage"} content={"https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/favicon-270w.png?v=2020-09-25T11:53:45.477Z"} />
			<meta name={"msapplication-TileColor"} content={"#F8FAFF"} />
		</Helmet>
		<Components.MobileMenu>
			<Override slot="menu">
				<Override slot="item-404" display="none" />
			</Override>
		</Components.MobileMenu>
		<Components.Header />
		<Section background="--color-white" padding="24px 0 64px 0" quarkly-title="Content">
			<Override slot="SectionContent" max-width="760px" />
			<Components.HelpHeader2>
				Developer Guide
			</Components.HelpHeader2>
			<Components.HelpParagraph>
				Добро пожаловать в Quarkly, инструмент для создания сайтов и веб-приложений. Quarkly помогает веб-дизайнерам создавать свои проекты используя различные готовые компоненты и работая совместно с разработчиками в режиме реального времени. Помимо готовых react-компонентов, вы можете создавать свои уникальные компоненты.  Это руководство поможет вам разобраться как это делать.
			</Components.HelpParagraph>
			<Components.Contents>
				<Components.HelpOverviewItem>
					<Override slot="helpHeader3">
						🖐
Welcome
					</Override>
					<Override slot="helpLink" href="/welcome-for-dev" />
				</Components.HelpOverviewItem>
				<Components.HelpOverviewItem>
					<Override slot="helpHeader3">
						🏃‍♀️
Getting Started
					</Override>
					<Override slot="helpLink" href="/getting-started-for-dev" />
				</Components.HelpOverviewItem>
				<Components.HelpOverviewItemList>
					<Override slot="helpLink" href="/components-for-dev">
						💠 Components
					</Override>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/create-component">
						Creating
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/components-structure">
						Structure
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/import-components">
						Import
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/create-components-with-atomize">
						Atomize
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/project-api">
						Project API
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/component-props">
						Props
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/components-for-dev/overrides">
						Overrides
					</Components.HelpLink>
				</Components.HelpOverviewItemList>
				<Components.HelpOverviewItemList>
					<Override slot="helpLink" href="/tutorials-for-dev">
						🎓 Tutorials
					</Override>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/tutorials-for-dev/make-a-counter">
						Make a Counter
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/tutorials-for-dev/create-component-for-dev">
						▷ Create component (from NPM)
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/tutorials-for-dev/create-card-component">
						▷ Create Card Component
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/tutorials-for-dev/make-a-staff-files-with-airtable">
						▷ Make a Staff Files (with Airtable)
					</Components.HelpLink>
					<Components.HelpLink text-decoration-line="initial" margin="0px 12px 8px 0px" display="block" href="/tutorials-for-dev/make-an-entertaining-app">
						▷ Make an Entertaining App
					</Components.HelpLink>
				</Components.HelpOverviewItemList>
				<Components.HelpOverviewItem>
					<Override slot="helpHeader3">
						📋 How-to's
					</Override>
					<Override slot="helpLink" href="/how-tos-for-dev" />
				</Components.HelpOverviewItem>
				<Components.HelpOverviewItem>
					<Override slot="helpHeader3">
						❓ FAQ's
					</Override>
					<Override slot="helpLink" href="/faq-for-dev" />
				</Components.HelpOverviewItem>
				<Components.HelpOverviewItem>
					<Override slot="helpHeader3">
						🧩 Resources
					</Override>
					<Override slot="helpLink" href="/resources-for-dev" />
				</Components.HelpOverviewItem>
			</Components.Contents>
		</Section>
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
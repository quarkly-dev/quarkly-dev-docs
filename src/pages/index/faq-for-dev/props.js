import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/faq-for-dev/props"} />
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
					FAQ
				</Components.HelpSubheader>
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Props
				</Components.HelpHeader2>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Как задать дефолтное значение для пропса ?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						При экспорте компонента, передаем объект с дефотными значениями нужных пропсов
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup
					margin="0px 0px 18px 0px"
					padding="0px 18px 24px 18px"
					border-radius="8px"
					border-width="2px"
					border-style="solid"
					border-color="--color-lightD1"
				>
					<Components.HelpHeader4>
						Как сгруппировать пропсы ?
					</Components.HelpHeader4>
					<Components.HelpParagraph>
						За это отвечает параметр category
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpPrevNextButton hierarchy="several" margin="auto 0px 0px 0px" />
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
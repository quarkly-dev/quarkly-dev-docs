import React from "react";
import theme from "theme";
import { Theme, Link, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/overrides/export-overrides"} />
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
				<Components.HelpHeader2>
					Экспорт компонента с оверрайдами
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					При экспорте компонента, в котором используются оверрайды, обязательно нужно передать созданный ранее объект{" "}
					<Span
						background="--color-lightD1"
						border-radius="4px"
						overflow-wrap="normal"
						word-break="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						font="--code"
						white-space="nowrap"
						display="inline-block"
						padding="0px 6px 1px 6px"
					>
						overrides
					</Span>
					.
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="export default Object.assign(MyComponent, {\n  title: 'My Component Title',\n  overrides,\n});" />
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
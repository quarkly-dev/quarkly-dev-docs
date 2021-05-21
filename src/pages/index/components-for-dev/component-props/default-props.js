import React from "react";
import theme from "theme";
import { Theme, Link, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/component-props/default-props"} />
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
					Свойства компонента по умолчанию
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					После описания параметров компонента, можно указать для них значения по умолчанию. Для этого создайте объект defaultProps, в котором свойства - это названия параметров компонента, а значения - выбранные значения по умолчанию.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Например:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="defaultProps: {\n  someProp: 'opt1'\n}" />
				<Components.HelpParagraph>
					<Span
						font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						Важно!
					</Span>
					{" "}При экспорте компонента нужно передать созданные ранее объекты{" "}
					<Components.HelpCodeStroke>
						propInfo
					</Components.HelpCodeStroke>
					{" "}и{" "}
					<Components.HelpCodeStroke>
						defaultProps
					</Components.HelpCodeStroke>
					.
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="export default Object.assign(MyComponent, {\n  title: 'My Component Title',\n  propInfo,\n  defaultProps,\n});" />
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
import React from "react";
import theme from "theme";
import { Theme, Link, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/create-components-with-atomize/using-breakpoints"} />
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
					Использование брейкпоинтов
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Брейкпоинты используются в тех случаях, когда нужно применить разные стили для разных устройств. Вы можете настроить список брейкпоинтов, для которых будут применяться стили в теме проекта, непосредственно в конструкторе Quarkly.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы применить стили для брейкпоинта, укажите его имя в виде префикса для любого свойства CSS. Например, применим разный{" "}
					<Span
						background="--color-lightD1"
						padding="2px 6px 3px 6px"
						border-radius="4px"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						font="--code"
					>
						color
					</Span>
					{" "}для брейкпоинтов{" "}
					<Span
						background="--color-lightD1"
						padding="2px 6px 3px 6px"
						border-radius="4px"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						font="--code"
					>
						lg
					</Span>
					{" "}и{" "}
					<Span
						background="--color-lightD1"
						padding="2px 6px 3px 6px"
						border-radius="4px"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						font="--code"
					>
						md
					</Span>
					:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyButton\n  lg-color=&quot;orange&quot;\n  md-color=&quot;yellow&quot;\n/>" />
				<Components.HelpParagraph>
					Вы также можете комбинировать эффекты с брейкпоинтами:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyButton\n  lg-hover-color=&quot;cyan&quot;\n  md-hover-color=&quot;teal&quot;\n/>" />
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
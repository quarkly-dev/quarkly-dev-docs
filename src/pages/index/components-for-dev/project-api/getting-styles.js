import React from "react";
import theme from "theme";
import { Theme, Link, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/project-api/getting-styles"} />
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
			<Components.SidebarMenuDev>
				<Override slot="Sub Head Text-create-components111" />
			</Components.SidebarMenuDev>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Получение стилей компонента
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					У вас может появиться необходимость получить текущие стили компонента в процессе его работы, например во время выполнения какого либо события.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы получить любые CSS-стили компонента, вызовите функцию{" "}
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
						getComputedStyle
					</Span>
					, в которую передайте нужный HTML-элемент. В результате вы получите объект{" "}
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
						styles
					</Span>
					, который содержит все примененные к компоненту стили.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Например, возьмем компонент{" "}
					<Components.HelpCodeStroke>
						Link
					</Components.HelpCodeStroke>
					{" "}из библиотеки{" "}
					<Components.HelpCodeStroke>
						@quarkly/widgets
					</Components.HelpCodeStroke>
					{" "}и получим его цвет при наведении курсора мыши:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const onEnterEvent = e => {\\\\n  const styles = getComputedStyle(e.target);\\\\n  console.log(styles.color);\\\\n};\\\\n\\\\nreturn (\\\\n  <Link\\\\n    onMouseEnter={onEnterEvent}\\\\n    {...props}\\\\n  >\\\\n    Ссылка синего цвета\\\\n  </Link>\\\\n);" />
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
						Примечание:
					</Span>
					{" "}использовать функцию{" "}
					<Components.HelpCodeStroke>
						getComputedStyle
					</Components.HelpCodeStroke>
					{" "}нужно только для получения стилей, добавленных из интерфейса конструктора или сторонними библиотеками. Стили, добавленные вами в компоненте, можно получить из объекта{" "}
					<Components.HelpCodeStroke>
						e.target.style
					</Components.HelpCodeStroke>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Также обратите внимание, что функция{"\n\t\t\t "}
					<Components.HelpCodeStroke>
						getComputedStyle
					</Components.HelpCodeStroke>
					{" "}возвращает объект с привычными именами стилей, написанными через дефис{" \n\n\t\t\t "}
					<Components.HelpCodeStroke>
						background-color
					</Components.HelpCodeStroke>
					, а в объекте{" "}
					<Components.HelpCodeStroke>
						e.target.style
					</Components.HelpCodeStroke>
					{" "}используются имена в виде{" "}
					<Components.HelpCodeStroke>
						backgroundColor
					</Components.HelpCodeStroke>
					, как если бы вы передавали их в любом компоненте.
				</Components.HelpParagraph>
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
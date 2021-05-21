import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/project-api/getting-theme"} />
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
					Получение темы проекта
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Чтобы получить текущую тему проекта, нужно импортировать хук{" "}
					<Components.HelpCodeStroke>
						useTheme
					</Components.HelpCodeStroke>
					{" "}из библиотеки styled-components и вызвать его в компоненте.
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import { useTheme } from 'styled-components';\\n\\nconst theme = useTheme();" />
				<Components.HelpParagraph>
					Объект{" "}
					<Components.HelpCodeStroke>
						theme
					</Components.HelpCodeStroke>
					{" "}содержит все переменные темы из правой панели, которые вы можете использовать в стилях компонентов. Для примера, получим значение цвета{" "}
					<Components.HelpCodeStroke>
						primary
					</Components.HelpCodeStroke>
					:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="theme.color.primary" />
				<Components.HelpParagraph>
					После чего можно изменить этот цвет (сделать светлее или темнее) или сразу использовать его в компоненте:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyComponent color={theme.color.primary} />" />
				<Components.HelpParagraph>
					что в данном случае аналогично использованию переменной:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyComponent color=&quot;--color-primary&quot; />" />
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
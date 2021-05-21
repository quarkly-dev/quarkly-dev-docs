import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/import-components"} />
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
					Импорт сторонних компонентов
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Вы можете использовать в своем компоненте другие, ранее созданные компоненты и NPM модули. Таким образом, вы можете:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							<Strong
								font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Импортировать виджеты (примитивы) из конструктора
							</Strong>
							{" "}из модуля '@quarkly/widgets':
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="import { Box, Text } from '@quarkly/widgets';" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							<Strong
								font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Импортировать сложные компоненты из конструктора
							</Strong>
							{" "}из модуля '@quarkly/components':
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="import { Menu } from '@quarkly/components';" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							<Strong
								font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Импортировать собственные, ранее созданные, компоненты
							</Strong>
							{" "}из каталога текущего проекта следующим образом:
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="import MyComponent from './MyComponent';" />
						<Components.HelpParagraph>
							Где{" "}
							<Components.HelpCodeStroke>
								MyComponent
							</Components.HelpCodeStroke>
							{" "}– название вашего компонента.
						</Components.HelpParagraph>
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpParagraph>
							<Strong
								font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
								hyphens="manual"
								overflow-wrap="normal"
								text-indent="0"
								text-overflow="clip"
								white-space="normal"
								word-break="normal"
							>
								Импортировать модули других пользователей из NPM
							</Strong>
							, добавив простой импорт. Модуль будет установлен и записан как зависимость проекта автоматически:
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="import Particles from 'react-particles-js';" />
					</Components.HelpListGroup>
				</Components.HelpListMarked>
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
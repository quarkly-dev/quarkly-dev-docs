import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev"} />
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
					Components
				</Components.HelpHeader2>
				<Components.Contents>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Создание компонентов
						</Override>
						<Override slot="helpLink" href="/create-component" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Структура компонентов
						</Override>
						<Override slot="helpLink" href="/components-structure" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Импорт сторонних компонентов
						</Override>
						<Override slot="helpLink" href="/import-components" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Создание компонентов при помощи atomize
						</Override>
						<Override slot="helpLink" href="/create-components-with-atomize" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							API проекта
						</Override>
						<Override slot="helpLink" href="/project-api" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Параметры компонента
						</Override>
						<Override slot="helpLink" href="/component-props" />
					</Components.HelpOverviewItem>
					<Components.HelpOverviewItem>
						<Override slot="helpHeader3">
							Оверрайды
						</Override>
						<Override slot="helpLink" href="/overrides" />
					</Components.HelpOverviewItem>
				</Components.Contents>
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
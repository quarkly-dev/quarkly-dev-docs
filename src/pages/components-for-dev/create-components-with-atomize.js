import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/create-components-with-atomize"} />
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
				<Override slot="Sub Head Text-create-components-with-atomize" />
				<Override slot="Sub Head Text-project-api" />
			</Components.SidebarMenuDev>
			<Section background="--color-white" padding="24px 0 64px 0">
				<Override slot="SectionContent" max-width="760px" />
				<Components.HelpHeader2>
					Создание компонентов при помощи atomize
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Atomize призван упростить создание компонентов и позволяет интегрировать ваш компонент в Quarkly. Используя библиотеку Atomize вы можете:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						<Strong
							font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Cтилизовать ваш компонент свойствами, используя "атомарный CSS";
					</Components.HelpListItem>
					<Components.HelpListItem>
						Выводить свойства компонента непосредственно в конструкторе;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Добавлять различные эффекты (hover и т.п.) для компонента;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Добавлять различные стили для брейкпоинтов;
					</Components.HelpListItem>
					<Components.HelpListItem>
						Использовать переменные из темы проекта.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Это необходимо, в первую очередь, чтобы создавать собственные примитивы, которых нет в библиотеке Quarkly, для последующего использования в основных компонентах.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Дальше мы разберём каждый пункт более подробно, но сначала посмотрим как создавать простые компоненты.
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
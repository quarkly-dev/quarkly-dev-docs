import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/create-component"} />
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
					Создание компонентов
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					В интерфейсе конструктора, вам изначально доступны самые популярные компоненты, которые вы можете использовать в проекте. Но, если появилась необходимость в каком-то уникальном компоненте, вы можете создать новый и использовать его во всех ваших проектах.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы создать компонент в Редакторе кода, нажмите на кнопку “+” и введите имя компонента. Можно использовать латиницу, цифры и символ подчеркивания. Остальные символы из имени компонента будут удалены.
				</Components.HelpParagraph>
				<Components.HelpImageBlock />
				<Components.HelpParagraph>
					<Strong>
						Важно!
					</Strong>
					{" "}Вы не сможете в будущем его переименовать, поскольку это имя является системным и может использоваться во всём проекте: как на холсте, так и в других компонентах.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					/>
					После ввода имени компонента откроется Редактор кода и вы увидите стандартный код компонента, который мы подробно разберем в следующих разделах и узнаем другие возможности при создании собственных компонентов.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы повторно открыть Редактор кода компонента, нажмите на кнопку "&lt;&gt;" возле имени компонента.
				</Components.HelpParagraph>
				<Components.HelpImageBlock />
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
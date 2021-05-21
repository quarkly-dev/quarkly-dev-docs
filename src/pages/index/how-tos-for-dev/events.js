import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/how-tos-for-dev/events"} />
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
					How to's
				</Components.HelpSubheader>
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Как обрабатывать события
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					В этом разделе вы научитесь описывать поведение компонента при выполнении какого-либо события. Например, наведение курсора или клик по компоненту.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы добавить перехват какого-либо события на компоненте, необходимо в виде пропса добавить название события и функцию, которая будет его обрабатывать, например:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const onEnterEvent = e => console.log('Курсор наведён на ', e.target);\\\\\\\\nconst onLeaveEvent = e => console.log('Курсор уведён из ', e.target);\\\\\\\\n\\\\\\\\nreturn (\\\\\\\\n  <Box\\\\\\\\n    onMouseEnter={onEnterEvent}\\\\\\\\n    onMouseLeave={onLeaveEvent}\\\\\\\\n    {...props}\\\\\\\\n  >\\\\\\\\n    Компонент, реагирующий на наведение курсора\\\\\\\\n  </Box>\\\\\\\\n);" />
				<Components.HelpParagraph>
					В этом примере мы добавили две свои функции:{" "}
					<Components.HelpCodeStroke>
						onEnterEvent
					</Components.HelpCodeStroke>
					{" "}и{" "}
					<Components.HelpCodeStroke>
						onLeaveEvent
					</Components.HelpCodeStroke>
					, которые просто выводят сообщение в консоли и вызываются по выполнении событий{" "}
					<Components.HelpCodeStroke>
						onMouseEnter
					</Components.HelpCodeStroke>
					{" "}и{" "}
					<Components.HelpCodeStroke>
						onMouseLeave
					</Components.HelpCodeStroke>
					{" "}соответственно. Как менять состояние компонента, его стили и т.д. вы узнаете в следующих разделах.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Каждое событие возвращает объект с данными, мы назвали его e. В нём можно получить тип события (
					<Components.HelpCodeStroke>
						e.type
					</Components.HelpCodeStroke>
					), элемент на котором оно выполнилось (
					<Components.HelpCodeStroke>
						e.target
					</Components.HelpCodeStroke>
					) и другие, реже используемые, данные.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Почти любое событие можно прервать, вызвав{" "}
					<Components.HelpCodeStroke>
						e.preventDefault()
					</Components.HelpCodeStroke>
					{" "}в своей функции. Например, чтобы запретить копирование текста, наведение на элемент или отправку формы.
				</Components.HelpParagraph>
				<Components.HelpLink>
					[ ссылка на список событий, пока в конце документа ]
				</Components.HelpLink>
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
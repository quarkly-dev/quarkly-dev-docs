import React from "react";
import theme from "theme";
import { Theme, Link, Span, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/overrides/creating-overrides-list"} />
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
					Создание списка оверрайдов
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Список всех используемых оверрайдов в компоненте описывается в объекте{" "}
					<Components.HelpCodeStroke>
						overrides
					</Components.HelpCodeStroke>
					. Свойства объекта соответствуют пользовательским названиям оверрайдов и могут содержать поля{" "}
					<Components.HelpCodeStroke>
						kind
					</Components.HelpCodeStroke>
					{" "}и{" "}
					<Components.HelpCodeStroke>
						props
					</Components.HelpCodeStroke>
					. Вы сами решаете, какие компоненты и состояния можно изменять.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Например, добавим оверрайд с именем «My Link» для какого-то произвольного компонента{" "}
					<Components.HelpCodeStroke>
						Link
					</Components.HelpCodeStroke>
					{" "}и укажем ему свойство{" "}
					<Components.HelpCodeStroke>
						src
					</Components.HelpCodeStroke>
					:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const overrides = {\n  'My Link': {\n    kind: 'Link',\n    props: {\n      src: '#'\n    }\n  }\n}" />
				<Components.HelpParagraph>
					Свойство{" "}
					<Components.HelpCodeStroke>
						kind
					</Components.HelpCodeStroke>
					{" "}позволяет использовать набор свойств из другого компонента, в нём нужно указать системное имя стандартного или пользовательского существующего компонента.
					<br />
					{" "}Тогда на панели props, в конструкторе, будут доступны свойства этого компонента. Например, в примере выше, мы создали собственный компонент со ссылкой и хотим добавить для неё свойства из компонента
					<Components.HelpCodeStroke>
						Link
					</Components.HelpCodeStroke>
					. Добавление свойства{" "}
					<Components.HelpCodeStroke>
						kind: 'Link'
					</Components.HelpCodeStroke>
					{" "}сделает это автоматически.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					В свойстве{" "}
					<Components.HelpCodeStroke>
						props
					</Components.HelpCodeStroke>
					{" "}можно указать список CSS-стилей и любых пропсов, которые нужно передать в компонент с этим именем override.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы описать свойства, достаточно просто указать имя свойства и его значение, как в примере{" "}
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
						src
					</Span>
					, а CSS-стили можно описывать различными способами:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							стандартное описание
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="color: '#212121'" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							сокращения (алиасы) из библиотеки atomize
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="c: '#212121'" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							переменные из темы проекта
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="color: '--color-dark'\ncolor: '--dark'" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							брейкпоинты из темы проекта
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="'md-color': '#212121'" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							эффекты состояний
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="'link-color': '--primary'\n'focus-color': '--secondary'\n'hover-color': '--orange'\n'active-color': '--red'\n'visited-color': '--indigo'" />
					</Components.HelpListGroup>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					Итого, объект с описанием overrides может выглядеть следующим образом:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const overrides = {\n  'My Link': {\n    kind: 'Link',\n    props: {\n      'color': '--primary',\n      'hover-color': '--secondary',\n      'font': '--base',\n      'md-font': '--lead',\n      'src': '#',\n    }\n  }\n}" />
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
import React from "react";
import theme from "theme";
import { Theme, Link, Span, Em, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/create-components-with-atomize/adding-effects"} />
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
					Добавление эффектов (псевдоклассов)
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Эффекты определяют состояния элементов, которые изменяются с помощью действий пользователя. Рассмотрим все доступные эффекты подробнее:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListItem>
						<Components.HelpCodeStroke>
							hover
						</Components.HelpCodeStroke>
						{" "}– применяется, когда курсор мыши находится в пределах элемента;
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Components.HelpCodeStroke>
							focus
						</Components.HelpCodeStroke>
						— применяется к элементу при получении им фокуса. Например, для текстового поля получение фокуса означает, что курсор установлен в поле и можно вводить в него текст;
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Components.HelpCodeStroke>
							active
						</Components.HelpCodeStroke>
						— происходит при активации пользователем элемента. Например, ссылка становится активной, если навести на неё курсор и щёлкнуть мышкой;
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Components.HelpCodeStroke>
							link
						</Components.HelpCodeStroke>
						— применяется к не посещенным ссылкам;
					</Components.HelpListItem>
					<Components.HelpListItem>
						<Components.HelpCodeStroke>
							visited
						</Components.HelpCodeStroke>
						— применяется к уже посещенным пользователем ссылкам.
					</Components.HelpListItem>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					<Span font="600 18px/27px &quot;Source Sans Pro&quot;, sans-serif">
						Важно!{" "}
					</Span>
					Браузер сохраняет историю посещений, поэтому ссылка может быть помечена как посещенная, если ранее по ней был зафиксирован переход.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Чтобы ваш компонент мог обрабатывать различные эффекты, необходимо передать объект со списком нужных эффектов при создании компонента. Ключ (напр.{" "}
					<Components.HelpCodeStroke>
						hover
					</Components.HelpCodeStroke>
					) – это префикс в имени свойства, а значение (напр.{" "}
					<Components.HelpCodeStroke>
						:hover
					</Components.HelpCodeStroke>
					) – CSS-селектор.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Пример создания компонента из HTML-элемента:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const MyButton = atomize.button({\n  effects: {\n    hover: &quot;:hover&quot;,\n    focus: &quot;:focus&quot;,\n  }\n});" />
				<Components.HelpParagraph>
					Пример создания компонента из HTML-элемента:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const MyButton = atomize(Button)({\n  effects: {\n    hover: &quot;:hover&quot;,\n    focus: &quot;:focus&quot;,\n  }\n});" />
				<Components.HelpParagraph>
					Теперь, если добавить префикс hover или focus для любого свойства CSS, он будет применен к определенному эффекту:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyButton\n  color=&quot;red&quot;\n  hover-color=&quot;green&quot;\n  focus-color=&quot;blue&quot;\n/>" />
				<Components.HelpParagraph>
					В результате,{" "}
					<Em>
						цвет
					</Em>
					{" "}кнопки изначально будет{" "}
					<Components.HelpCodeStroke>
						red
					</Components.HelpCodeStroke>
					, когда пользователь наведет курсор мыши на компонент,{" "}
					<Em>
						цвет
					</Em>
					{" "}изменится на{" "}
					<Components.HelpCodeStroke>
						green
					</Components.HelpCodeStroke>
					, а когда установит на неё фокус,{" "}
					<Em>
						цвет
					</Em>
					{" "}изменится на{" "}
					<Components.HelpCodeStroke>
						blue
					</Components.HelpCodeStroke>
					.
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
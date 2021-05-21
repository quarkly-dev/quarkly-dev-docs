import React from "react";
import theme from "theme";
import { Theme, Link, Em, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/components-structure"} />
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
					Структура компонентов
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					В первую очередь, рассмотрим структуру простого компонента.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Для примера создадим новый компонент с именем{" "}
					<Components.HelpCodeStroke>
						MyComponent
					</Components.HelpCodeStroke>
					. Он просто показывает текст на странице и состоит из одного элемента{" "}
					<Components.HelpCodeStroke>
						div
					</Components.HelpCodeStroke>
					. Этому компоненту можно применять любые стили из конструктора. У него также есть заголовок и описание на английском языке.
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import React from 'react';\n\nconst MyComponent = props => {\n  return (\n    <div {...props}>\n      Say hello MyComponent\n    </div>\n  );\n};\n\nexport default atomize(MyComponent)({\n  title: 'Component Title',\n  description: {\n    en: 'Component Description',\n  },\n});" />
				<Components.HelpParagraph>
					Рассмотрим несколько основных моментов при создании компонентов:
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Компонент является обычным модулем JavaScript и вы можете создавать компоненты, которые будут только что то хранить или считать. Для этого не обязательно использовать React внутри компонента.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Использовать React нужно, если ваш компонент будет выводить что-либо на страницу или создавать другие react-компоненты. Для этого в начале подключите библиотеку React:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import React from 'react';" />
				<Components.HelpParagraph>
					Если ваш компонент использует React, он должен возвращать один родительский элемент, в который передаются параметры компонента{" "}
					<Components.HelpCodeStroke>
						&#123;...props&#125;
					</Components.HelpCodeStroke>
					. Объект с параметрами{"  "}
					<Components.HelpCodeStroke>
						props
					</Components.HelpCodeStroke>
					{" "}содержит стили и параметры компонента, которые пользователь может изменять в конструкторе на панелях{" "}
					<Em>
						Styles
					</Em>
					{" "}и{" "}
					<Em>
						Props
					</Em>
					, а также необходимые для работы компонента параметры конструктора. Забегая вперёд, данные из{" "}
					<Components.HelpCodeStroke>
						props
					</Components.HelpCodeStroke>
					{" "}в компоненте должны быть переданы до оверрайдов, если они используются.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Родительский элемент (в нашем примере –{" "}
					<Components.HelpCodeStroke>
						&lt;div &#123;...props&#125;&gt;
					</Components.HelpCodeStroke>
					{" "}) может состоять из любого количества дочерних элементов, других компонентов и т.д. В следующих разделах мы узнаем различные возможности по наполнению компонента.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Независимо от назначения компонента, его необходимо экспортировать. Для этого добавим в конец{" "}
					<Components.HelpCodeStroke>
						export default
					</Components.HelpCodeStroke>
					{" "}с итоговым объектом компонента.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Компоненты, использующие React можно экспортировать двумя способами:
				</Components.HelpParagraph>
				<Components.HelpListNumbered>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Если родительский компонент импортирован из Quarkly или ранее создан при помощи atomize (например:{" "}
							<Components.HelpCodeStroke>
								&lt;Box &#123;...rest&#125;&gt;
							</Components.HelpCodeStroke>
							), можно сделать экспорт объекта «как есть», добавив заголовок, описание и т.д.:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="export default Object.assign(MyComponent, {\n  title: 'Component Title',\n  description: {\n    en: 'Component Description',\n  },\n});\n" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							В остальных случаях, когда в качестве родителя вы использовали обычный HTML-элемент
							<Components.HelpCodeStroke>
								&lt;div &#123;...rest&#125;&gt;
							</Components.HelpCodeStroke>
							), перед экспортом его необходимо преобразовать в компонент при помощи atomize, как это сделано в примере выше:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="export default atomize(MyComponent)({\n  title: 'Component Title',\n  description: {\n    en: 'Component Description',\n  },\n});\n" />
					</Components.HelpListGroup>
				</Components.HelpListNumbered>
				<Components.HelpParagraph>
					При экспорте вы можете указать название компонента и описание на нескольких языках. Поддерживается полный набор языков из i18n (ISO 639).
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
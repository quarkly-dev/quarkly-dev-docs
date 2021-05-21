import React from "react";
import theme from "theme";
import { Theme, Link, Span, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/overrides/use-overrides-into-component"} />
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
					Использование оверрайдов в компоненте
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Чтобы использовать созданные оверрайды в компоненте, нужно вызвать ранее импортированный хук{" "}
					<Components.HelpCodeStroke>
						useOverrides
					</Components.HelpCodeStroke>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Он получает{" "}
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
						props
					</Span>
					{" "}компонента (если компонент получает какие-либо пользовательские свойства, их можно исключить) и ранее описанный объект{" "}
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
						overrides
					</Span>
					. По необходимости, можно передать объект{" "}
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
						defaultProps
					</Span>
					, если оверрайды зависят от свойств компонента по умолчанию.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Возвращает функцию{" "}
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
						override
					</Span>
					{" "}для применения оверрайдов в компоненте, массив{" "}
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
						children
					</Span>
					{" "}с дочерними элементами и все остальные свойства в объекте{" "}
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
						rest
					</Span>
					. Если ваш компонент не содержит никаких дочерних элементов,{" "}
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
						children
					</Span>
					{" "}можно не получать. Выглядит вызов{" \n\t\t\t "}
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
						useOverrides
					</Span>
					{" "}следующим образом:
				</Components.HelpParagraph>
				{"        "}
				<Components.HelpCodeBlock code="const MyComponent = props => {\n  const { override, children, rest } = useOverrides(props, overrides, defaultProps);\n    \n  ...\n}" />
				{"        "}
				<Components.HelpParagraph>
					Теперь можно вызвать функцию{" "}
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
						override
					</Span>
					{" "}в нужном компоненте. Рассмотрим следующий пример подробнее:
				</Components.HelpParagraph>
				{"        "}
				<Components.HelpCodeBlock code="return (\n  <Box {...rest}>\n    <Link\n      some-property-name=&quot;value&quot;\n      onPointerDown={onOpenFunc}\n      {...override('My Link')}\n    >\n      {override('My Link').children || 'Default Text'}\n    </Link>\n    {children}\n  </Box>\n);" />
				{"        "}
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
						Важно!
					</Strong>
					{" "}При создании нового компонента можно заметить, что в родительский компонент передается объект{" "}
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
						props
					</Span>
					. Хук useOverrides, в свою очередь, возвращает объект{" "}
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
						rest
					</Span>
					, который и нужно передавать вместо{" "}
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
						props
					</Span>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					В примере выше мы вызвали{" "}
					<Components.HelpCodeStroke>
						override
					</Components.HelpCodeStroke>
					{" "}в компоненте{" "}
					<Components.HelpCodeStroke>
						Link
					</Components.HelpCodeStroke>
					{" "}после передачи всех остальных стилей и параметров. Это нужно, чтобы изменения в конструкторе перекрывали параметры, описанные в компоненте. Если нужно запретить пользователю менять какой-либо параметр или стиль (например, цвет отображения ошибки), добавьте его после вызова{" "}
					<Components.HelpCodeStroke>
						override
					</Components.HelpCodeStroke>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Содержимое компонентов{" "}
					<Components.HelpCodeStroke>
						Text
					</Components.HelpCodeStroke>
					,{" "}
					<Components.HelpCodeStroke>
						Link
					</Components.HelpCodeStroke>
					{" "}и{" "}
					<Components.HelpCodeStroke>
						Button
					</Components.HelpCodeStroke>
					{" "}хранится в{" "}
					<Components.HelpCodeStroke>
						children
					</Components.HelpCodeStroke>
					{" "}указанного оверрайда, а дочерние элементы основного компонента по прежнему доступны в массиве
					<Components.HelpCodeStroke>
						children
					</Components.HelpCodeStroke>
					, который возвращает{" "}
					<Components.HelpCodeStroke>
						useOverride
					</Components.HelpCodeStroke>
					.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					При вызове функции{" "}
					<Components.HelpCodeStroke>
						override
					</Components.HelpCodeStroke>
					{" "}можно передать несколько имён, например для стилизации разных состояний. Активные на данные момент состояния доступны на правой панели и все изменения будут применяться к выбранному пользователем имени оверрайда.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Свойство{" "}
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
						kind
					</Span>
					{" "}в объекте{" "}
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
						overrides
					</Span>
					{" "}можно указывать только для первого имени, во всех последующих оно будет применяться автоматически.
				</Components.HelpParagraph>
				{"        "}
				<Components.HelpCodeBlock code="{...override('MyLink')}\n{...override('MyLink', 'MyLink HomePage')}\n{...override('MyLink', 'MyLink HomePage', isActive && 'MyLink :active')}\n{...override('MyLink', 'MyLink HomePage', `MyLink ${status}`)}" />
				<Components.HelpParagraph>
					В примерах выше показаны разные варианты добавления списка оверрайдов в компоненте.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Таким образом, вы сможете одинаково стилизовать все ссылки 'MyLink', выделить ссылку 'MyLink HomePage' и, изменяя значения переменных{" "}
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
						isActive
					</Span>
					или
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
						{" "}status
					</Span>
					{" "}, добавить уникальные стили для всех активных ссылок.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Если одновременно активно несколько имён оверрайдов, каждое следующее имя добавляет новые или перекрывает уже существующие стили от предыдущего.
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
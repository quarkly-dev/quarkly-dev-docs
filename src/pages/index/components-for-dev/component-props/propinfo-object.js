import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/component-props/propinfo-object"} />
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
					Объект propInfo
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Чтобы добавить/настроить параметры компонента, создайте объект{" "}
					<Components.HelpCodeStroke>
						propInfo
					</Components.HelpCodeStroke>
					, в котором свойства - это названия параметров, а значения - их описание. Например:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="propInfo: {\n  someProp: {\n    title: 'Property Title',\n    description: {\n      en: 'Property Description',\n    },\n    control: 'select',\n    variants: ['opt1', 'opt2'],\n    multiply: true,\n    category: 'Main',\n    weight: 1\n  }\n}" />
				<Components.HelpParagraph>
					Рассмотрим пример выше подробнее:
				</Components.HelpParagraph>
				<Components.HelpTable cols="2" rows="7">
					<Override slot="Text 0-0">
						<Components.HelpCodeStroke>
							title
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 1-0">
						<Components.HelpCodeStroke>
							description
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 2-0">
						<Components.HelpCodeStroke>
							variants
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 3-0">
						<Components.HelpCodeStroke>
							multiply
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 4-0">
						<Components.HelpCodeStroke>
							category
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 5-0">
						<Components.HelpCodeStroke>
							weight
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 0-1">
						<Components.HelpParagraph>
							Пользовательское название параметра, выводимое на панели конструктора
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 1-1">
						<Components.HelpParagraph>
							Описание на нескольких языках, выводимое в виде тултипа при наведении на заголовок
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 2-1">
						<Components.HelpParagraph>
							Список опций, используется в{" "}
							<Components.HelpCodeStroke>
								input
							</Components.HelpCodeStroke>
							,{" "}
							<Components.HelpCodeStroke>
								select
							</Components.HelpCodeStroke>
							{" "}и{" "}
							<Components.HelpCodeStroke>
								radio-group
							</Components.HelpCodeStroke>
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 3-1">
						<Components.HelpParagraph>
							Возле названия параметра добавится кнопка "+" и пользователь сможет использовать несколько копий текущего параметра, чтобы выбрать несколько значений. Если включена, в компоненте получите массив со списком выбранных значений.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 4-1">
						<Components.HelpParagraph>
							Название пользовательской категории для группировки пропсов в правой панели. Если категории с таким именем нет, она будет создана автоматически. Категории сортируются в алфавитном порядке.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 5-1">
						<Components.HelpParagraph>
							Ширина поля ввода пропса в диапазоне значений от 0 до 1, что равно от 0 до 100% ширины правой панели. Можно разместить несколько пропсов на одной линии, если их общая ширина не больше 1.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 6-1">
						<Components.HelpParagraph>
							Тип поля ввода, доступны различные типы контролов.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 6-0">
						<Components.HelpCodeStroke>
							control
						</Components.HelpCodeStroke>
					</Override>
				</Components.HelpTable>
				<Components.HelpHeader3>
					Типы Control
				</Components.HelpHeader3>
				<Components.HelpTable cols="2" rows="13">
					<Override slot="Text 0-0">
						<Components.HelpCodeStroke>
							input
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 1-0">
						<Components.HelpCodeStroke>
							checkbox
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 2-0">
						<Components.HelpCodeStroke>
							select
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 3-0">
						<Components.HelpCodeStroke>
							radio-group
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 4-0">
						<Components.HelpCodeStroke>
							font
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 5-0">
						<Components.HelpCodeStroke>
							icon
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 0-1">
						<Components.HelpParagraph>
							Простое текстовое поле. Используется для ввода однострочного текста. Возвращает строку с введённым пользователем текстом.
							<br />
							При наличии свойства{" "}
							<Components.HelpCodeStroke>
								variants
							</Components.HelpCodeStroke>
							, превращается в{" "}
							<Components.HelpCodeStroke>
								datalist
							</Components.HelpCodeStroke>
							{" "}с передаваемыми вариантами.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 1-1">
						<Components.HelpParagraph>
							Простой переключатель.
Используется для включения или выключения какой-либо функции компонента.
Возвращает значения{" "}
							<Components.HelpCodeStroke>
								true
							</Components.HelpCodeStroke>
							{" "}если включен или{" "}
							<Components.HelpCodeStroke>
								false
							</Components.HelpCodeStroke>
							{" "}если выключен.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 2-1">
						<Components.HelpParagraph>
							Выпадающий список с текстовыми заголовками. Можно использовать для переключения текстового значения, если количество вариантов или длина строк превышает размеры панели.{" "}
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							Указать список доступных пользователю вариантов можно в свойстве{" "}
							<Components.HelpCodeStroke>
								variants: ['one', 'two', 'three']
							</Components.HelpCodeStroke>
							{" "}Можно сгруппировать список вариантов, используя объект с заголовком{" "}
							<Components.HelpCodeStroke>
								label
							</Components.HelpCodeStroke>
							и списком опций{" "}
							<Components.HelpCodeStroke>
								options
							</Components.HelpCodeStroke>
							{" "}в группе{"\n\t\t\t\t\t "}
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							Примеры описания списка вариантов показаны на{" "}
							<Link href="#">
								следующей странице.
							</Link>
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							Возвращают строку с выбранным значением.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 3-1">
						<Components.HelpParagraph>
							Переключатель нескольких текстовых заголовков. Можно использовать для переключения коротких текстовых значений, если количество вариантов и длина строк не превышают размеры панели.
						</Components.HelpParagraph>
						<Components.HelpParagraph>
							Возвращают строку с выбранным значением. Указать список доступных пользователю вариантов можно в свойстве
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="variants: ['one', 'two', 'three']" width="500px" />
						<Components.HelpParagraph>
							Для переключателя доступно три дизайна, выбрать которые можно при помощи свойства:{" "}
							<Components.HelpCodeStroke>
								design: 1
							</Components.HelpCodeStroke>
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 4-1">
						<Components.HelpParagraph>
							Панель для настройки шрифта. Можно использовать для глобальной настройки шрифта в компоненте. Возвращает строку со стилями шрифта:{" "}
						</Components.HelpParagraph>
						<Components.HelpCodeBlock code="italic normal 400 1em/1.5 --fontFamily-googleRoboto" width="500px" />
					</Override>
					<Override slot="Text 5-1">
						<Components.HelpParagraph>
							Панель для выбора иконки из набора. Можно использовать для получения имени иконки из доступных наборов в конструкторе. Возвращает строку с названием иконки.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 6-0">
						<Components.HelpCodeStroke>
							image
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 7-0">
						<Components.HelpCodeStroke>
							color
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 6-1">
						<Components.HelpParagraph>
							Панель для выбора изображения. Можно использовать для загрузки и выбора загруженных или импортированных изображений в компоненте.
Возвращает строку со ссылкой на изображение.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 7-1">
						<Components.HelpParagraph>
							Панель для настройки цвета. Можно использовать для глобальной настройки цвета в компоненте.
Возвращает строку с именем переменной или пользовательским значением цвета в #HEX (если прозрачность не используется) или RGBA.
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 8-0">
						<Components.HelpCodeStroke>
							background
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 8-1">
						<Components.HelpParagraph>
							Панель для настройки фона. Можно использовать для глобальной настройки фона в компоненте.
Возвращает строку с именем переменной или пользовательским значением цвета в #HEX или RGBA и стили изображения или градиента, если они были определены:
						</Components.HelpParagraph>
						<Components.HelpCodeBlock width="500px" code="// gradient styles\n#000000 repeating-linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)\n\n// or image styles\n--color-dark url(image.png) center/contain no-repeat fixed border-box" />
					</Override>
					<Override slot="Text 9-0">
						<Components.HelpCodeStroke>
							transition
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 10-0">
						<Components.HelpCodeStroke>
							transform
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 11-0">
						<Components.HelpCodeStroke>
							shadow
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 12-0">
						<Components.HelpCodeStroke>
							filter
						</Components.HelpCodeStroke>
					</Override>
					<Override slot="Text 12-1">
						<Components.HelpParagraph>
							Панель для настройки фильтров
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 11-1">
						<Components.HelpParagraph>
							Панель для настройки теней
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 10-1">
						<Components.HelpParagraph>
							Панель для настройки трансформаций
						</Components.HelpParagraph>
					</Override>
					<Override slot="Text 9-1">
						<Components.HelpParagraph>
							Панель для настройки анимаций переходов
						</Components.HelpParagraph>
					</Override>
				</Components.HelpTable>
				<Components.HelpParagraph>
					Поля ввода{" "}
					<Components.HelpCodeStroke>
						font
					</Components.HelpCodeStroke>
					,{" "}
					<Components.HelpCodeStroke>
						color
					</Components.HelpCodeStroke>
					,{" "}
					<Components.HelpCodeStroke>
						background
					</Components.HelpCodeStroke>
					,{" "}
					<Components.HelpCodeStroke>
						transition
					</Components.HelpCodeStroke>
					,{" "}
					<Components.HelpCodeStroke>
						transform
					</Components.HelpCodeStroke>
					,
					<Components.HelpCodeStroke>
						shadow{" "}
					</Components.HelpCodeStroke>
					{" "}, и{" \n "}
					<Components.HelpCodeStroke>
						{" "}filter{"\n "}
					</Components.HelpCodeStroke>
					{" "}являются текстовыми, при клике открывают встроенную в конструктор панель с настройками и возвращают сгенерированную строку с выбранными на панели стилями.
				</Components.HelpParagraph>
				<Components.HelpPrevNextButton hierarchy="several" />
			</Section>
		</Box>
		<Components.FooterHigh />
		<Link
			font="--capture"
			font-size="10px"
			position="fixed"
			bottom="12px"
			right="12px"
			z-index="4"
			border-radius="4px"
			padding="5px 12px 4px"
			background-color="--dark"
			opacity="0.6"
			hover-opacity="1"
			color="--light"
			cursor="pointer"
			transition="--opacityOut"
			quarkly-title="Badge"
			text-decoration-line="initial"
			href="https://quarkly.io/"
			target="_blank"
		>
			Made on Quarkly
		</Link>
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
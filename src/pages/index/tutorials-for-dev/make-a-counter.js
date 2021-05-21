import React from "react";
import theme from "theme";
import { Theme, Link, Text, List, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/tutorials-for-dev/make-a-counter"} />
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
				<Components.HelpSubheader />
				<Components.HelpHeader2 margin="12px 0px 28px 0px">
					Make a counter
				</Components.HelpHeader2>
				<Components.HelpHeader3>
					Создаем компонент
				</Components.HelpHeader3>
				<Components.HelpImageBlock />
				<Components.HelpParagraph>
					Создаем компонент с названием «сounter».
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Дефолтный код компонента выглядит так:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import React from 'react';" />
				<Components.HelpParagraph>
					Как видите тут достаточно всего: есть импорты, экспорт и какая-то константа. На самом деле здесь всё довольно просто. Разберем каждую строку по отдельности:
				</Components.HelpParagraph>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="import React from 'react';" />
					<Components.HelpParagraph>
						Импортируем библиотеку React в этот компонент. Чтобы воспользоваться возможностями React, нужно его импортировать в файл компонента.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="import atomize from '@quarkly/atomize';" />
					<Components.HelpParagraph>
						Импортируем библиотеку atomize, которая позволит нам пользоваться упрощенным синтаксисом для оформления компонентов.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="const Counter = props => <div {...props}>Say hello Counter</div>" />
					<Components.HelpParagraph>
						Создаем константу Counter, по названию компонента. Она и является по сути нашим компонентом.  Для простоты условимся, что компонент в React надо создавать используя const. В основе нашего компонента Counter — функция. Функция обычно что-то принимает и что-то отдает. В нашем случае она принимает props — настройки компонента, а отдает &lt;div &#123;...props&#125;&gt;Say hello Counter&lt;/div&gt; — это HTML-элемент div с текстом внутри. Как видите всё не так страшно.{" "}
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="export default atomize(Counter)({" />
					<Components.HelpParagraph>
						Когда вы разместите компонент на странице, система должна будет понять, что из этого файла вы хотите показать/отдать, а что нет. Так вот эта строка говорит о том, что вы хотите экспортировать из файла когда к нему кто-то обратится. В нашем случае мы экспортируем наш компонент, но не простой а обернутый в atomize с дополнительными параметрами в фигурных скобках:
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="name: &quot;Counter&quot;," />
					<Components.HelpParagraph>
						Имя компонента, которое показывается на панели свойств
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="effects: {\n  hover: &quot;:hover&quot;\n}," />
					<Components.HelpParagraph>
						Какие эффекты будут у компонента, по умолчанию только hover (можно менять оформление компонента при наведении мыши).
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="normalize: true,\nmixins: true," />
					<Components.HelpParagraph>
						Это технические параметры, пока не будем их рассматривать.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="description: {\n  // paste here description for your component\n  en:\n    &quot;Counter — my awesome component&quot;,\n}," />
					<Components.HelpParagraph>
						Описание компонента на английском языке
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="propInfo: {\n  // paste here props description for your component\n  yourCustomProps: {\n    control: &quot;input&quot;\n  }\n}" />
					<Components.HelpParagraph>
						Описание пропса который будет на панели, с типом — поле ввода.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpImageBlockCapture>
					<Override slot="text">
						Скриншот панели с пропсом
					</Override>
					<Override slot="helpImageBlock" src="https://test-upl.quarkly.io/607d35546381680022816b8a/images/Selection_166.png?v=2021-05-06T08:16:12.313Z" />
				</Components.HelpImageBlockCapture>
				<Components.HelpParagraph>
					С кодом разобрались, теперь давайте перетащим компонент на страницу. Закройте редактор кода. И сначала добавим на страницу компонент Section из вкладки Quarkly UI, в который уже и перетащим наш Counter. Section нужен чтобы наш компонент отделить от границ страницы.{" "}
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Наш компонент на странице выглядит как надпись «Say hello Counter»
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Кликните по компоненту, и на правой панели найдите раздел Typography, а в нём Color и введите в поле ввода «red». Как видите мы можем оформлять наш компонент на правой панели — это потому что мы обернули компонент в atomize.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Пойдем дальше и добавим несколько строк в наш компонент, чтобы сделать из него простой счетчик кликов.
				</Components.HelpParagraph>
				<Components.HelpHeader3>
					Делаем счетчик
				</Components.HelpHeader3>
				<Components.HelpParagraph>
					Счетчик кликов будет работать следующим образом: слева будет цифра 0, а справа кнопка, нажимая на кнопку цифра будет увеличиваться на 1, то есть считать клики. Приступим.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Меняем строчку{" "}
				</Components.HelpParagraph>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="import React from 'react';" />
					<Components.HelpParagraph>
						на
					</Components.HelpParagraph>
					<Components.HelpCodeBlock code="import React, { useState, useCallback } from 'react';" />
					<Components.HelpParagraph>
						Здесь помимо самого React мы еще импортируем два хука (функции), которые нам дальше сильно помогут. Расскажу о них ниже.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpParagraph>
						Под строчкой
					</Components.HelpParagraph>
					<Components.HelpCodeBlock code="import atomize from &quot;@quarkly/atomize&quot;;" />
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpParagraph>
						Добавим импорт примитива Button, который будет нашей кнопкой.
					</Components.HelpParagraph>
					<Components.HelpCodeBlock code="import { Button } from &quot;@quarkly/widgets&quot;;" />
				</Components.HelpGroup>
				<Components.HelpParagraph>
					И ниже импортируем хук useOverrides. Это специальная функция, которая делает магию и позволит выбирать и оформлять на странице подэлементы нашего компонента: цифру и кнопку. Да, нужно будет задать это явно, потому что Quarkly не знает что вам нужно будет выбирать и стилизовать, а что нет.
				</Components.HelpParagraph>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="import { useOverrides } from &quot;@quarkly/components&quot;" />
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpParagraph>
						Теперь меняем строчку{" "}
					</Components.HelpParagraph>
					<Components.HelpCodeBlock code="const Counter = props => <div {...props}>Say hello Counter</div>" />
					<Components.HelpParagraph>
						на (Не пугайтесь!)
					</Components.HelpParagraph>
					<Components.HelpCodeBlock code="const Counter = props => {\n  const { override, children, rest } = useOverrides(props, {}, {});\n  const [counter, setCounter] = useState(0);\n  const onIncrement = useCallback(() => setCounter(val => val + 1), [setCounter]);\n  return (\n    <div {...rest}>\n      {`counter: ${counter}`}\n      <Button\n        {...override(&quot;btn&quot;)}\n        onClick={onIncrement}>\n        Increment\n      </Button>\n      {children}\n    </div> \n  )\n};" />
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpParagraph>
						Разберемся что здесь происходит построчно
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="const Counter = props => {" />
					<Components.HelpParagraph>
						Фигурная скобка в конце говорит о том что дальше будет многострочное выражение
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="const { override, children, rest } = useOverrides(props, {}, {});" />
					<Components.HelpParagraph>
						Это вызов хука useOverrides, чтобы можно было редактировать компонент и его подкомпоненты на странице. Хук возвращает следующие данные:
						<List>
							<Text>
								override — функция с помощью которой можно определить редактируемые через конструктор (его UI) части компонента
							</Text>
							<Text>
								children — это на случай если вы захотите вложить в ваш компонент ещё один дочерний
							</Text>
							<Text>
								rest — свойства которые передали вашему компоненту из вне (при его использовании в JSX)
							</Text>
						</List>
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="const [counter, setCounter] = useState(0);" />
					<Components.HelpParagraph>
						Чтобы использовать счетчик, нам нужно хранить его состояние. Например, если мы поставим изначальное значение 0, а потом прибавим 1 результат будет 1. Но в следующий раз, когда мы прибавим ещё 1 мы ожидаем увидеть 2, но будет 1. Потому что мы нигде не сохранили предыдущий результат, мы по сути всегда прибавляем 1 к изначальному значению (0).
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Так вот useState нужен чтобы хранить это состояние, и менять его. counter — хранит состояние, а setCounter — задает новое состояние. useState этим всем управляет и параметром принимает изначальное значение (0). Фух, вроде разобрались, идем дальше.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="const onIncrement = useCallback(() => setCounter(val => val + 1), [setCounter]);" />
					<Components.HelpParagraph>
						После того как мы создали функцию которая управляет состоянием счетчика, нам нужно создать функцию — обработчик события нажатия на кнопку (onClick). Для этого объявляем новую функцию onIncrement, в теле которой вызываем setCounter. При каждом вызове функции setCounter будет меняться значение счетчика, и компонент будет перерисовываться отображая новую цифру. Перерисовка в данном случае означает повторный новый вызов функции компонента (код внутри этой функции выполняется повторно). Наш обработчик как часть компонента будет создаваться заново, что является дополнительной нагрузкой на браузер. Для нашего примера это не критично, но если будет перерисовываться более сложный компонент, это может привести к тормозам и зависаниями. Для того чтобы функция-обработчик не создавалась новая при каждой отрисовке компонента, мы используем хук useCallback. В этот хук мы передаем наш обработчик события первым аргументом, а вторым аргументом массив с зависимостями этого обработчика. Зависимостями в данном случае являются все функции, переменные которые объявлены выше и используются внутри обработчика события. А конкретно функция setCounter.
					</Components.HelpParagraph>
					<Components.HelpParagraph>
						Здесь мы увеличиваем на 1 наше состояние, наш счетчик. Как мы помним функция setCounter задает новое состояние которое равно старому + 1 (val =&gt; val + 1). useCallback нужен для оптимизации. Это нужно в случаях когда мы часто меняем значение, которое зависит от предыдущего. Вторым аргументом функции useCallback передаем так называемые зависимости, в нашем случае — setCounter, это говорит useCallback не вызывать setCounter заново, пока setCounter внутри не поменяется. А он у нас не меняется.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="return (" />
					<Components.HelpParagraph>
						Здесь мы пишем, что будет собственно показывать компонент
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="<div {...rest}>" />
					<Components.HelpParagraph>
						Тег div с параметрами из rest которые мы получаем из хука useOverrides. Тут я уточню что все стили, содержимое, и возможный children всё мы забираем из хука useOverrides который собирает все изменения которые мы делаем на странице. Далее мы раскидываем это всё по нашим компонентам. В частности вот в этот контейнер div приходят стили.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="{`counter: ${counter}`}" />
					<Components.HelpParagraph>
						Здесь не просто текст внутри div, а выражение, значит мы оборачиваем его в фигурные скобки и в специальные кавычки (backtick). Почему выражение? Есть текст counter: и есть переменная из нашего состояния counter. Переменную мы оборачиваем еще в $&#123;counter&#125;. Таков синтаксис, ничего не попишешь, раньше ещё хуже было.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="<Button" />
					<Components.HelpParagraph>
						Дальше идет наша кнопка которая будет управлять добавлением цифры.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="{...override('btn')}" />
					<Components.HelpParagraph>
						Здесь мы задаем название слота для useOverride, чтобы мы могли на холсте выбрать именно эту кнопку под её уникальным названием и стилизовать её.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="onClick={onIncrement} >" />
					<Components.HelpParagraph>
						onClick — это событие кнопки, которое срабатывает когда вы кликаете на неё правой кнопкой мыши. Таких событий много, поиграемся потом. Сейчас важно что при этом событии мы вызываем функцию onIncrement.{" "}
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="Increment" />
					<Components.HelpParagraph>
						Это текст в кнопке
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="</Button>" />
					<Components.HelpParagraph>
						Тег кнопки закрылся
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpGroup margin="14px 0px 0px 0px">
					<Components.HelpCodeBlock code="{children}" />
					<Components.HelpParagraph>
						Это указание для useOverride что если вы будете перемещать новые элементы в компонент, они появятся здесь.
					</Components.HelpParagraph>
				</Components.HelpGroup>
				<Components.HelpParagraph>
					Дальше мы закрываем тег div, return и сам компонент.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Сохраняем и переходим в режим предпросмотра (глазик в верхнем правом углу)
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Кнопка работает и счетчик считает клики.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Теперь поиграемся с событиями:
					<List>
						<Text>
							—  Замените onClick на onMouseOver — теперь считаются не клики а количество наведений курсора мыши на кнопку
						</Text>
						<Text>
							— Замените на onMouseMove — теперь считаются движения мыши внутри кнопки
						</Text>
						<Text>
							— Замените на onBlur — теперь считаются потери фокуса, для этого сначала кликните на кнопку, а потом вне её.
						</Text>
					</List>
				</Components.HelpParagraph>
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
import React from "react";
import theme from "theme";
import { Theme, Link, Em, Strong, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"how-tos-for-dev/render-content"} />
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
					Как выводить содержимое компонента
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					В этом разделе вы узнаете некоторые особенности разметки и вывода содержимого компонентов.
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							В качестве простейшего примера, выведем компонент{" "}
							<Em>
								Text
							</Em>
							{" "}с каким то содержимым:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<Text>Обычный текст</Text>" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Чтобы вывести значение переменной или пропса, достаточно обернуть имя переменной в фигурные скобки:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<Text>{someVariable}</Text>" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Аналогично переменной, можно выводить результат выполнения какой-либо функции:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<Text>{someFunction()}</Text>" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Вы можете добавить условия и различные выражения:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<Text>\\\\\\\\n  {someProp === 'opt1' ? 'Первая строка' : 'Вторая строка'}\\\\\\\\n</Text>" />
						<Components.HelpListItem>
							В этом примере мы проверяем, равно ли значение{" "}
							<Components.HelpCodeStroke>
								someProp
							</Components.HelpCodeStroke>
							{" "}указанному{" "}
							<Components.HelpCodeStroke>
								'opt1'
							</Components.HelpCodeStroke>
							{" "}и, если равно, то выводим{" "}
							<Components.HelpCodeStroke>
								Первая строка
							</Components.HelpCodeStroke>
							, а иначе выводим{" "}
							<Components.HelpCodeStroke>
								Вторая строка
							</Components.HelpCodeStroke>
							.
						</Components.HelpListItem>
						<Components.HelpListItem>
							Также, можно вынести часть текста за пределы выражения, чтобы не повторять его дважды. Итоговый пример будет выглядеть так:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<MyButton>\\\\\\\\n  {someProp === 'opt1' ? 'Первая' : 'Вторая'} строка\\\\\\\\n</MyButton>\\\\\\\\n" />
						<Components.HelpListItem>
							Если в вашей задаче достаточно только, например, выполнения условия{" "}
							<Components.HelpCodeStroke>
								someProp === 'opt1'
							</Components.HelpCodeStroke>
							{" "}и вторую строку выводить не нужно, можно упростить предыдущий пример:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<MyButton>\\\\\\\\n  {someProp === 'opt1' && 'Первая строка'}\\\\\\\\n</MyButton>" />
						<Components.HelpListItem>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Примечание:{" "}
							</Strong>
							Аналогично, по условию, можно показывать или скрывать конкретные компоненты, например:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<MyButton>\\\\\\\\n  { someProp === 'opt1'\\\\\\\\n    ? <Text>Первый компонент</Text>\\\\\\\\n    : <Text>Второй компонент</Text>\\\\\\\\n  }\\\\\\\\n</MyButton>" />
						<Components.HelpListItem>
							или:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<MyButton>\\\\\\\\n  { someProp === 'opt1' && <Text>Первый компонент</Text> }\\\\\\\\n</MyButton>" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Чтобы перенести текст на новую строку, добавьте тег{" "}
							<Components.HelpCodeStroke>
								&lt;br /&gt;
							</Components.HelpCodeStroke>
							{" "}на место переноса:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="<Text>\\\\\\\\n  Первая строка <br />\\\\\\\\n  Вторая строка\\\\\\\\n</Text>" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Чтобы не разрывать текст, вы также можете обернуть его в фигурные скобки с грависами (наклонный апостроф), чтобы применить к тексту все отступы и переносы, а также вставлять значения переменных, функций или выражения в середину текста при помощи конструкции{" "}
							<Components.HelpCodeStroke>
								$&#123;someVariable&#125;
							</Components.HelpCodeStroke>
							:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code=" <Text>\\\\\\\\n  {` Первая строка с переменной ${someVariable}\\\\\\\\n  Вторая строка с результатом функции ${someFunction()}\\\\\\\\n  Третья строка с выражением 2+2=${2+2}\\\\\\\\n  Четвертая строка \\\\\\\\\\\\\\\\n Пятая строка `}\\\\\\\\n</Text>" />
						<Components.HelpListItem>
							В этом примере обратите внимание на символ{" "}
							<Components.HelpCodeStroke>
								\n
							</Components.HelpCodeStroke>
							, он также создает перенос строки, при этом не разрывая её в коде компонента. Вот небольшой список специальных символов:
						</Components.HelpListItem>
						<Components.HelpListMarked>
							<Components.HelpListItem>
								\n – Перенос строки;
							</Components.HelpListItem>
							<Components.HelpListItem>
								\' – Одинарная кавычка (если вы использовали одинарные кавычки при выводе текста);
							</Components.HelpListItem>
							<Components.HelpListItem>
								\" – Двойная кавычка (если вы использовали двойные кавычки при выводе текста);
							</Components.HelpListItem>
							<Components.HelpListItem>
								\\ – Обратный слеш;
							</Components.HelpListItem>
							<Components.HelpListItem>
								\t – Знак табуляции.
							</Components.HelpListItem>
						</Components.HelpListMarked>
						<Components.HelpListItem>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Примечание:
							</Strong>
							{" "}Конструктор позволяет форматировать текст из интерфейса, что в большинстве случаев удобнее и обычно имеет смысл дать пользователю возможность форматировать текст на его усмотрение, а описывать в компоненте только содержимое выводимого текста.
						</Components.HelpListItem>
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Вы также можете записать в переменную целый фрагмент разметки и после вставить его в код в разных местах. Например, сделать функцию, которая будет возвращать готовую разметку для вывода. Выведем заголовок и описание:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="const headerVariable = <h1>Какой то текст заголовка!</h1>;\\\\\\\\nconst getDescription = text => <p>Потрясающий {text}.</p>;\\\\\\\\n\\\\\\\\nreturn (\\\\\\\\n  <Box {...props}>\\\\\\\\n    {headerVariable}\\\\\\\\n    {getDescription('текст описания')}\\\\\\\\n  </Box>\\\\\\\\n);" />
						<Components.HelpListItem>
							Таким образом вы можете выносить части разметки в отдельные функции за пределы тела компонента и разделить сложный компонент на несколько частей.
						</Components.HelpListItem>
					</Components.HelpListGroup>
				</Components.HelpListMarked>
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
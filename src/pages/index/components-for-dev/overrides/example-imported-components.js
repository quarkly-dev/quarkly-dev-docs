import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/components-for-dev/overrides/example-imported-components"} />
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
					Пример:
					<br />
					Компонент с оверрайдами
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Если вы импортировали ранее созданный компонент с оверрайдами в другой, необходимо вызвать функцию{" "}
					<Components.HelpCodeStroke>
						overrides
					</Components.HelpCodeStroke>
					{" "}на импортированном компоненте, чтобы иметь возможность редактировать его в конструкторе.
				</Components.HelpParagraph>
				<Components.HelpParagraph>
					Для примера, создадим новый компонент, назовём его{" "}
					<Components.HelpCodeStroke>
						MyForm
					</Components.HelpCodeStroke>
					{" "}и импортируем в него ранее созданный компонент{" "}
					<Components.HelpCodeStroke>
						MyButton
					</Components.HelpCodeStroke>
					:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import React from 'react';\n\nimport { useOverrides } from '@quarkly/components';\nimport { Box, Input } from '@quarkly/widgets';\n\nimport MyButton from './MyButton';\n\nconst overrides = {\n  'Form Input': {\n    kind: 'Input'\n  },\n  'Form Button': {\n    kind: 'MyButton',\n    props: {\n      src: 'override_src_property'\n    }\n  }\n}\n\nconst MyForm = props => {\n  const { override, rest } = useOverrides(props, overrides);\n  \n  return (\n    <Box {...rest}>\n      <Input {...override('Form Input', 'First Input')} />\n      <Input {...override('Form Input', 'Second Input')} />\n      <MyButton {...override('Form Button')} />\n    </Box>\n  );\n};\n\nexport default Object.assign(MyForm, {\n  title: 'My Form',\n  overrides,\n});" />
				<Components.HelpParagraph>
					В объекте{" "}
					<Components.HelpCodeStroke>
						overrides
					</Components.HelpCodeStroke>
					{" "}мы добавили оверрайд для импортированного компонента{"  "}
					<Components.HelpCodeStroke>
						MyButton
					</Components.HelpCodeStroke>
					. В свойстве{" "}
					<Components.HelpCodeStroke>
						kind
					</Components.HelpCodeStroke>
					, по аналогии с другими компонентами, мы указали имя импортированного компонента, чтобы вывести на панель Props его параметры. В свойстве{" "}
					<Components.HelpCodeStroke>
						props
					</Components.HelpCodeStroke>
					{" "}также можно передать компоненту любые пропсы включая те, что выводятся на панели Props, например{" "}
					<Components.HelpCodeStroke>
						src
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
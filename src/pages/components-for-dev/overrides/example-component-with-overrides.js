import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/overrides/example-component-with-overrides"} />
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
					Компоненты с оверрайдами
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Резюмируя текущий раздел, создадим компонент{" "}
					<Components.HelpCodeStroke>
						MyButton
					</Components.HelpCodeStroke>
					, состоящий из ссылки, иконки и текста. Добавим один параметр{" "}
					<Components.HelpCodeStroke>
						src
					</Components.HelpCodeStroke>
					{" "}на панели Props, а также добавим оверрайды на вложенные компоненты:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import React from 'react';\n\nimport { useOverrides } from '@quarkly/components';\nimport { Link, Icon, Text } from '@quarkly/widgets';\n\nconst overrides = {\n  'Button Icon': {\n    kind: 'Icon',\n    props: {\n      category: 'md',\n      icon: 'MdInfoOutline',\n    }\n  },\n  'Button Text': {\n    kind: 'Text'\n  }\n}\n\nconst MyButton = ({ src, ...props }) => {\n  const { override, rest } = useOverrides(props, overrides);\n  \n  return (\n    <Link src={src} {...rest}>\n      <Icon {...override('Button Icon')} />\n      <Text {...override('Button Text')}>\n        {override('Button Text').children || 'Get Info'}\n      </Text>\n    </Link>\n  );\n};\n\nconst propInfo = {\n  src: {\n    title: 'SRC',\n    control: 'input',\n    weight: 1\n  }\n}\n\nconst defaultProps = {\n  src: 'default_src_property'\n}\n\nexport default Object.assign(MyButton, {\n  title: 'My Button Component',\n  propInfo,\n  defaultProps,\n  overrides,\n});" />
				<Components.HelpParagraph>
					В этом примере мы создали объект{" "}
					<Components.HelpCodeStroke>
						overrides
					</Components.HelpCodeStroke>
					, в котором указали список всех оверрайдов в компоненте. После чего, внутри компонента, вызвали{" "}
					<Components.HelpCodeStroke>
						useOverrides
					</Components.HelpCodeStroke>
					. Объект{" "}
					<Components.HelpCodeStroke>
						rest
					</Components.HelpCodeStroke>
					{" "}передали в конец родительского компонента, а функцию{" "}
					<Components.HelpCodeStroke>
						{" "}override
					</Components.HelpCodeStroke>
					{" "}вызвали в каждом дочернем компоненте с нужным именем оверрайда. При экспорте компонента также не забыли передать созданный ранее объект{" "}
					<Components.HelpCodeStroke>
						{" "}overrides
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
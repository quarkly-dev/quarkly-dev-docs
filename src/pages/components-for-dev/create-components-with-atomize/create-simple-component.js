import React from "react";
import theme from "theme";
import { Theme, Link, Em, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"components-for-dev/create-components-with-atomize/create-simple-component"} />
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
					Создание простого компонента
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Чтобы создать новый компонент из HTML-элемента или другого компонента, подключите библиотеку{" "}
					<Em>
						atomize
					</Em>
					:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="import atomize from '@quarkly/atomize';" />
				<Components.HelpParagraph>
					Atomize является оберткой над styled-components и имеет похожий API.Просто вызовите метод, используя имя нужного HTML-элемента, например сделаем из элемента{" "}
					<Em>
						button
					</Em>
					{" "}новый компонент:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="const MyButton = atomize.button();" />
				<Components.HelpParagraph>
					Вы также можете создать новый компонент из уже существующего:
				</Components.HelpParagraph>
				<Components.HelpListMarked>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Пример создания компонента из импортированного:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="import { Button } from '@quarkly/widgets';\n\nconst MyButton = atomize(Button);" />
					</Components.HelpListGroup>
					<Components.HelpListGroup>
						<Components.HelpListItem>
							Пример создания компонента из другого, ранее созданного:
						</Components.HelpListItem>
						<Components.HelpCodeBlock code="const Button = ({ children }) => {\n  // some logic here\n  return <button>{children}</button>;\n};\n\nconst MyButton = atomize(Button);" />
					</Components.HelpListGroup>
				</Components.HelpListMarked>
				<Components.HelpParagraph>
					В результате получим React-компонент, который может принимать любые CSS-стили или параметры, например:
				</Components.HelpParagraph>
				<Components.HelpCodeBlock code="<MyButton color=&quot;red&quot; />" />
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
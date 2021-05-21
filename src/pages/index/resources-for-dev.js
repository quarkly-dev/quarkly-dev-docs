import React from "react";
import theme from "theme";
import { Theme, Link, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/resources-for-dev"} />
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
					Resources
				</Components.HelpHeader2>
				<Components.HelpParagraph>
					Ссылки на документации сервисов и библиотек, которые используются в проектах Quarkly.
				</Components.HelpParagraph>
				<Stack
					width="100%"
					gap="12px"
					sm-margin="-6px auto -6px auto"
					flex="1 1 auto"
					height="auto"
					margin="18px -6px -6px -6px"
				>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://reactjs.org/docs/getting-started.html"
							target="_blank"
							flex-direction="row"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							padding="36px 36px 36px 36px"
							text-decoration-line="initial"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/react-logo-docs.svg?v=2021-03-30T14:17:12.256Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								React
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								JS библиотека для построения интерфейса в проектах Quarkly
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://styled-components.com/docs"
							target="_blank"
							padding="36px 36px 36px 36px"
							flex-direction="row"
							height="auto"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							text-decoration-line="initial"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/styled-components-logo.png?v=2021-03-30T14:12:28.019Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								Styled Components
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								Используется для стилизации компонентов
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://atomize.quarkly.io/docs"
							target="_blank"
							padding="36px 36px 36px 36px"
							text-decoration-line="initial"
							flex-direction="row"
							height="auto"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/atomize-logo.svg?v=2021-03-30T13:50:46.485Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								Atomize
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								Используется для стилизации компонентов, назначения стилей на брейкпоинтах и эффектах
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://www.gatsbyjs.com/docs/"
							target="_blank"
							padding="36px 36px 36px 36px"
							text-decoration-line="initial"
							flex-direction="row"
							height="auto"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/gatsby-logo-docs.svg?v=2021-03-30T14:18:01.830Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								Gatsby
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								Оптимизирует и организует проект в виде современного сайта
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://create-react-app.dev/docs/getting-started"
							target="_blank"
							padding="36px 36px 36px 36px"
							text-decoration-line="initial"
							flex-direction="row"
							height="auto"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/cra-logo-docs.svg?v=2021-03-30T15:14:58.685Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								Create React App
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								Оптимизирует и организует проект в виде приложения
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
					<StackItem width="100%">
						<Override
							slot="StackItemContent"
							as="a"
							href="https://docs.netlify.com/"
							target="_blank"
							padding="36px 36px 36px 36px"
							text-decoration-line="initial"
							flex-direction="row"
							height="auto"
							border-radius="12px"
							hover-background="--color-light"
							border-width="2px"
							border-style="solid"
							border-color="--color-lightD1"
							hover-transition="background-color 0.1s --transitionTimingFunction-easeInOut 0s"
							md-padding="18px 24px 18px 24px"
							sm-flex-direction="column"
						/>
						<Components.HelpImageBlock
							src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/netlify-logo-docs.svg?v=2021-03-30T14:17:12.250Z"
							width="80px"
							height="80px"
							min-width="80px"
							margin="8px 24px 18px 0px"
						/>
						<Components.HelpGroup>
							<Components.HelpHeader3 margin="12px 0px 0px 0px">
								Netlify
							</Components.HelpHeader3>
							<Components.HelpParagraph>
								Собирает и публикует проект
							</Components.HelpParagraph>
						</Components.HelpGroup>
					</StackItem>
				</Stack>
				<Components.HelpPrevNextButton hierarchy="several">
					<Override slot="Button :next" display="none" />
				</Components.HelpPrevNextButton>
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
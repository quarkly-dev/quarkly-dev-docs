import React, { useState, useEffect, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text, Link, Icon } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useRouteMatch } from "react-router-dom";
import { useMatch } from "@reach/router"; // В компоненте несколько иконок,
// чтобы не дублировать вынес отдельно

import { FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
const iconProps = {
	normal: {
		'category': 'fi',
		'icon': FiMenu,
		'size': '24px',
		'color': '--dark'
	},
	closed: {
		'category': 'fi',
		'icon': FiMenu
	},
	open: {
		'category': 'fi',
		'icon': FiX
	}
}; // Собираем статические оверрайды

const overrides = {
	'Button': {
		kind: 'Box',
		"props": {
			"md-position": "fixed",
			"md-bottom": "12px",
			"md-left": "22px",
			"md-padding": "4px 12px 4px 12px",
			"md-background": "--color-dark",
			"md-opacity": ".6",
			"md-color": "--light",
			"md-z-index": "4",
			"md-border-radius": "4px",
			"md-font": "10px sans-serif",
			"md-text-transform": "uppercase"
		}
	},
	'Button Text': {
		kind: 'Text'
	},
	'Button Icon': {
		kind: 'Icon',
		props: { ...iconProps.normal,
			"color": "--light",
			"size": "20px",
			"md-margin": "0px 0px 0px 4px"
		}
	},
	'Button Icon :open': {
		kind: 'Icon',
		props: iconProps.open
	},
	'Button Icon :closed': {
		kind: 'Icon',
		props: iconProps.closed
	},
	'Wrapper': {
		kind: 'Box',
		"props": {
			"border-width": "0 1px 0 0",
			"border-style": "solid",
			"border-color": "--color-lightD2",
			"md-background": "none",
			"md-z-index": "5"
		}
	},
	'Overlay': {
		kind: 'Box'
	},
	'Content': {
		kind: 'Box',
		"props": {
			"overflow-y": "auto",
			"overflow-x": "visible"
		}
	},
	'Cross': {
		kind: 'Icon',
		props: iconProps.open
	},
	'Menu': {
		kind: 'Box'
	},
	'List': {
		kind: 'Ul'
	},
	'Item': {
		kind: 'Li'
	},
	'Sub Head': {
		kind: 'Box'
	},
	'Sub Head Text': {
		kind: 'Text',
		props: {
			"text-transform": "initial",
			"font": "normal 600 18px/1.4 --fontFamily-googleSourceSansPro",
			"letter-spacing": "0px",
			"color": "--darkL2"
		}
	},
	'Sub Head Icon': {
		kind: 'Icon',
		props: {
			"width": "24px",
			"height": "24px",
			"transition": "transform 0.1s ease-in-out 0s",
			"color": "--grey",
			"size": "20px",
			"padding": "2px 0px 0px 0px"
		}
	},
	'Sub Head Icon :open': {
		props: {
			transform: 'rotate(0deg)'
		}
	},
	'Sub Head Icon :closed': {
		props: {
			transform: 'rotate(-90deg)'
		}
	},
	'Sub Body': {
		kind: 'Box',
		props: {
			"padding": "0px 0px 8px 12px"
		}
	},
	'Sub Body :open': {
		props: {
			display: 'block'
		}
	},
	'Sub Body :closed': {
		props: {
			display: 'none'
		}
	},
	'Link': {
		kind: 'Link',
		props: {
			"text-decoration-line": "initial",
			"padding": "4px 12px 5px 8px",
			"hover-background": "rgba(36, 141, 224, 0.1)",
			"hover-border-radius": "8px",
			"font": "--capture",
			"margin": "2px 0px 4px 0px",
			"color": "--darkL2"
		}
	},
	'Link :active': {
		props: {
			"color": "--primary",
			"background": "rgba(36, 141, 224, 0.1)",
			"transition": "background 0.1s ease-in-out 0s",
			"border-radius": "8px",
			"font": "--capture",
			"margin": "2px 0px 4px 0px"
		}
	},
	"Sub Head Text-code-editor1": {
		"props": {
			"children": "Dashboard"
		}
	},
	"Sub Head Text-code-editor12": {
		"props": {
			"children": "Topbar"
		}
	},
	"Sub Head Text-code-editor122111": {
		"props": {
			"children": "Правая закрепленная панель"
		}
	},
	"Sub Head Text-code-editor1221121": {
		"props": {
			"children": "Page"
		}
	},
	"Sub Head Text-code-editor12211212": {
		"props": {
			"children": "Element props panel"
		}
	},
	"Sub Head Text-getting-started11": {
		"props": {
			"children": "Quarkly Interface"
		}
	},
	"Sub Head Text-code-editor1111": {
		"props": {
			"children": "Work Area"
		}
	},
	"Sub Head Text-overview122": {
		"props": {
			"children": "Work Area"
		}
	},
	"Sub Head Text-topbar": {
		"props": {
			"children": "Top bar"
		}
	},
	"Sub Head Text-work-area": {
		"props": {
			"children": "Work Area"
		}
	},
	"Sub Head Text-overview12211111": {
		"props": {
			"children": "Theme"
		}
	},
	"Sub Head Text-publish": {
		"props": {
			"children": "Publication"
		}
	},
	"Sub Head Text-add-elements": {
		"props": {
			"children": "Elements"
		}
	},
	"Sub Head Text-overview122111111": {
		"props": {
			"children": "Project settings"
		}
	},
	"Sub Head Text-overview1221111112111": {
		"props": {
			"children": "Custom code"
		}
	},
	"Sub Head Text-overview12211111111": {
		"props": {
			"children": "code editor"
		}
	},
	"Sub Head Text-dashboard": {
		"props": {
			"children": "Dashboard"
		}
	},
	"Sub Head Text-overview1221": {
		"props": {
			"children": "View bar"
		}
	},
	"Sub Head Text-interface": {
		"props": {
			"children": "Interface"
		}
	},
	"Sub Head Text-code-editor": {
		"props": {
			"children": "Code Editor"
		}
	},
	"Sub Head Text-custom-code": {
		"props": {
			"children": "Custom Code"
		}
	},
	"Sub Head Text-project-settings": {
		"props": {
			"children": "Project Settings"
		}
	},
	"Sub Head Text-theme": {
		"props": {
			"children": "Theme"
		}
	},
	"Sub Head Text-view-bar": {
		"props": {
			"children": "View Panel"
		}
	},
	"Link-props-panel": {
		"props": {
			"children": "Props Panel"
		}
	},
	"Sub Head Text-component-props": {
		"props": {
			"children": "Props"
		}
	},
	"Sub Head Text-overrides": {
		"props": {
			"children": "Overrides"
		}
	},
	"Sub Head Text-create-components-with-atomize": {
		"props": {
			"children": "Atomize"
		}
	},
	"Sub Head Text-create-components111": {
		"props": {
			"children": "Components"
		}
	},
	"Sub Head Text-getting-theme1": {
		"props": {
			"children": "Project API"
		}
	},
	"Sub Head Text-how-tos": {
		"props": {
			"children": "How to"
		}
	},
	"Sub Head Text-components-create": {
		"props": {
			"children": "Components"
		}
	},
	"Sub Head Text-project-api": {
		"props": {
			"children": "Project API"
		}
	},
	"Sub Head Text-components-overview": {
		"props": {
			"children": "Components"
		}
	},
	"Sub Head Text-tutorials": {
		"props": {
			"children": "Tutorials"
		}
	},
	"Sub Head Text-faq": {
		"props": {
			"children": "FAQ"
		}
	},
	"Sub Head Text-components-for-dev": {
		"props": {
			"children": "Components"
		}
	},
	"Sub Head Text-tutorials-for-dev": {
		"props": {
			"children": "Tutorials"
		}
	},
	"Sub Head Text-how-tos-for-dev": {
		"props": {
			"children": "How-to's"
		}
	},
	"Sub Head Text-faq-for-dev": {
		"props": {
			"children": "FAQ's"
		}
	}
}; // Дизайны стилями отличаются 50/50,
// чтобы меньше дублировать вынес отдельно

const getContentStyles = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction
}) => {
	const baseStyles = {
		'padding': menuPosition === 'near' ? '16px' : '28px 12px 48px',
		'min-width': '320px',
		'max-width': '100vw',
		'box-sizing': 'border-box',
		'align-items': 'flex-start',
		'justify-content': 'space-between',
		'flex-direction': 'row',
		[`${breakpoint}-min-height`]: '32px',
		[`${breakpoint}-flex-direction`]: 'column',
		[`${breakpoint}-box-shadow`]: '--xxl'
	};
	const animStyles = {
		appear: {
			open: {
				[`${breakpoint}-transition`]: `
					visibility ${animDuration} step-start,
					opacity ${animDuration} ${animFunction}
				`,
				[`${breakpoint}-visibility`]: 'visible',
				[`${breakpoint}-opacity`]: '1'
			},
			closed: {
				[`${breakpoint}-transition`]: `
					visibility ${animDuration} step-end,
					opacity ${animDuration} ${animFunction}
				`,
				[`${breakpoint}-visibility`]: 'hidden',
				[`${breakpoint}-opacity`]: '0'
			}
		},
		shift: {
			base: {
				[`${breakpoint}-transition`]: `
					transform ${animDuration} ${animFunction}
				`
			}
		}
	};

	switch (menuPosition) {
		case 'full':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '0',
					[`${breakpoint}-left`]: '0',
					[`${breakpoint}-width`]: '100%',
					[`${breakpoint}-height`]: '100%',
					[`${breakpoint}-position`]: 'fixed'
				},
				open: animStyles.appear.open,
				closed: animStyles.appear.closed
			};

		case 'left':
		case 'right':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '0',
					[`${breakpoint}-${menuPosition === 'left' ? 'right' : 'left'}`]: '100%',
					[`${breakpoint}-padding-top`]: '38px',
					[`${breakpoint}-min-width`]: '280px',
					[`${breakpoint}-max-width`]: '100vw',
					[`${breakpoint}-height`]: '100%',
					[`${breakpoint}-position`]: 'fixed'
				},
				closed: { ...animStyles.shift.base,
					[`${breakpoint}-transform`]: 'translateX(0)'
				},
				open: { ...animStyles.shift.base,
					[`${breakpoint}-transform`]: `translateX(${menuPosition === 'left' ? '100%' : '-100%'})`
				}
			};

		case 'near':
			return {
				normal: { ...baseStyles,
					[`${breakpoint}-top`]: '100%',
					[`${breakpoint}-right`]: '0',
					[`${breakpoint}-position`]: 'absolute'
				},
				open: animStyles.appear.open,
				closed: animStyles.appear.closed
			};
	}
}; // Собираем стили по пропсам


const getAllStyles = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction
}) => ({
	'Button': {
		display: 'none',
		[`${breakpoint}-display`]: 'inline-flex',
		[`${breakpoint}-flex`]: '0 0 auto',
		[`${breakpoint}-z-index`]: menuPosition === 'near' ? '2' : '1'
	},
	'Wrapper': {
		'width': '100%',
		'height': '100%',
		'position': 'relative',
		[`${breakpoint}-top`]: '0',
		[`${breakpoint}-left`]: '0',
		[`${breakpoint}-position`]: menuPosition === 'near' ? 'absolute' : 'fixed'
	},
	'Wrapper :open': {
		[`${breakpoint}-transition`]: `visibility ${animDuration} step-start`,
		[`${breakpoint}-visibility`]: 'visible'
	},
	'Wrapper :closed': {
		[`${breakpoint}-transition`]: `visibility ${animDuration} step-end`,
		[`${breakpoint}-visibility`]: 'hidden'
	},
	'Overlay': {
		'background-color': menuPosition === 'near' ? 'transparent' : 'rgba(0,0,0, .5)',
		'position': 'relative',
		'display': 'none',
		[`${breakpoint}-top`]: '0',
		[`${breakpoint}-left`]: '0',
		[`${breakpoint}-position`]: 'fixed',
		[`${breakpoint}-display`]: 'block'
	},
	'Overlay :open': {
		[`${breakpoint}-transition`]: `
			visibility ${animDuration} step-start,
			opacity ${animDuration} ${animFunction}
		`,
		[`${breakpoint}-visibility`]: 'visible',
		[`${breakpoint}-opacity`]: '1'
	},
	'Overlay :closed': {
		[`${breakpoint}-transition`]: `
			visibility ${animDuration} step-end,
			opacity ${animDuration} ${animFunction}
		`,
		[`${breakpoint}-visibility`]: 'hidden',
		[`${breakpoint}-opacity`]: '0'
	},
	'Content': getContentStyles({
		breakpoint,
		menuPosition,
		animDuration,
		animFunction
	}).normal,
	'Content :open': getContentStyles({
		breakpoint,
		menuPosition,
		animDuration,
		animFunction
	}).open,
	'Content :closed': getContentStyles({
		breakpoint,
		menuPosition,
		animDuration,
		animFunction
	}).closed,
	'Cross': {
		display: 'none',
		[`${breakpoint}-display`]: menuPosition === 'near' ? 'none' : 'block'
	}
});

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
}; // Получение родительской страницы, чтобы создать категорию


const getParent = (pages, pageId) => {
	if (!pageId || !pages[pageId]) return null;
	return Object.values(pages).find(({
		children = []
	}) => children && Array.isArray(children) && children.includes(pageId));
};

const Ul = atomize.ul();
const Li = atomize.li(); // Вложенная группа в меню

const Sub = ({
	common,
	item,
	other
}) => {
	const {
		tabState,
		override
	} = common,
	      {
		id,
		name,
		pageUrl
	} = item,
	      {
		pagePath,
		href,
		match,
		expanded
	} = other,
	      isClickable = tabState !== 'Keep all tabs expanded',
	      isSubOpenForce = tabState === 'Keep all tabs expanded' || tabState === 'Expand all tabs',
	      isSubCloseForce = tabState === 'Collapse all tabs',
	      [isSubOpen, setSubOpen] = useState(expanded && !isSubCloseForce || isSubOpenForce),
	      onSubToggle = useCallback(() => {
		setSubOpen(!isSubOpen);
	}, [isSubOpen]),
	      subOpenStatus = isSubOpen ? ':open' : ':closed';
	useEffect(() => {
		const isSubOpenForce = tabState === 'Keep all tabs expanded' || tabState === 'Expand all tabs';
		const isSubCloseForce = tabState === 'Collapse all tabs';
		setSubOpen(expanded && !isSubCloseForce || isSubOpenForce);
	}, [tabState]);
	return <>
		<Box
			padding="6px 12px 6px 8px"
			align-items="center"
			display="flex"
			cursor={isClickable ? 'pointer' : 'default'}
			onClick={isClickable && onSubToggle}
			{...override('Sub Head', `Sub Head-${pageUrl}`, match && 'Sub Head :active', `Sub Head ${subOpenStatus}`)}
		>
			<Text margin="0" white-space="nowrap" {...override('Sub Head Text', match && 'Sub Head Text :active', `Sub Head Text ${subOpenStatus}`, `Sub Head Text-${pageUrl}`)}>
				{override(`Sub Head Text-${pageUrl}`).children || 'Group Name'}
			</Text>
			{isClickable && <Icon category="md" icon={MdKeyboardArrowDown} size="16px" {...override('Sub Head Icon', `Sub Head Icon-${pageUrl}`, match && 'Sub Head Icon :active', `Sub Head Icon ${subOpenStatus}`)} />}
		</Box>
		<Box padding="6px 12px" {...override('Sub Body', `Sub Body-${pageUrl}`, match && 'Sub Body :active', `Sub Body ${subOpenStatus}`)}>
			<Link
				padding="6px 12px"
				white-space="nowrap"
				display="block"
				href={href}
				{...override('Link', `Link-${pageUrl}`, match && 'Link :active', `Link ${subOpenStatus}`)}
			>
				{override(`Link-${pageUrl}`).children || name}
			</Link>
			<List
				list-style="none"
				rootId={id}
				path={pagePath}
				{...common}
				{...override('List', `List-${pageUrl}`, match && 'List :active', `List ${subOpenStatus}`)}
			/>
		</Box>
	</>;
}; // Ссылка или заголовок с названием группы


const Item = ({
	path,
	common,
	item
}) => {
	const {
		mode,
		projectType
	} = getAPI(),
	      {
		depth,
		level,
		tabState,
		override
	} = common,
	      {
		name,
		pageUrl,
		children
	} = item,
	      hasSub = !!(children && children.length && level < depth),
	      expand = tabState === 'Expand before active item',
	      pagePath = [...path, mode === "production" && pageUrl === "index" ? "" : pageUrl],
	      href = `/${pagePath.join('/')}`;
	let match = null,
	    expanded = false;

	if (projectType === 'gatsby') {
		match = useMatch(href) && true;
	} else {
		match = useRouteMatch({
			path: href,
			exact: true
		}) && true;
		expanded = useRouteMatch({
			path: href,
			exact: !expand
		}) && true;
	}

	return <Li {...override('Item', `Item-${pageUrl}`, match && 'Item :active')}>
		{hasSub ? <Sub
			path={path}
			common={common}
			item={item}
			other={{
				projectType,
				pagePath,
				href,
				match,
				expanded
			}}
			{...override('Sub', `Sub-${pageUrl}`, match && 'Sub :active')}
		/> : <Link
			padding="6px 12px"
			white-space="nowrap"
			display="block"
			href={href}
			{...override('Link', `Link-${pageUrl}`, match && 'Link :active')}
		>
			{override(`Link-${pageUrl}`).children || name}
		</Link>}
	</Li>;
}; // Список ссылок в группе


const List = ({
	rootId,
	path,
	pages,
	depth,
	expand,
	level = 0,
	tabState,
	override,
	...rest
}) => {
	const rootPage = pages?.[rootId];
	const common = {
		pages,
		depth,
		expand,
		level: level + 1,
		tabState,
		override
	};
	const list = rootPage?.children?.map(id => pages[id]) ?? [];
	return <Ul padding="0" list-style="none" {...rest}>
		{list.map(item => <Item key={item.id} path={path} common={common} item={item} />)}
	</Ul>;
}; // Основной компонент меню


const Menu = ({
	depth,
	rootId,
	expand,
	tabState,
	override
}) => {
	const pages = getAPI().pages || {};
	let path = [];

	if (rootId !== 'root') {
		let parent = pages[rootId];

		while (parent && parent.id !== 'root') {
			path = [parent.pageUrl, ...path];
			parent = getParent(pages, parent?.id);
		}
	}

	return <List
		user-select="none"
		flex-direction="column"
		display="flex"
		position="relative"
		z-index="10"
		rootId={rootId}
		path={path}
		pages={pages}
		depth={depth}
		expand={expand}
		tabState={tabState}
		override={override}
		{...override('Menu')}
	/>;
}; // Панель для выравнивания в мобильном виде


const Panel = ({
	breakpoint,
	menuPosition,
	animDuration,
	animFunction,
	depth,
	rootId,
	expand,
	tabState,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [isOpen, setOpen] = useState(false);
	const onToggle = useCallback(() => setOpen(!isOpen), [isOpen]);

	const onOpen = () => setOpen(true);

	const onClose = () => setOpen(false);

	const styles = getAllStyles({
		breakpoint,
		menuPosition,
		animDuration,
		animFunction
	});
	const statusOpen = menuPosition === 'near' && isOpen ? ':open' : ':closed';
	return <Box flex="0 0 auto" display="flex" z-index="5" {...rest}>
		<Box
			padding-right="3px"
			min-height="0"
			align-items="center"
			align-self="flex-end"
			position="relative"
			cursor="pointer"
			onPointerDown={menuPosition === 'near' ? onToggle : onOpen}
			{...styles['Button']}
			{...override('Button', `Button ${statusOpen}`)}
		>
			<Text margin="0 .35em 0 0" font-size="14px" user-select="none" {...override('Button Text', `Button Text ${statusOpen}`)}>
				{override(`Button Text ${statusOpen}`).children || override('Button Text').children || 'menu'}
			</Text>
			<Icon {...override('Button Icon', `Button Icon ${statusOpen}`)} />
		</Box>
		<Box
			align-items="flex-start"
			background-color="#FFFFFF"
			display="flex"
			z-index="1"
			{...styles['Wrapper']}
			{...styles[`Wrapper ${isOpen ? ':open' : ':closed'}`]}
			{...override('Wrapper', `Wrapper ${isOpen ? ':open' : ':closed'}`)}
		>
			<Box
				width="100%"
				height="100%"
				z-index="1"
				onPointerDown={onClose}
				{...styles['Overlay']}
				{...styles[`Overlay ${isOpen ? ':open' : ':closed'}`]}
				{...override('Overlay', `Overlay ${isOpen ? ':open' : ':closed'}`)}
			/>
			<Box
				top="0"
				position="sticky"
				max-width="100vw"
				max-height="100vh"
				background-color="#FFFFFF"
				box-sizing="border-box"
				display="flex"
				z-index="2"
				{...styles['Content']}
				{...styles[`Content ${isOpen ? ':open' : ':closed'}`]}
				{...override('Content', `Content ${isOpen ? ':open' : ':closed'}`)}
			>
				<Icon
					top="16px"
					right="16px"
					position="absolute"
					cursor="pointer"
					onPointerDown={onClose}
					{...styles['Cross']}
					{...override('Cross')}
				/>
				<Menu
					rootId={rootId}
					depth={depth}
					expand={expand}
					tabState={tabState}
					override={override}
				/>
			</Box>
		</Box>
	</Box>;
};

const propInfo = {
	breakpoint: {
		title: 'Mobile version breakpoint',
		control: 'text',
		type: 'string',
		category: 'Main',
		weight: 1
	},
	menuPosition: {
		title: 'Mobile panel position',
		control: 'radio-group',
		variants: ['full', 'left', 'right', 'near'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	animDuration: {
		title: 'Show/hide Duration',
		control: 'text',
		type: 'string',
		category: 'Animation',
		weight: 1
	},
	animFunction: {
		title: 'Show/hide Easing Function',
		control: 'select',
		variants: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
		type: 'string',
		category: 'Animation',
		weight: 1
	},
	depth: {
		title: 'Depth',
		control: 'input',
		category: 'Menu',
		weight: 1
	},
	rootId: {
		title: 'Root ID',
		control: 'input',
		category: 'Menu',
		weight: 1
	},
	tabState: {
		title: 'Tab state by default',
		control: 'select',
		variants: ['Collapse all tabs', 'Expand before active item', 'Expand all tabs', 'Keep all tabs expanded'],
		category: 'Menu',
		weight: 1
	}
};
const defaultProps = {
	breakpoint: 'md',
	animDuration: '.3s',
	animFunction: 'ease',
	"depth": "10",
	"menuPosition": "left",
	"tabState": "Expand before active item",
	"md-width": "0%",
	"md-min-width": 0,
	"rootId": "607d35566381680022816c19"
};
export default Object.assign(Panel, {
	title: 'SideBar Menu',
	description: {
		en: 'Awesome SideBar Menu'
	},
	overrides,
	propInfo,
	defaultProps
});
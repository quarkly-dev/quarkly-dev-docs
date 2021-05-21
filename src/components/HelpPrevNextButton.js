import React from 'react';
import { useLocation as useReactLocation } from "react-router-dom";
import { useLocation as useReachLocation } from "@reach/router";
import { useOverrides } from '@quarkly/components';
import { Box, Text, Link, Icon } from '@quarkly/widgets';
const overrides = {
	'Button': {
		kind: 'Link',
		props: {
			'padding': '0px 24px 0px 24px',
			'height': 'auto',
			'font': '--font-lead',
			'text-transform': 'uppercase',
			'text-decoration': 'none',
			'color': '--color-primary',
			'background': '--color-primary',
			'border': '2px solid --color-primary',
			'border-radius': '40px',
			'align-items': 'center',
			'position': 'relative',
			'display': 'flex'
		}
	},
	'Button :prev': {
		props: {
			'padding': '8px 24px 14px 8px',
			'justify-content': 'flex-start',
			'text-align': 'left'
		}
	},
	'Button :next': {
		props: {
			'padding': '8px 8px 14px 22px',
			'justify-content': 'flex-end',
			'text-align': 'right'
		}
	},
	'Button Icon': {
		kind: 'Icon',
		props: {
			'category': 'bs',
			'size': '36px',
			'color': '--light',
			'top': '27px',
			'margin': 'auto 0px -11px 0px',
			'text-transform': 'initial'
		}
	},
	'Button Icon :prev': {
		props: {
			'icon': 'BsArrowLeftShort',
			'order': '1'
		}
	},
	'Button Icon :next': {
		props: {
			'icon': 'BsArrowRightShort',
			'order': '3'
		}
	},
	'Button Text': {
		kind: 'Box',
		props: {
			'order': '2'
		}
	},
	'Button Name': {
		kind: 'Text',
		props: {
			'margin': '0',
			'padding': '0px 0px 2px 0px',
			'font': '12px/14px \"Source Sans Pro\", sans-serif',
			'letter-spacing': '1px',
			'color': '--lightD2'
		}
	},
	'Button Name :prev': {
		props: {
			'children': 'Prev'
		}
	},
	'Button Name :next': {
		props: {
			'children': 'Next'
		}
	},
	'Button Link': {
		kind: 'Text',
		props: {
			'margin': '0',
			'padding': '0px 0px 0px 0px',
			'font': '20px/16px \"Source Sans Pro\", sans-serif',
			'text-transform': 'initial',
			'color': '--light'
		}
	}
};

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const getPathName = (path, level) => {
	const path2 = path.length ? path : ['index'];
	const index = path2.length + (level - 1);
	return path2[index];
};

const getFullList = (pages, list) => {
	let temp = [];
	list?.forEach(item => {
		temp.push(item);

		if (pages[item].children) {
			const sub = getFullList(pages, pages[item].children);
			temp = [].concat(temp, sub);
		}
	});
	return temp;
};

const Button = ({
	type,
	path,
	name,
	pageUrl,
	override,
	mode,
	...props
}) => {
	const pageUrlModified = mode === 'production' && pageUrl === 'index' ? '' : pageUrl;
	const href = ['', ...path.slice(0, -1), pageUrlModified].join('/');
	const buttonLinkOverride = override('Button Link', `Button Link :${type}`, `Button Link :${href.replace(/\//g, '-')}`);
	return <Link href={href} {...props}>
		      
		<Icon {...override('Button Icon', `Button Icon :${type}`)} />
		      
		<Box {...override('Button Text', `Button Text :${type}`)}>
			        
			<Text {...override('Button Name', `Button Name :${type}`)} />
			        
			<Box {...buttonLinkOverride}>
				          
				{buttonLinkOverride.children || name}
				        
			</Box>
			      
		</Box>
		    
	</Link>;
};

const PrevNextButtons = ({
	hierarchy,
	rootId,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const {
		projectType,
		mode,
		pages
	} = getAPI();
	const page404 = Object.values(pages).find(page => page.pageUrl === '404');
	const location = projectType === 'gatsby' ? useReachLocation() : useReactLocation();
	const path = location?.pathname.split('/').filter(i => i !== '');
	const curKey = Object.keys(pages).find(key => pages[key].pageUrl === getPathName(path, 0));
	const parKey = Object.keys(pages).find(key => pages[key].pageUrl === getPathName(path, -1));
	const list = (hierarchy === 'one' ? pages[parKey || rootId]?.children : getFullList(pages, pages[rootId]?.children))?.filter(p => p !== page404.id) ?? [];
	const curIndex = list.indexOf(curKey);
	const prevPage = curIndex > 0 && list[curIndex - 1];
	const nextPage = curIndex < list.length && list[curIndex + 1];
	return <Box
		user-select="none"
		justify-content="space-between"
		flex-direction="row"
		display="flex"
		margin-top="32px"
		override={override}
		{...rest}
	>
		      
		{prevPage ? <Button
			type="prev"
			path={path}
			override={override}
			mode={mode}
			{...pages[prevPage]}
			{...override('Button', 'Button :prev')}
		/> : <Box />}
		      
		{nextPage ? <Button
			type="next"
			path={path}
			override={override}
			mode={mode}
			{...pages[nextPage]}
			{...override('Button', 'Button :next')}
		/> : <Box />}
		    
	</Box>;
};

const propInfo = {
	hierarchy: {
		title: 'Depth',
		control: 'radio-group',
		variants: ['one', 'several'],
		category: 'Main',
		weight: 1
	},
	rootId: {
		control: 'input',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	rootId: 'root',
	"hierarchy": "one",
	"margin": "auto 0px 0px 0px",
	"padding": "32px 0px 0px 0px"
};
export default Object.assign(PrevNextButtons, {
	propInfo,
	defaultProps,
	overrides
});
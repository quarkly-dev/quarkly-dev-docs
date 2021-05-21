import React from "react";
import { useOverrides } from "@quarkly/components";
import { Span } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-lightD1",
	"border-radius": "4px",
	"data-q-widget-type": "PRIMITIVE",
	"overflow-wrap": "normal",
	"word-break": "normal",
	"text-indent": "0",
	"text-overflow": "clip",
	"hyphens": "manual",
	"children": "Key",
	"font": "--code",
	"white-space": "nowrap",
	"display": "inline-block",
	"padding": "0px 6px 1px 6px"
};
const overrides = {};

const HelpKey = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Span {...rest}>
		{children}
	</Span>;
};

Object.assign(HelpKey, { ...Span,
	defaultProps,
	overrides
});
export default HelpKey;
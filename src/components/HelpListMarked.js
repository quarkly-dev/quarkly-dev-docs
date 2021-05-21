import React from "react";
import { useOverrides } from "@quarkly/components";
import { List } from "@quarkly/widgets";
const defaultProps = {
	"color": "--darkL2",
	"margin": "4px 0px 0px 0px",
	"padding": "0px 0px 0px 40px",
	"font": "--baseSm",
	"as": "ul",
	"min-height": "16px"
};
const overrides = {};

const HelpListMarked = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <List {...rest}>
		{children}
	</List>;
};

Object.assign(HelpListMarked, { ...List,
	defaultProps,
	overrides
});
export default HelpListMarked;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"color": "--darkL2",
	"sm-font": "--h3Sm",
	"children": "Some text",
	"font": "normal 400 36px/1.2 Source Sans Pro, sans-serif",
	"margin": "24px 0px 12px 0px"
};
const overrides = {};

const HelpHeader3 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpHeader3, { ...Text,
	defaultProps,
	overrides
});
export default HelpHeader3;
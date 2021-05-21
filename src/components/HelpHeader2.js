import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"color": "--darkL2",
	"sm-font": "--h2Sm",
	"children": "Some text",
	"font": "normal 400 80px/1 Source Sans Pro, sans-serif",
	"margin": "32px 0px 28px 0px"
};
const overrides = {};

const HelpHeader2 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpHeader2, { ...Text,
	defaultProps,
	overrides
});
export default HelpHeader2;
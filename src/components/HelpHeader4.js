import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "--h4",
	"color": "--darkL2",
	"sm-font": "--h3Sm",
	"margin": "16px 0px 8px 0px",
	"children": "Some text"
};
const overrides = {};

const HelpHeader4 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpHeader4, { ...Text,
	defaultProps,
	overrides
});
export default HelpHeader4;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "--baseSm",
	"margin": "8px 0px 4px 0px",
	"color": "--darkL2",
	"sm-font": "--baseSm",
	"children": "Some text"
};
const overrides = {};

const HelpParagraph = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpParagraph, { ...Text,
	defaultProps,
	overrides
});
export default HelpParagraph;
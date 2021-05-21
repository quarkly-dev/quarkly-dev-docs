import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"margin": "4px 0px 4px 0px",
	"children": "SomeText"
};
const overrides = {};

const HelpListItem = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpListItem, { ...Text,
	defaultProps,
	overrides
});
export default HelpListItem;
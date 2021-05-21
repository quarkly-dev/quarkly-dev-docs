import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"font": "normal 700 23px/1.2 --fontFamily-googleSourceSansPro",
	"margin": "48px 0px 4px 0px",
	"color": "--grey",
	"sm-font": "--baseSm",
	"text-transform": "uppercase",
	"letter-spacing": "3px",
	"children": "Tutorials"
};
const overrides = {};

const HelpSubheader = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(HelpSubheader, { ...Text,
	defaultProps,
	overrides
});
export default HelpSubheader;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
import HelpImageBlock from "./HelpImageBlock";
const defaultProps = {
	"quarkly-title": "HelpImageBlockCapture"
};
const overrides = {
	"helpImageBlock": {
		"kind": "HelpImageBlock",
		"props": {
			"margin": "8px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"font": "italic 400 18px/1.5 Source Sans Pro, sans-serif",
			"text-align": "center",
			"margin": "8px 0px 16px 0px",
			"children": "Some text"
		}
	}
};

const HelpImageBlockCapture = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<HelpImageBlock {...override("helpImageBlock")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(HelpImageBlockCapture, { ...Box,
	defaultProps,
	overrides
});
export default HelpImageBlockCapture;
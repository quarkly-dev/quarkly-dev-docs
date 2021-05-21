import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import HelpHeader3 from "./HelpHeader3";
import HelpLink from "./HelpLink";
const defaultProps = {
	"width": "100%",
	"padding": "6px 6px 6px 6px"
};
const overrides = {
	"helpLink": {
		"kind": "HelpLink",
		"props": {
			"display": "flex",
			"flex-direction": "row",
			"border-radius": "12px",
			"hover-background": "--color-light",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-lightD1",
			"hover-transition": "background-color 0.1s --transitionTimingFunction-easeInOut 0s",
			"padding": "36px 36px 36px 36px",
			"text-decoration-line": "initial",
			"md-padding": "18px 24px 18px 24px",
			"sm-flex-direction": "column",
			"margin": "0px 0px 0px 0px"
		}
	},
	"helpHeader3": {
		"kind": "HelpHeader3",
		"props": {
			"margin": "0px 0px 0px 0px",
			"children": " "
		}
	}
};

const HelpOverviewItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<HelpLink {...override("helpLink")}>
			<HelpHeader3 {...override("helpHeader3")} />
		</HelpLink>
		{children}
	</Box>;
};

Object.assign(HelpOverviewItem, { ...Box,
	defaultProps,
	overrides
});
export default HelpOverviewItem;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import HelpListMarked from "./HelpListMarked";
import HelpLink from "./HelpLink";
const defaultProps = {
	"width": "100%",
	"padding": "6px 6px 6px 6px"
};
const overrides = {
	"box": {
		"kind": "HelpLink",
		"props": {
			"display": "flex",
			"flex-direction": "column",
			"border-radius": "12px",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-lightD1",
			"padding": "36px 36px 36px 36px",
			"md-padding": "18px 24px 18px 24px",
			"sm-flex-direction": "column",
			"margin": "0px 0px 0px 0px"
		},
		"children": "🎓 Tutorials"
	},
	"helpLink": {
		"kind": "HelpLink",
		"props": {
			"color": "--color-darkL2",
			"font": "normal 400 36px/1.2 Source Sans Pro, sans-serif",
			"text-decoration-line": "initial",
			"margin": "0px 0px 0px 0px"
		}
	},
	"HelpListMarked": {
		"kind": "HelpListMarked",
		"props": {
			"margin": "12px 0px 0px 0px",
			"list-style-type": "none",
			"display": "flex",
			"flex-wrap": "wrap"
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
		<Box {...override("box")}>
			<HelpLink {...override("helpLink")}></HelpLink>
			<HelpListMarked {...override("HelpListMarked")}>
				{children}
			</HelpListMarked>
		</Box>
	</Box>;
};

Object.assign(HelpOverviewItem, { ...Box,
	defaultProps,
	overrides
});
export default HelpOverviewItem;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"width": "100%",
	"min-height": "64px",
	"src": "https://uploads.quarkly.io/landing/docs-interface-context-menu.png",
	"margin": "8px 0px 8px 0px"
};
const overrides = {};

const HelpImageBlock = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Image {...rest} />;
};

Object.assign(HelpImageBlock, { ...Image,
	defaultProps,
	overrides
});
export default HelpImageBlock;
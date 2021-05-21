import React from "react";
import { useOverrides, Stack } from "@quarkly/components";
const defaultProps = {
	width: "100%",
	gap: "12px",
	"sm-margin": "-6px auto -6px auto",
	flex: "1 1 auto",
	height: "auto",
	margin: "18px -6px -6px -6px"
};
const overrides = {};

const ContentsItemLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		    
		{children}
		  
	</Stack>;
};

Object.assign(ContentsItemLink, { ...Stack,
	defaultProps,
	overrides
});
export default ContentsItemLink;
import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "#",
	"font": "--baseSm",
	"color": "--link",
	"hover-color": "--linkHover",
	"text-decoration-line": "underline",
	"margin": "8px 0px 4px 0px",
	"children": "Some text"
};
const overrides = {};

const HelpLink = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(HelpLink, { ...Link,
	defaultProps,
	overrides
});
export default HelpLink;
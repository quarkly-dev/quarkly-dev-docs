import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Image, Link, List, Box } from "@quarkly/widgets";
import SimpleLink from './SimpleLink';
const defaultProps = {
	"background": "--color-darkL2",
	"padding": "18px 0",
	"border-width": "0px 0px 2px 0px",
	"border-style": "solid",
	"border-color": "--color-darkL1",
	"lg-display": "none",
	"flex": "0 0 auto"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"align-items": "center",
			"lg-align-items": "flex-start",
			"min-height": "auto",
			"lg-text-align": "center",
			"quarkly-title": "Wrapper",
			"lg-flex-direction": "column",
			"lg-align-items": "flex-start"
		}
	},
	"list": {
		"props": {
			"display": "flex",
			"list-style-type": "none",
			"margin": "16px 18px 16px 0px",
			"padding": "0px 0px 0px 0px"
		},
		"overrides": {}
	},
	"link3": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/features",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Features",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link4": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/docs",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Docs",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link5": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/roadmap",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Roadmap",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link6": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/pricing",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Pricing",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link7": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/contact",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Contact",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://quarkly.io/",
			"display": "flex"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"user-select": "none",
			"loading": "lazy",
			"width": "154px",
			"height": "auto",
			"lg-padding-right": "8px",
			"lg-margin": "0px 0px 12px 0px",
			"margin": "auto 0px auto 0px",
			"sm-margin": "0px 0px 12px 0px",
			"src": "https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-beta-logo-on-dark.svg?v=2020-10-30T09:51:10.304Z"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"lg-flex-direction": "column",
			"lg-justify-content": "center",
			"lg-align-items": "flex-start",
			"lg-margin": "0px 0px 4px 0px",
			"lg-width": "100%",
			"lg-justify-content": "space-between",
			"lg-margin": "12px 0px 12px 0px",
			"sm-width": "100%",
			"sm-flex-direction": "column",
			"sm-justify-content": "center",
			"sm-align-items": "flex-start",
			"sm-margin": "0px 0px 4px 0px",
			"md-width": "100%",
			"md-justify-content": "space-between",
			"md-margin": "12px 0px 0px 0px"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"display": "inline-block",
			"font": "--captureSm",
			"font-weight": "700",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"background-color": "--darkL1",
			"border": "2px solid --color-secondary",
			"border-radius": "100px",
			"padding": "6px 20px 6px 21px",
			"margin": "0 auto",
			"hover-transform": "translateY(-2px)",
			"transform": "translateY(0)",
			"transition": "transform 0.1s ease-in-out",
			"text-decoration-line": "initial",
			"lg-text-align": "left",
			"lg-margin-left": "0px",
			"text-align": "center",
			"background": "none",
			"children": "Log In",
			"sm-margin": "0 12px 0 0px",
			"href": "https://quarkly.io/dashboard"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"display": "inline-block",
			"font": "--captureSm",
			"font-weight": "700",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--dark",
			"background-color": "--darkL1",
			"border": "5px solid #2D8FDD",
			"border-radius": "100px",
			"padding": "8px 22px 8px 23px",
			"margin": "0 auto 0 18px",
			"hover-transform": "translateY(-2px)",
			"transform": "translateY(0)",
			"transition": "transform 0.1s ease-in-out",
			"text-decoration-line": "initial",
			"lg-text-align": "left",
			"lg-margin-left": "0px",
			"border-width": "0px",
			"text-align": "center",
			"background": "--color-secondary",
			"children": "Sign Up",
			"sm-margin": "0 0px 0 0px",
			"md-margin": "0 auto 0 18px",
			"lg-margin": "0 auto 0 18px",
			"href": "https://quarkly.io/dashboard"
		}
	},
	"box2": {
		"props": {
			"lg-margin": "12px 0px 0px 0px",
			"lg-display": "flex"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Link {...override("link")}>
				<Image {...override("image")} />
			</Link>
			<Box {...override("box1")}>
				<List {...override("list")}>
					<Link {...override("link3")} />
					<Link {...override("link4")} />
					<Link {...override("link5")} />
					<Link {...override("link6")} />
					<Link {...override("link7")} />
				</List>
				<Box {...override("box2")}>
					<SimpleLink {...override("link1")} />
					<SimpleLink {...override("link2")} />
				</Box>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;
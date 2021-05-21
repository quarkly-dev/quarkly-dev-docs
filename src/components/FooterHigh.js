import React from "react";
import { useOverrides, StackItem, Override, Menu, SocialMedia, Stack, Section } from "@quarkly/components";
import { Image, Text, Icon, Link, List } from "@quarkly/widgets";
import { FiArrowUpRight } from "react-icons/fi";
const defaultProps = {
	"background-color": "#191E22",
	"position": "relative",
	"text-align": "left",
	"padding": "48px 0",
	"background": "--color-darkL2",
	"flex": "0 0 auto"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "24px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "154px",
			"loading": "lazy",
			"height": "100%",
			"margin-bottom": "8px",
			"sm-padding-right": "8px",
			"margin": "0px 0px 0px 0px",
			"src": "https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-beta-logo-on-dark.svg?v=2020-10-30T09:51:10.304Z"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
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
			"href": "https://developer.quarkly.io/",
			"font": "--captureSm",
			"font-weight": "800",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--secondary",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Developer",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link6": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/updates",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Updates",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link7": {
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
	"link8": {
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
	"link9": {
		"props": {
			"user-select": "none",
			"href": "https://quarkly.io/agreement",
			"font": "--captureSm",
			"font-weight": "400",
			"text-transform": "uppercase",
			"letter-spacing": "2px",
			"color": "--light",
			"hover-color": "--secondary",
			"text-decoration-line": "initial",
			"padding": "6px 12px 8px 12px",
			"children": "Agreement",
			"lg-padding": "6px 8px 8px 8px",
			"sm-padding": "6px 8px 8px 8px"
		},
		"overrides": {}
	},
	"link10": {
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
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"sm-width": "100%",
			"sm-order": "1"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"color": "--grey",
			"lg-font": "--captureSm",
			"text-align": "left",
			"sm-text-align": "left",
			"sm-order": "1",
			"md-order": "1",
			"lg-order": "1",
			"align-self": "center",
			"children": "© All Rights Reserved",
			"font": "--captureSm",
			"margin": "0 0 0 0px",
			"sm-margin": "0 0 0 2px",
			"sm-width": "100%"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "66.66%",
			"sm-width": "100%"
		},
		"overrides": {
			"StackItemContent": {
				"props": {
					"align-items": "center",
					"display": "flex",
					"justify-content": "flex-end"
				}
			}
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://community.quarkly.io/",
			"color": "--light",
			"text-decoration-line": "initial",
			"transition": "color 0.1s ease-in-out",
			"display": "flex",
			"hover-color": "--secondary",
			"target": "_blank",
			"sm-padding": "8px 8px 8px 8px",
			"sm-text-align": "left",
			"font": "--captureSm",
			"padding": "8px 8px 8px 8px",
			"margin": "0px 8px 0px auto",
			"sm-margin": "0px 12px 0px -6px"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fi",
			"icon": FiArrowUpRight,
			"display": "inline-block",
			"margin": "0px 0px 0px 4px",
			"size": "18px"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://facebook.com/quarklyapp",
			"twitter": "https://twitter.com/quarklyapp",
			"icon-size": "18px",
			"md-margin": "0px 0px 0px 0px",
			"md-justify-content": "flex-start",
			"sm-justify-content": "flex-start",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"sm-margin": "0px 0px 0px 0px",
			"lg-margin": "0px 0px 0px -8px",
			"github": "https://github.com/quarkly",
			"sm-flex": "0 1 auto",
			"margin": "0px 0px 0px 0px",
			"discord": "https://discord.gg/AevfxmF3TM"
		},
		"overrides": {
			"link": {
				"props": {
					"border-radius": "24px",
					"padding": "8px",
					"background": "rgba(237, 242, 246, 0)",
					"transition": "background --transitionDuration-fastest --transitionTimingFunction-easeOut 0s",
					"children": null,
					"hover-background": "#FD0A1B"
				},
				"overrides": {}
			},
			"icon": {
				"props": {
					"color": "--lightD2",
					"children": null
				},
				"overrides": {}
			},
			"link-facebook": {
				"props": {
					"hover-background": "#4469B0",
					"children": null
				},
				"overrides": {}
			},
			"link-github": {
				"props": {
					"hover-background": "--color-dark",
					"children": null
				},
				"overrides": {}
			},
			"link-twitter": {
				"props": {
					"hover-background": "#2AA3EF",
					"children": null
				},
				"overrides": {}
			},
			"icon-discord": {
				"props": {
					"color": "inherit"
				}
			},
			"link-discord": {
				"props": {
					"color": "--lightD2",
					"hover-color": "--light",
					"hover-background": "#738BD7"
				}
			}
		}
	}
};

const FooterHigh = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Image {...override("image")} />
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<List {...override("list")}>
					<Link {...override("link3")} />
					<Link {...override("link4")} />
					<Link {...override("link5")} />
					<Link {...override("link6")} />
					<Link {...override("link7")} />
					<Link {...override("link8")} />
					<Link {...override("link9")} />
					<Link {...override("link10")} />
				</List>
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Text {...override("text")} />
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Link {...override("link")}>
					Community
					<Icon {...override("icon")} />
				</Link>
				<SocialMedia {...override("socialMedia")} />
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(FooterHigh, { ...Section,
	defaultProps,
	overrides
});
export default FooterHigh;
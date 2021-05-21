import React, { useState, useCallback } from "react";
import { useOverrides, Menu, Section } from "@quarkly/components";
import { Icon, Box, Link, Image } from "@quarkly/widgets";
import SimpleLink from "./SimpleLink";
import { MdMenu, MdClose } from "react-icons/md";
const defaultProps = {
	"background": "--color-darkL2",
	"border-width": "0px 0px 2px 0px",
	"border-style": "solid",
	"border-color": "--color-darkL1",
	"lg-display": "flex",
	"display": "none",
	"padding": "18px 0px 18px 0px"
};
const overrides = {
	"box": {
		"kind": "Box"
	},
	"link1": {
		"kind": "Link",
		"props": {
			"user-select": "none",
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
			"hover-transform": "translateY(-2px)",
			"transform": "translateY(0)",
			"transition": "transform 0.1s ease-in-out",
			"href": "/dashboard",
			"text-decoration-line": "initial",
			"text-align": "left",
			"background": "none",
			"children": "Log In",
			"margin": "0 6px 0 -12px",
			"sm-margin": "0 6px 0 0"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"user-select": "none",
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
			"hover-transform": "translateY(-2px)",
			"transform": "translateY(0)",
			"transition": "transform 0.1s ease-in-out",
			"text-decoration-line": "initial",
			"text-align": "left",
			"border-width": "0px",
			"background": "--color-secondary",
			"children": "Sign Up",
			"href": "/dashboard",
			"margin": "0 auto 0 6px"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"user-select": "none",
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
			"hover-transform": "translateY(-2px)",
			"transform": "translateY(0)",
			"transition": "transform 0.1s ease-in-out",
			"text-decoration-line": "initial",
			"text-align": "left",
			"border-width": "0px",
			"background": "--color-secondary",
			"children": "Sign Up",
			"href": "/dashboard",
			"margin": "0 18px 0 auto"
		}
	},
	"link3-open": {
		"kind": "Link",
		"props": {
			"display": "none"
		}
	},
	"box2": {
		"props": {
			"display": "flex",
			"align-items": "flex-start",
			"justify-content": "flex-start",
			"margin": "8px 0px 36px 0px"
		}
	},
	"box2-close": {
		"props": {
			"display": "none"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"sm-display": "flex",
			"display": "flex",
			"position": "relative",
			"justify-content": "center",
			"align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"user-select": "none",
			"loading": "lazy",
			"width": "154px",
			"height": "auto",
			"src": "https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/quarkly-beta-logo-on-dark.svg?v=2020-10-30T09:51:10.304Z",
			"padding-right": "8px",
			"margin": "auto 0px auto 0px",
			"sm-width": "42px",
			"sm-object-fit": "cover",
			"sm-object-position": "left center",
			"sm-height": "42px"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"user-select": "none",
			"loading": "lazy",
			"width": "8px",
			"height": "8px",
			"right": "-13px",
			"top": "3px",
			"display": "none",
			"sm-display": "block",
			"position": "absolute",
			"src": "https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/beta-mark-for-logo.svg?v=2020-11-02T09:36:54.532Z"
		}
	},
	"burger": {
		"kind": "container",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"align-items": "center"
		}
	},
	"burger-close": {
		"kind": "close"
	},
	"burger-open": {
		"kind": "open"
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"user-select": "none",
			"category": "md",
			"icon": MdMenu,
			"cursor": "pointer",
			"border-radius": "24px",
			"padding": "0px 0px 0px 0px",
			"size": "24px",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-secondary",
			"background": "none",
			"width": "32px",
			"height": "32px",
			"color": "--light"
		}
	},
	"icon-close": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdMenu
		}
	},
	"icon-open": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdClose
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"flex-direction": "column",
			"padding": "6px 6px 6px 0px",
			"margin": "18px 0px 8px -18px"
		},
		"overrides": {
			"link": {
				"props": {
					"box-sizing": "border-box",
					"user-select": "none",
					"font": "--capture",
					"font-weight": "400",
					"text-transform": "uppercase",
					"letter-spacing": "2px",
					"color": "inherit",
					"text-decoration-line": "initial",
					"hover-color": "--secondary",
					"children": null,
					"display": "block",
					"padding": "12px 18px 12px 18px"
				},
				"overrides": {}
			},
			"item-active": {
				"props": {
					"color": "--secondary",
					"children": null
				},
				"overrides": {}
			},
			"item": {
				"props": {
					"padding": "0px 0px 0px 0px",
					"color": "--lightD2",
					"children": null,
					"margin": "0px 0px 0px 0px",
					"height": "auto"
				},
				"overrides": {}
			},
			"link-active": {
				"props": {
					"color": "inherit",
					"hover-cursor": "default",
					"font-weight": "800",
					"children": null
				},
				"overrides": {}
			},
			"item-user-agreement": {
				"props": {
					"display": "none"
				}
			},
			"item-contest-ru-terms": {
				"props": {
					"display": "none"
				}
			},
			"item-contest-terms": {
				"props": {
					"display": "none"
				}
			},
			"item-contest-ru": {
				"props": {
					"display": "none"
				}
			},
			"item-index": {
				"props": {
					"display": "none"
				}
			},
			"link-contest": {
				"props": {
					"margin": "0px 24px 0px 0px",
					"children": "🏆 contest",
					"lg-display": "none"
				}
			},
			"item-404": {
				"props": {
					"display": "none"
				}
			},
			"link-contact-form": {
				"props": {
					"children": "contacТ"
				}
			},
			"item-dev-advocate": {
				"props": {
					"display": "none"
				}
			},
			"item-contact-form1": {
				"props": {
					"sm-display": "none"
				}
			}
		}
	},
	"menu-open": {
		"kind": "MenuOpen"
	},
	"menu-close": {
		"kind": "MenuOpen",
		"display": "none",
		"props": {
			"display": "none"
		}
	}
};

const MenuMobile = props => {
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	return <Section {...rest}>
		<Box {...override("burger", `burger-${isOpen ? "open" : "close"}`)}>
			<Link {...override("link")}>
				<Image {...override("image")} />
				<Image {...override("image2")} />
			</Link>
			<SimpleLink {...override("link3", `link3-${isOpen ? "open" : "close"}`)} />
			<Icon {...override("icon", `icon-${isOpen ? "open" : "close"}`)} onPointerDown={handlerOpen} />
		</Box>
		<Menu {...override("menu", `menu-${isOpen ? "open" : "close"}`)} />
		<Box {...override("box2", `box2-${isOpen ? "open" : "close"}`)}>
			<SimpleLink {...override("link1")} />
			<SimpleLink {...override("link2")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(MenuMobile, { ...Box,
	...Icon,
	overrides,
	defaultProps
});
export default MenuMobile;
import atomize from "@quarkly/atomize";
export default atomize.a({
	name: "Link",
	effects: {
		link: ":link",
		hover: ":hover",
		visited: ":visited",
		active: ":active"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Text element — text in different variants: paragraph, heading, etc.",
		ru: "Элемент text — текст в различных вариантах: параграф, заголовок, и другие"
	},
	propInfo: {
		href: {
			weight: 1,
			control: "input",
			category: "Main",
			description: {
				en: "href — destination address where the link takes to",
				ru: "href — адрес назначения, по которому направляет ссылка"
			}
		},
		target: {
			weight: 1,
			control: "select",
			variants: ["_self", "_blank", "_parent", "_top"],
			category: "Main"
		}
	}
});
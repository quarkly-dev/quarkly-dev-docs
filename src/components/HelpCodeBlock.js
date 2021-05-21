import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import atomize from '@quarkly/atomize';

const HelpCodeBlock = ({
	lang,
	code,
	...props
}) => <div {...props}>
	    
	<Prism language={lang} children={code} />
	  
</div>;

export default atomize(HelpCodeBlock)({
	name: "HelpCodeBlock",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "HelpCodeBlock — my awesome component"
	},
	propInfo: {
		lang: {
			control: "input",
			weight: 1
		},
		code: {
			control: "text-area",
			weight: 1
		}
	}
}, {
	lang: 'javascript',
	code: ' '
});
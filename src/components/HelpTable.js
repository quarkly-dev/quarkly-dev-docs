import React from 'react';
import atomize from "@quarkly/atomize";
import { Text } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
const overrides = {
	'Row': {
		kind: 'Row'
	},
	'Column': {
		kind: 'Column'
	},
	'Cell': {
		kind: 'Cell',
		props: {
			padding: '0.4rem 1rem',
			border: '1px solid #E4E8EC'
		}
	},
	'Text': {
		kind: 'Text'
	}
};
const Table = atomize.table(),
      THead = atomize.thead(),
      TBody = atomize.tbody(),
      TFoot = atomize.tfoot(),
      Tr = atomize.tr(),
      Td = atomize.td();

const HelpTable = ({
	rows,
	cols,
	showHeader,
	showFooter,
	summary,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	cols = parseInt(cols) > 0 ? parseInt(cols) : 1;
	rows = parseInt(rows) > 0 ? parseInt(rows) : 1;
	return <Table
		cols={cols}
		summary={summary}
		width="100%"
		background-color="--white"
		border="1px solid #E4E8EC"
		border-collapse="collapse"
		{...rest}
	>
		      
		{showHeader && <THead {...override('THead')}>
			          
			<Tr {...override('Row', `Row THead`)}>
				              
				{Array(cols || 1).fill().map((item, col) => <Td key={`cell-head-${col}`} {...override('Cell', `Column ${col}`, 'Cell THead', `Cell THead Col-${col}`)}>
					                  
					<Text {...override('Text', `Text THead Col-${col}`)}>
						                    
						{override(`Text THead Col-${col}`).children || `Cell H-${col}`}
						                  
					</Text>
					                
				</Td>)}
				            
			</Tr>
			        
		</THead>}
		      
		<TBody {...override('TBody')}>
			        
			{Array(rows || 1).fill().map((item, row) => <Tr key={`row${row}`} {...override('Row', `Row ${row}`)}>
				            
				{Array(cols || 1).fill().map((item, col) => <Td key={`cell-${row}-${col}`} {...override('Cell', `Column ${col}`, 'Cell TBody', `Cell TBody Row-${row}`, `Cell TBody Row-${row} Col-${col}`)}>
					                
					<Text {...override('Text', `Text ${row}-${col}`)}>
						                  
						{override(`Text ${row}-${col}`).children || `Cell ${row}-${col}`}
						                
					</Text>
					              
				</Td>)}
				          
			</Tr>)}
			      
		</TBody>
		      
		{showFooter && <TFoot {...override('TFoot')}>
			          
			<Tr {...override('Row', `Row TFoot`)}>
				              
				{Array(cols || 1).fill().map((item, col) => <Td key={`cell-foot-${col}`} {...override('Cell', `Column ${col}`, 'Cell TFoot', `Cell TFoot Col-${col}`)}>
					                  
					<Text {...override('Text', `Text TFoot Col-${col}`)}>
						                    
						{override(`Text TFoot Col-${col}`).children || `Cell F-${col}`}
						                  
					</Text>
					                
				</Td>)}
				            
			</Tr>
			        
		</TFoot>}
		    
	</Table>;
};

export default atomize(HelpTable)({
	name: "Table",
	overrides,
	propInfo: {
		cols: {
			control: 'input',
			category: 'Size',
			weight: .5
		},
		rows: {
			control: 'input',
			category: 'Size',
			weight: .5
		},
		showHeader: {
			title: 'Show Header',
			control: 'checkbox',
			category: 'Groups',
			weight: .5
		},
		showFooter: {
			title: 'Show Footer',
			control: 'checkbox',
			category: 'Groups',
			weight: .5
		},
		summary: {
			title: 'Short Description',
			control: 'input',
			category: 'SEO',
			weight: 1
		}
	}
}, {
	cols: 8,
	rows: 4
});
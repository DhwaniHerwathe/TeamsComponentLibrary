import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TableStruct, TableProps } from './Table';

export default {
  title: 'Components/AdvanceTable',
  component: TableStruct,  
} as Meta;

const Template: Story<TableProps> = (args) => <TableStruct {...args} />;

export const Default = Template.bind({});
Default.args = {
//   imageUrl:"https://i.imgur.com/JPVaRvV.png"
};


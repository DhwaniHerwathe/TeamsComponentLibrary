import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TableComponent from './Table';


export default {
    title: 'Components/Table',
    component: TableComponent,
    argTypes: {
      theme: {
        control: {
          type: 'select',
          options: [
            'light', 
            'dark',
            'contrast'
          ],
        },
      },
      attributes :{
        control: {
          type: 'object',
         
        }
      },
      tableData :{
        control: {
          type: 'object',
         
        }
      }
  }
} as Meta;

const Template: Story = (args) => <TableComponent {...args}/>;

export const Default = Template.bind({});

Default.args = {
  theme : 'light',
  attributes:{   cellContentOverflow: "none"},
  tableData:{
      headers :{items: ['Id', 'Name', 'Age', 'Picture']},
      values: [
        {
          "id": "1",
          "name": "Smith",
          "age": "40",
          "image": "None",
        },
        {
          "id": "2",
          "name": "Oliver",
          "age": "35",
          "image": "None",
        },
        {
          "id": "3",
          "name": "Cooper",
          "age": "28",
          "image": null,
        }
      ]
  } ,
  
};


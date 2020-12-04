import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TableComponent from './Table';


export default {
    title: 'Components/TableComponent',
    component: TableComponent,
    argTypes: {
      tableData:{
      headers :["ID", "Name", "Age", "Image"],
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
          "image": "None",
        },
        {
          "id": "3",
          "name": "Cooper",
          "age": "28",
          "image": "",
        }
      ]
      }
    }  
} as Meta;

const Template: Story = (args) => <TableComponent {...args}/>;

export const TableComponentDefault = Template.bind({});

TableComponentDefault.args = {
  attributes:{
  cellContentOverflow: "none",
  },
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
  } 
};


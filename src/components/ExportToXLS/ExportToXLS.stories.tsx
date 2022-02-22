import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Export, ExportProps } from './Export';

export default {
  title: 'Components/Export',
    component: Export, 
    argTypes: {
      fileExtension: {
        control: {
          type: "select",
          options: [".csv", ".xls"],
        },
      },
      fileName: {
        controls :"String"
    },

        header: {
            controls :"Array"
        }, 
        data:{
          controls :"Array"
    } 
      } 
} as Meta;

const Template: Story<ExportProps> = (args) => <Export {...args} />;

export const Default = Template.bind({});
Default.args = {
    headers: ["Id", "Name", "Age", "Picture" ],
    fileExtension: ".csv",
    fileName: "attribute",
    data: [
        {
          id: "1",
          name: "Smith",
          age: "40",
          image: "None",
        },
        {
          id: "2",
          name: "Oliver",
          age: "35",
          image: "None",
        },
        {
          id: "3",
          name: "Cooper",
          age: "28",
          image: "None",
        },
      ],
};


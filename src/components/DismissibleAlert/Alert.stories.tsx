import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AlertDismiss, IAlertDismissProps } from './AlertDismissible';

export default {
  title: 'Components/DismissibleAlert',
  component: AlertDismiss,
  argTypes: {
    headerName: {
        name: "headerName",
        type: { name: "string", required: true },
        description: "Providing a name that can be displayed on the header",
        table: {
          defaultValue: { summary: "Dismissible alert" },
        },
      },
  }  
} as Meta;

const Template: Story<IAlertDismissProps> = (args) => <AlertDismiss {...args} />;

export const DismissibleAlert = Template.bind({});
DismissibleAlert.args = {
  headerName:"Dismissible Alert"
};


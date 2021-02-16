import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { DialogScreen, IDialogScreenProps } from "./Dialog";

export default {
  title: "Components/DialogScreen",
  component: DialogScreen,
  argTypes: {
    buttonName: {
      name: "buttonName",
      type: { name: "string", required: true },
      defaultValue: "Open a dialog",
      description: "Providing a name that can be displayed on the button",
      table: {
        defaultValue: { summary: "Open a dialog" },
      },
    },
    headerName: {
      name: "headerName",
      type: { name: "string", required: true },
      defaultValue: "Are you Sure Want to perform this action",
      description: "Providing a name that can be displayed on the header",
      table: {
        defaultValue: { summary: "Are you Sure Want to perform this action" },
      },
    },
  },
} as Meta;

const Template: Story<IDialogScreenProps> = (args) => (
  <DialogScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonName: "Open a dialog",
  headerName: "Are you Sure Want to perform this action",
};

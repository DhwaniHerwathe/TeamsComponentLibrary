import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { DialogScreen, IDialogScreenProps } from "./Dialog";

export default {
  title: "Components/DialogScreen",
  component: DialogScreen,
  argTypes: {
    args: {
      buttonName: "string",
      headerName: "string",
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

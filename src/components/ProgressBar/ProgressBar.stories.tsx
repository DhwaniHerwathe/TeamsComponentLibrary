import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { ProgressBar, IProgressBarProps } from "./ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    backGroundColor: {
      name: "backGroundColor",
      type: { name: "string", required: true },
      defaultValue: "#6a1b9a",
      description: "Its required a hexadecimal color code",
      table: {
        defaultValue: { summary: "#6a1b9a" },
      },
    },
    completed: {
      name: "completed",
      type: { name: "string", required: true },
      defaultValue: "78",
      description: "Its Required Percentage of Completion",
      table: {
        defaultValue: { summary: "78" },
      },
    },
  },
} as Meta;

const Template: Story<IProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  backGroundColor: "#6a1b9a",
  completed: "78",
};

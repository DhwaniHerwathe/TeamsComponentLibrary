import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { PieChart, iPieChartProps } from "./d3Charts";

export default {
  title: "Components/d3Charts",
  component: PieChart,
  argTypes: {
    headerName: {
      name: "headerName",
      type: { name: "string", required: true },
      defaultValue: "Are you Sure Want to perform this action",
      description: "Providing a name that can be displayed on the header",
      table: {
        defaultValue: { summary: "Pie Chart" },
      },
    },
    size: {
      // name: "size",
      // type: { name: "string", required: true },
      // defaultValue: "small",
      // type: "select",
      // options: ["small", "large"],
      // description: "type the size of the card",
      // table: {
      //   defaultValue: { summary: "small" },
      // },
      control: {
        type: "select",
        options: ["small", "large"],
      },
    },
  },
} as Meta;

const Template: Story<iPieChartProps> = (args) => (
  <PieChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headerName: "Pie Chart",
  size: "small",
};

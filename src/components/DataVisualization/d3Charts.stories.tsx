import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { PieChart, iPieChartProps } from "./pieChart";
import { DonutChart, iDonutChartProps } from "./DonutChart";

export default {
  title: "Components/DataVisualization",
  component: PieChart, DonutChart,
  argTypes: {
    headerName: {
      name: "headerName",
      type: { name: "string", required: true },
      //defaultValue: "Are you Sure Want to perform this action",
      description: "Providing a name that can be displayed on the header",
      table: {
        defaultValue: { summary: "Pie Chart" },
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "large"],
        defaultValue: ["small"]
      },
    },
    donutheaderName: {
      name: "headerName",
      type: { name: "string", required: true },
      //defaultValue: "Are you Sure Want to perform this action",
      description: "Providing a name that can be displayed on the header",
      table: {
        defaultValue: { summary: "Donut Chart" },
      },
    },
    donutsize: {
      control: {
        type: "select",
        options: ["small", "large"],
        defaultValue: ["small"]
      },
    },
  },
} as Meta;

const Template: Story<iPieChartProps> = (args) => (
  <PieChart {...args} />
);
const Template2: Story<iDonutChartProps> = (args) => (
 <DonutChart {...args} />
);

export const Pie = Template.bind({});
export const Donut = Template2.bind({});
Pie.args = {
  headerName: "Pie Chart",
  size: "small",
};
Donut.args ={
  donutheaderName: "Donut Chart",
  size: "small",
}

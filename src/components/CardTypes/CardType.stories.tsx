import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { LeaveBalanceCard } from "./LeaveBalanceCard";
import { LeaveApprovalCard } from "./LeaveApprovalCard";
import { TaskCard } from "./TaskCard";

export default {
  title: "Components/Cards",
  component: LeaveBalanceCard,
  argTypes: {
    primary: {
      controls: "color",
    },
    secondary: {
      controls: "color",
    },
  },
} as Meta;

const LeaveBalanceCardTempalte: Story = (args) => (
  <LeaveBalanceCard {...args} />
);
const LeaveApprovalCardTemplate: Story = (args) => (
  <LeaveApprovalCard {...args} />
);
const TaskCardTemplate: Story = (args) => <TaskCard {...args} />;

export const Default = LeaveBalanceCardTempalte.bind({});
export const ApprovalLayout = LeaveApprovalCardTemplate.bind({});
export const TaskLayout = TaskCardTemplate.bind({});

Default.args = {};

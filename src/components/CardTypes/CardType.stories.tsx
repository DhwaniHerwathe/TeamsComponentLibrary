import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { LeaveBalanceCard } from "./CardType1";
import { LeaveApprovalCard } from "./CardType2";
import { TaskCard } from "./CardType3";

export default {
    title: "Components/Cards",
    component: LeaveBalanceCard,
    argTypes: {
        primary: {
            controls: "color"
        }, 
        secondary: {
            controls: "color"
        },
  },
} as Meta;

const Template: Story = (args) => <LeaveBalanceCard {...args} />;
const Template2: Story = (args) => <LeaveApprovalCard {...args} />;
const Template3: Story = (args) => <TaskCard {...args} />;

export const Default = Template.bind({});
export const ApprovalLayout= Template2.bind({});
export const TaskLayout = Template3.bind({});

Default.args = {
  
};

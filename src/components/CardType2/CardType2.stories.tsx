import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { LeaveApprovalCard } from "./CardType2";

export default {
    title: "Components/CardType2",
    component: LeaveApprovalCard,
    argTypes: {
        primary: {
            controls: "color"
        },
        secondary: {
            controls: "color"
        },
  },
} as Meta;

const Template: Story = (args) => <LeaveApprovalCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  
};

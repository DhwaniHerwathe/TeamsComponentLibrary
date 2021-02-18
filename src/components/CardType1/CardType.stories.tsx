import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { LeaveBalanceCard } from "./CardType1";

export default {
    title: "Components/CardType1",
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

export const Default = Template.bind({});

Default.args = {
  
};

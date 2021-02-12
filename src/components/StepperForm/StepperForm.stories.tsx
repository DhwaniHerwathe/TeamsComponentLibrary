import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { StepperForm } from "./StepperForm";

export default {
  title: "Components/StepperForm",
  component: StepperForm,
  argTypes: {
    form: {
      firstName: "",
      lastName: "",
      Address: "",
    },
  },
} as Meta;

const Template: Story = (args) => <StepperForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  form: {
    firstName: "",
    lastName: "",
    Address: "",
  },
};

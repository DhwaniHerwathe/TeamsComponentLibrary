import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { StepperForm } from "./StepperForm";

export default {
  title: "Components/StepperForm",
  component: StepperForm,
  argTypes: {
    form: {
      name: "headerName",
      type: { name: "object", required: true },
      defaultValue: "A form Object",
      description:
        "Its holding the form object which has firstName, lastName, Address",
      table: {
        defaultValue: { summary: "A form Object" },
      },
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

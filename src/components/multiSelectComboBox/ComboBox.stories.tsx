import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { MultiSelectComboBox, IMultiSelectComboBoxProps } from "./ComboBoxStorybook";
import './ThemeConstants';


export default {
  title: "Components/multiSelectComboBox",
  component: MultiSelectComboBox,
  argTypes: {
    headerName: {
      name: "headerName",
      type: { name: "string", required: true },
      //defaultValue: "Are you Sure Want to perform this action",
      description: "Providing a name that can be displayed on the header",
      table: {
        defaultValue: { summary: "MultiSelect Combo box" },
      },
    },
  },
} as Meta;

const Template: Story<IMultiSelectComboBoxProps> = (args) => (
  <MultiSelectComboBox {...args} />
);

export const Combobox = Template.bind({});
Combobox.args = {
  headerName : "Multiselect Combo Box",
};

import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Avatar, Flex, Text } from "@fluentui/react-northstar";

import TableComponent from "./Table";
import AdvancedTable from "./AdvanceTable";
import { stringCellComparator } from "./AdvanceTable";
export default {
  title: "Components/Table",
  component: TableComponent,
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["light", "dark", "contrast"],
      },
    },
    attributes: {
      control: {
        type: "object",
      },
    },
    tableData: {
      control: {
        type: "object",
      },
    },
  },
} as Meta;

const Template: Story = (args) => <TableComponent {...args} />;
const AdvanceTemplate: Story = (args) => (
  <AdvancedTable
    columns={args?.columns}
    rows={args?.rows}
    label={args?.label}
  />
);
export const Default = Template.bind({});
export const Advance = AdvanceTemplate.bind({});

Advance.args = {
  label: "Advance Table",
  columns: [
    { title: "Name", key: "name", name: "name" },
    {
      title: "Title",
      key: "title",
      name: "title",
      cellComparator: stringCellComparator,
    },
    {
      title: "Location",
      key: "location",
      name: "location",
      cellComparator: stringCellComparator,
    },
  ],
  rows: [
    {
      key: 1,
      items: [
        {
          content: (
            <Flex gap="gap.medium" vAlign="center">
              <Avatar name="John Doe (Software Developer)" status="available" />
              <Text>John Doe</Text>
            </Flex>
          ),
          key: "1-2",
        },
        { content: "SOFTWARE DEVELOPER", key: "1-3" },
        { content: "PRAGUE", key: "1-4" },
      ],
    },
    {
      key: 2,
      items: [
        {
          content: (
            <Flex gap="gap.medium" vAlign="center">
              <Avatar name="John Smith" status="available" />
              <Text>John Smith</Text>
            </Flex>
          ),
          key: "2-2",
        },
        { content: "PROGRAM MANAGER", key: "2-3" },
        { content: "PRAGUE", key: "2-4" },
      ],
    },
    {
      key: 3,
      items: [
        {
          content: (
            <Flex gap="gap.medium" vAlign="center">
              <Avatar name="Bruce Wayne" status="available" />
              <Text>Bruce Wayne</Text>
            </Flex>
          ),
          key: "3-2",
        },
        { content: "BATMAN", key: "3-3" },
        { content: "GOTHAM CITY", key: "3-4" },
      ],
    },
  ],
};
Default.args = {
  theme: "light",
  attributes: { cellContentOverflow: "none" },
  tableData: {
    headers: { items: ["Id", "Name", "Age", "Picture"] },
    values: [
      {
        id: "1",
        name: "Smith",
        age: "40",
        image: "None",
      },
      {
        id: "2",
        name: "Oliver",
        age: "35",
        image: "None",
      },
      {
        id: "3",
        name: "Cooper",
        age: "28",
        image: null,
      },
    ],
  },
};

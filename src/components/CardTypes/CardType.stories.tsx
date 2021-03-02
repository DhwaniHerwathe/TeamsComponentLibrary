import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { LeaveBalanceCard, ILeaveBalanceCardProps } from "./LeaveBalanceCard";
import { LeaveApprovalCard, ILeaveApprovalCardProps } from "./LeaveApprovalCard";
import { TaskCard, ItaskCardProps } from "./TaskCard";

export default {
  title: "Components/Cards",
  component: LeaveBalanceCard,
    argTypes: {
        days: {
            name: "days",
            type: { name: "string", required: true },
            defaultValue: "13",
            description: "Contains Number of days of leave",
            table: {
                defaultValue: { summary: "13" },
            },
        },
        LeaveType: {
            name: "LeaveType",
            type: { name: "string", required: true },
            defaultValue: "Vacation",
            description: "Contains Type Of leave the employee has",
            table: {
                defaultValue: { summary: "LeaveType" },
            },
        },
        employeeName: {
            name: "employeeName",
            type: { name: "string", required: true },
            defaultValue: "Mike Ross",
            description: "Contains Name of the employee",
            table: {
                defaultValue: { summary: "employeeName" },
            },
        },
        designation: {
            name: "designation",
            type: { name: "string", required: true },
            defaultValue: "Test Job",
            description: "Contains title of the employee",
            table: {
                defaultValue: { summary: "designation" },
            },
        },
        leaveType: {
            name: "leaveType",
            type: { name: "string", required: true },
            defaultValue: "Going to hometown",
            description: "contains Type of Leave",
            table: {
                defaultValue: { summary: "leaveType" },
            },
        },
        fromDate: {
            name: "fromDate",
            type: { name: "string", required: true },
            defaultValue: "5/11/2021",
            description: "From Date",
            table: {
                defaultValue: { summary: "fromDate" },
            },
        },
        ToDate: {
            name: "toDate",
            type: { name: "string", required: true },
            defaultValue: "6/11/2021",
            description: "To Date",
            table: {
                defaultValue: { summary: "ToDate" },
            },
        },
        numberOfDays: {
            name: "numberOfDays",
            type: { name: "string", required: true },
            defaultValue: "1",
            description: "Total Number Of Days",
            table: {
                defaultValue: { summary: "numberOfDays" },
            },
        },
        vacationType: {
            name: "vacationType",
            type: { name: "string", required: true },
            defaultValue: "Floating",
            description: "Type of Leave",
            table: {
                defaultValue: { summary: "vacationType" },
            },
        },
        LearningCourseDetails: {
            name: "LearningCourseDetails",
            type: { name: "string", required: true },
            defaultValue: "HVED and High Velocity Solutions (HVS)",
            description: "Learning course title",
            table: {
                defaultValue: { summary: "LearningCourseDetails" },
            },
        },
        CourseDescription: {
            name: "CourseDescription",
            type: { name: "string", required: true },
            defaultValue: "The essential guide to High Velocity Solutions(HVS)TABLE OF CONTENTS Section 1 - Introduction Upskilling Program for SAP Welcome Message Learning Board Introduction Section 2: High Velocity Enterprise Delivery(HVED) HVED Overview High Velocity Solutions Overview Digital Roadmaps Overview Solution Blueprints Overview Leveraging HVS with Clients",
            description: "Learning course description",
            table: {
                defaultValue: { summary: "LearningCourseDetails" },
            },
        },
        courseDuration: {
            name: "courseDuration",
            type: { name: "string", required: true },
            defaultValue: "8 Hours",
            description: "Learning course Duration",
            table: {
                defaultValue: { summary: "courseDuration" },
            },
        },
        courseMode: {
            name: "courseMode",
            type: { name: "string", required: true },
            defaultValue: "Online",
            description: "Learning course Mode",
            table: {
                defaultValue: { summary: "courseMode" },
            },
        },
        courseDate: {
            name: "courseDate",
            type: { name: "string", required: true },
            defaultValue: "5/11/2021",
            description: "Learning course Date",
            table: {
                defaultValue: { summary: "courseDate" },
            },
        },
    },
    
} as Meta;


const LeaveBalanceCardTempalte: Story<ILeaveBalanceCardProps> = (args) => (
  <LeaveBalanceCard {...args} />
);
const LeaveApprovalCardTemplate: Story<ILeaveApprovalCardProps> = (args) => (
  <LeaveApprovalCard {...args} />
);
const TaskCardTemplate: Story<ItaskCardProps> = (args) => <TaskCard {...args} />;

export const Default = LeaveBalanceCardTempalte.bind({});
export const ApprovalLayout = LeaveApprovalCardTemplate.bind({});
export const TaskLayout = TaskCardTemplate.bind({});

Default.args = {
    days: "13",
    LeaveType: "Vacation",
};
ApprovalLayout.args = {
    employeeName: "Mike Ross",
    designation: "Test Job",
    leaveType: "Going to hometown",
    fromDate: "5/11/2021",
    ToDate: "6/11/2021",
    numberOfDays: "1",
    vacationType: "Floating",
}
TaskLayout.args = {
    LearningCourseDetails: "HVED and High Velocity Solutions(HVS)",
    CourseDescription: "The essential guide to High Velocity Solutions(HVS)TABLE OF CONTENTS Section 1 - Introduction Upskilling Program for SAP Welcome Message Learning Board Introduction Section 2: High Velocity Enterprise Delivery(HVED) HVED Overview High Velocity Solutions Overview Digital Roadmaps Overview Solution Blueprints Overview Leveraging HVS with Clients",
    courseDuration: "8 Hours",
    courseMode: "Online",
    courseDate: "5/11/2021"
}

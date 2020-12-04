import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import FormComponent from './Form';


export default {
    title: 'Components/FormComponent',
    component: FormComponent,
    argTypes: {
        formFields: [
          {
            field: "input",
            id: "name",
            label: "Full name",
            placeholder: "Enter full name",
            type: "text",
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["Please enter full name"]
              },
              {
                type: "min",
                params: [5, "name cannot be less than 5 characters"]
              },
              {
                type: "max",
                params: [10, "name cannot be more than 10 characters"]
              }
            ]
          },
          {
            field: "input",
            id: "password",
            label: "Password",
            placeholder: "Enter password",
            type: "password",
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["Please enter password"]
              },
              {
                type: "min",
                params: [5, "password cannot be less than 5 characters"]
              },
              {
                type: "max",
                params: [10, "password cannot be more than 10 characters"]
              }
            ]
          },
          {
            field: "input",
            id: "email",
            label: "Email",
            placeholder: "Email",
            type: "text",
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["this field is required"]
              },
              {
                type: "email",
                params: ["please enter a valid email"]
              }
            ]
          },
          {
            field: "radio",
            id: "cars",
            label: "Choose a car",
            placeholder: "",
            type: "",
            options: [{value: "Rolls Royce", text: "Rolls Royce"}, {value: "Bentley", text: "Bentley"}, {value: "Aston Martin", text: "Aston Martin"}],
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["Please select a Car"]
              },
            ]
          },
          {
            field: "dropdown",
            id: "engines",
            label: "Choose an Engine Type",
            placeholder: "",
            type: "",
            options: [{value: "", text: "Choose an Engine"}, {value: "V6", text: "V6"}, {value: "V8", text: "V8"}, {value: "V12", text: "V12"}],
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["Please choose an Engine Type"]
              },
            ]
          },
          {
            field: "input",
            id: "comments",
            label: "Comments",
            placeholder: "Please enter your comments",
            type: "textarea",
            validationType: "string",
            value: "",
            validations: [
              {
                type: "required",
                params: ["Please enter comments"]
              },
            ]
          },
          {
            field: "checkbox",
            id: "tandc",
            label: "Terms and Conditions",
            placeholder: "",
            type: "",
            validationType: "boolean",
            value: false,
            validations: [
              {
                type: true,
                params: ["Please select Terms and Conditions"]
              },
            ]
          },
        ]
    }  
} as Meta;

const Template: Story = (args) => <FormComponent {...args}/>;

export const FormComponentDefault = Template.bind({});

FormComponentDefault.args = {
    formFields: [
        {
          field: "input",
          id: "name",
          label: "Full name",
          placeholder: "Enter full name",
          type: "text",
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["Please enter full name"]
            },
            {
              type: "min",
              params: [5, "name cannot be less than 5 characters"]
            },
            {
              type: "max",
              params: [10, "name cannot be more than 10 characters"]
            }
          ]
        },
        {
          field: "input",
          id: "password",
          label: "Password",
          placeholder: "Enter password",
          type: "password",
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["Please enter password"]
            },
            {
              type: "min",
              params: [5, "password cannot be less than 5 characters"]
            },
            {
              type: "max",
              params: [10, "password cannot be more than 10 characters"]
            }
          ]
        },
        {
          field: "input",
          id: "email",
          label: "Email",
          placeholder: "Email",
          type: "text",
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["this field is required"]
            },
            {
              type: "email",
              params: ["please enter a valid email"]
            }
          ]
        },
        {
          field: "radio",
          id: "cars",
          label: "Choose a car",
          placeholder: "",
          type: "",
          options: [{value: "Rolls Royce", text: "Rolls Royce"}, {value: "Bentley", text: "Bentley"}, {value: "Aston Martin", text: "Aston Martin"}],
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["Please select a Car"]
            },
          ]
        },
        {
          field: "dropdown",
          id: "engines",
          label: "Choose an Engine Type",
          placeholder: "",
          type: "",
          options: [{value: "", text: "Choose an Engine"}, {value: "V6", text: "V6"}, {value: "V8", text: "V8"}, {value: "V12", text: "V12"}],
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["Please choose an Engine Type"]
            },
          ]
        },
        {
          field: "input",
          id: "comments",
          label: "Comments",
          placeholder: "Please enter your comments",
          type: "textarea",
          validationType: "string",
          value: "",
          validations: [
            {
              type: "required",
              params: ["Please enter comments"]
            },
          ]
        },
        {
          field: "checkbox",
          id: "tandc",
          label: "Terms and Conditions",
          placeholder: "",
          type: "",
          validationType: "boolean",
          value: false,
          validations: [
            {
              type: true,
              params: ["Please select Terms and Conditions"]
            },
          ]
        },
      ]
  };


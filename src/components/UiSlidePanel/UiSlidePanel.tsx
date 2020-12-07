import * as React from "react";
import { Flex, Image, Button, Text, Form, Input } from "@fluentui/react-northstar";
export interface IUiSlidePanelProps {
}

const fields = [
    {
        label: 'First name',
        name: 'firstName',
        id: 'first-name-inline-shorthand',
        key: 'first-name',
        required: true,
        control: {
            as: Input,
            showSuccessIndicator: false,
        },
        inline: true,
    },
    {
        label: 'Last name',
        name: 'lastName',
        id: 'last-name-inline-shorthand',
        key: 'last-name',
        required: true,
        control: {
            as: Input,
            showSuccessIndicator: false,
        },
        inline: true,
    },
    {
        label: 'I agree to the Terms and Conditions',
        control: {
            as: 'input',
        },
        type: 'checkbox',
        id: 'conditions-inline-shorthand',
        key: 'conditions',
    },
    {
        control: {
            as: Button,
            content: 'Submit',
        },
        key: 'submit',
    },
]

export const UiSlidePanel: React.FC<IUiSlidePanelProps> = ({
    ...props
  }) => {
    return (
        <Flex gap="gap.small" column className={"card-body"}  {...props}>
            <Button primary size="largest" content="Click Me For Slide Panel" />
            <Form
                onSubmit={() => {
                    alert('Form submitted')
                }}
                fields={fields}
            />
        </Flex>
    );
};


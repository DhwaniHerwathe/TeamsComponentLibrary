import * as React from "react";
import {
  Flex,
  Provider,
  teamsTheme,
  Menu,
  BulletsIcon,
  ContentIcon,
  FluidIcon,
  Input,
  ApprovalsAppbarIcon,
} from "@fluentui/react-northstar";
import "./StepperForm.css";

/**
 * Stepper is a component that displays content as a process with defined by user milestones. This is a great solution for a variety of registration forms, where you don't want to scare the user with lots of fields and questions.
 */
export const StepperForm: React.FC = () => {
  const [form, setForm] = React.useState<any | undefined>({
    firstName: "",
    lastName: "",
    address: "",
  });
  const menuItems: Array<{ icon: any; key: string; content: string }> = [
    {
      icon: (
        <>
          <BulletsIcon />
          {form.firstName && <ApprovalsAppbarIcon className={"success-icon"} />}
        </>
      ),
      key: "editorials",
      content: "First Name",
    },
    {
      icon: (
        <>
          <ContentIcon />
          {form.lastName && <ApprovalsAppbarIcon className={"success-icon"} />}
        </>
      ),
      key: "review",
      content: "Last Name",
    },
    {
      icon: (
        <>
          <FluidIcon />
          {form.Address && <ApprovalsAppbarIcon className={"success-icon"} />}
        </>
      ),
      key: "review",
      content: "Address",
    },
  ];

  return (
    <Provider theme={teamsTheme}>
      <>
        <Flex gap="gap.small" padding="padding.medium">
          <Flex className="oneFourthFlex">
            <Menu
              className="interviewFeedbackSideTabs"
              defaultActiveIndex={0}
              items={menuItems}
              vertical
              pointing
            />
          </Flex>
          <Flex className="threeFourthFlex">
            <Flex column gap="gap.small" className={"form-ui"}>
              <Input
                placeholder="First Name"
                value={form.firstName}
                onChange={(e, props) =>
                  setForm({ ...form, firstName: props?.value })
                }
              />
              <Input
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e, props) =>
                  setForm({ ...form, lastName: props?.value })
                }
              />
              <Input
                placeholder="Address"
                value={form.Address}
                onChange={(e, props) =>
                  setForm({ ...form, Address: props?.value })
                }
              />
            </Flex>
          </Flex>
        </Flex>
      </>
    </Provider>
  );
};

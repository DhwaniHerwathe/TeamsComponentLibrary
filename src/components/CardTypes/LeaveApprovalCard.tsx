import * as React from "react";
import {
  Flex,
  Provider,
  teamsTheme,
  Card,
  List,
  Text,
  Button,
  Divider,
  Avatar,
  Box,
} from "@fluentui/react-northstar";
import "./Card.css";
/**
 * A Card is used to display data in sematically grouped way.
 * Header: card can contain a header slot.
 * Body: A card can contain a body slot.
 * Footer: A card can contain a footer slot
 * */

export interface ILeaveApprovalCardProps {
    employeeName?: string,
    designation?: string,
    leaveType?: string,
    fromDate?: string,
    ToDate?: string,
    numberOfDays?: string,
    vacationType?: string,
}
export const LeaveApprovalCard: React.FC<ILeaveApprovalCardProps> = ({
    employeeName,
    designation,
    leaveType,
    fromDate,
    ToDate,
    numberOfDays,
    vacationType,
    ...props
}) => {
  const list1 = [
    {
      key: "",
      media: "",
          header: <Text className="detail-text">{vacationType}</Text>,
      headerMedia: "",
      content: <Text className="list-text">Vacation Type</Text>,
    },
    {
      key: "",
      media: "",
        header: <Text className="detail-text">{numberOfDays}</Text>,
      headerMedia: "",
      content: <Text className="list-text">Number of Days</Text>,
    },
  ];

  const list2 = [
    {
      key: "",
      media: "",
          header: <Text className="detail-text">{fromDate}</Text>,
      headerMedia: "",
      content: <Text className="list-text">From</Text>,
    },
    {
      key: "",
      media: "",
        header: <Text className="detail-text">{leaveType}</Text>,
      headerMedia: "",
      content: <Text className="list-text">Reason</Text>,
    },
  ];
  const list3 = [
    {
      key: "",
      media: "",
      header: <Text className="detail-text">{ToDate}</Text>,
      headerMedia: "",
      content: <Text className="list-text">To</Text>,
    },
  ];
  const items = [
    {
      key: "",
      media: "",
      header: "LEAVE APPROVAL",
      content: "",
    },
  ];
  return (
    <Provider theme={teamsTheme}>
      <>
        <Flex className="cardWrapper">
          <div className="taskCard">
            <Card compact aria-roledescription="" size="large">
              <Card.Header className="taskCardHeader">
                <List items={items} className="list-header" />
                <Divider color="none" />
              </Card.Header>
              <Card.Body>
                <Flex className="taskNameDetails" gap="gap.small">
                  <Avatar name={employeeName} />
                  <Flex column>
                    <Text
                    color="grey"
                    size="medium"
                    weight="semibold"
                    content={employeeName}
                    />
                   <Text color="lightgrey" size="small" content={designation} />
                  </Flex>
                </Flex>
                <Flex className="taskCardBody" vAlign="start">
                  <List items={list1} />
                  <div style={{ maxWidth: "9rem" }}>
                    <List
                      items={list2}
                      truncateHeader={true}
                      truncateContent={true}
                    />
                  </div>
                  <List items={list3} />
                </Flex>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Flex space="between">
                  <Box />
                  <Flex gap="gap.small" vAlign="end">
                    <Button
                                          className="editButton"
                                          content="Approve"
                      primary
                    />
                  </Flex>
                </Flex>
              </Card.Footer>
            </Card>
          </div>
        </Flex>
      </>
    </Provider>
  );
};

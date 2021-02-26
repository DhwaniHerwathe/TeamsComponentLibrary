import * as React from "react";
import {
  Flex,
  Provider,
  teamsTheme,
  Card,
  Image,
  Text,
  Button,
} from "@fluentui/react-northstar";
import imageFile from "../../assets/island.svg";

import "./Card.css";
/**
 * A Card is used to display data in sematically grouped way.
 * Header: card can contain a header slot.
 * Body: A card can contain a body slot.
 * Footer: A card can contain a footer slot
 * */

export const LeaveBalanceCard: React.FC = () => {
  return (
    <Provider theme={teamsTheme}>
      <>
        <Flex className="cardWrapper">
          <Card
            className="MyLeaveDetailsCard"
            aria-roledescription="card with image and text"
          >
            <Card.Body fitted>
              <Flex className="cardBody" space="between">
                <Flex className="leaveTypeValue" column>
                  <Image src={imageFile} alt="Sick Leave" />
                  <Flex>
                    <Text
                      className="typeOfLeave"
                      color="#484644"
                      size="medium"
                      content="Vacation"
                    />
                  </Flex>
                </Flex>
                <Flex className="leaveDaysValue">
                  <Text className="leaveNumbers" content="13" />
                  <Text className="daysText" content=" Days" />
                </Flex>
              </Flex>
            </Card.Body>
            <Card.Footer fitted>
              <Flex className="cardFooter">
                <Button className="editButton" content="Request Leave" />
              </Flex>
            </Card.Footer>
          </Card>
        </Flex>
      </>
    </Provider>
  );
};

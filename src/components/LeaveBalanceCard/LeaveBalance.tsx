import * as React from "react";
import {
  Flex,
  Provider,
  teamsTheme,
  Card,
  Image,
  Text,
  Button
} from "@fluentui/react-northstar";
//import "./StepperForm.css";

export const LeaveBalance: React.FC = () => {
 

  return (
    <Provider theme={teamsTheme}>
      <>
        <Flex className="cardWrapper">
                  <Card className="MyLeaveDetailsCard" aria-roledescription="card with image and text">
                      <Card.Body fitted>
                          <Flex className="cardBody" space="between">
                              <Flex className="leaveTypeValue" column>
                                  <Image
                                      src="../../assets/008-heart-beat.svg"
                                      alt="Sick Leave"
                                  />
                                  <Flex>
                                      <Text color="#484644" size="medium" content="Vacatation" />
                                  </Flex>
                              </Flex>
                              <Flex className="leaveDaysValue">
                                  <Text content="13" />
                                  <Text className="daysText" content=" Days" />
                              </Flex>
                          </Flex>
                      </Card.Body>
                      <Card.Footer fitted>
                          <Flex className="cardFooter">
                              <Button className="editButton" content="Request Leave"/>
                          </Flex>
                      </Card.Footer>
                  </Card>
        </Flex>
      </>
    </Provider>
  );
};

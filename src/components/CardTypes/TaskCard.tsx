import * as React from "react";
import {
  Flex,
  Provider,
  teamsTheme,
  Card,
  Image,
  Text,
} from "@fluentui/react-northstar";
import imageFile from "../../assets/03people.png";
import imageClock from "../../assets/Icon ionic-md-time.svg";
import imageMonitor from "../../assets/Icon feather-monitor.svg";
import imageCalander from "../../assets/Icon feather-calendar.svg";
import "./Card.css";
/**
 * A Card is used to display data in sematically grouped way.
 * Header: card can contain a header slot.
 * Body: A card can contain a body slot.
 * Footer: A card can contain a footer slot
 * */

export const TaskCard: React.FC = () => {
  return (
    <Provider theme={teamsTheme}>
      <>
        <Flex className="cardWrapper">
          <Card
            className="taskDetailsCard"
            aria-roledescription="card with image and text"
          >
            <Card.Header fitted>
              <Flex className="" space="between">
                <Image
                  className="learningCourseImage"
                  src={imageFile}
                  alt="Course"
                />
              </Flex>
            </Card.Header>
            <Card.Body fitted>
              <Flex className="cardBody" space="between">
                <Flex className="" column>
                  <Flex className="learningCourseDetails">
                    <Text content="HVED and High Velocity Solutions (HVS)" />
                  </Flex>
                  <Flex className="learningCourseDescription">
                    <Text
                      content="The essential guide to High Velocity Solutions (HVS).
                                        TABLE OF CONTENTS
                                        Section 1 - Introduction
	                                        Upskilling Program for SAP Welcome Message
	                                        Learning Board Introduction
                                            Section 2:High Velocity Enterprise Delivery (HVED)
	                                        HVED Overview
	                                        High Velocity Solutions Overview
	                                        Digital Roadmaps Overview
	                                        Solution Blueprints Overview
	                                        Leveraging HVS with Clients"
                    />
                  </Flex>
                  <Flex className="learningCourseDurations">
                    <div className="leaningCourseHours">
                      <Image
                        className="learningCourseHoursImage"
                        src={imageClock}
                      />
                      <Text content="8 hours" />
                    </div>
                    <div className="learningCourseType">
                      <Image
                        className="learningCourseHoursImage"
                        src={imageMonitor}
                      />
                      <Text className="trainingType" content="Online" />
                    </div>
                    <div className="leaningCourseDate">
                      <Image
                        className="learningCourseCalanderImage"
                        src={imageCalander}
                      />
                      <Text className="trainingType" content="9/12/2021" />
                    </div>
                  </Flex>
                </Flex>
              </Flex>
            </Card.Body>
            <Card.Footer fitted>
              <Flex className="cardFooter">
                <a
                  target="_blank"
                  href="/#"
                  rel="noreferrer"
                  className="customBluebtn"
                >
                  Register
                </a>
              </Flex>
            </Card.Footer>
          </Card>
        </Flex>
      </>
    </Provider>
  );
};

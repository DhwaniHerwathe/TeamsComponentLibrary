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

export interface ItaskCardProps {
    LearningCourseDetails?: string,
    CourseDescription?: string,
    courseDuration?: string,
    courseMode?: string,
    courseDate?: string,
}

export const TaskCard: React.FC<ItaskCardProps> = ({
    LearningCourseDetails,
    CourseDescription,
    courseDuration,
    courseMode,
    courseDate,
    ...props
}) => {
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
                                      <Text content={LearningCourseDetails}/>
                  </Flex>
                  <Flex className="learningCourseDescription">
                    <Text
                     content={CourseDescription}
                    />
                  </Flex>
                  <Flex className="learningCourseDurations">
                    <div className="leaningCourseHours">
                      <Image
                        className="learningCourseHoursImage"
                        src={imageClock}
                      />
                                          <Text content={courseDuration} />
                    </div>
                    <div className="learningCourseType">
                      <Image
                        className="learningCourseHoursImage"
                        src={imageMonitor}
                      />
                     <Text className="trainingType" content={courseMode} />
                    </div>
                    <div className="leaningCourseDate">
                      <Image
                        className="learningCourseCalanderImage"
                        src={imageCalander}
                      />
                                          <Text className="trainingType" content={courseDate} />
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

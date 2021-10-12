import * as React from "react";
import { Flex, Provider, teamsTheme } from "@fluentui/react-northstar";

export interface IProgressBarProps {
  backGroundColor?: string;
  completed?: string;
}
/**
 *
 * An Attachment represents a file or media attachment, which may contain some metadata or actions.
 */

export const ProgressBar: React.FC<IProgressBarProps> = ({
  backGroundColor,
  completed,
}) => {
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: backGroundColor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right" as "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold" as "bold",
  };
  return (
    <Provider theme={teamsTheme}>
      <Flex>
        <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      </Flex>
    </Provider>
  );
};

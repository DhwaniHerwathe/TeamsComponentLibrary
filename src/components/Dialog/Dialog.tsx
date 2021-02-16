import {
  Button,
  Dialog,
  Provider,
  teamsTheme,
} from "@fluentui/react-northstar";
import * as React from "react";

export interface IDialogScreenProps {
  buttonName?: string;
  headerName?: string;
}

export const DialogScreen: React.FC<IDialogScreenProps> = ({
  buttonName,
  headerName,
  ...props
}) => {
  return (
    <Provider theme={teamsTheme}>
      <Dialog
        cancelButton="Cancel"
        confirmButton="Confirm"
        header={headerName}
        trigger={<Button content={buttonName} />}
      />
    </Provider>
  );
};

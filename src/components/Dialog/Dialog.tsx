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
/**
 *
 * A Dialog displays important information on top of a page which requires a user's attention, confirmation, or interaction. Dialogs are purposefully interruptive, so they should be used sparingly.
 */

export const DialogScreen: React.FC<IDialogScreenProps> = ({
  buttonName,
  headerName,
  ...props
}) => {
  return (
    <Provider theme={teamsTheme} >
      <Dialog
        cancelButton="Cancel"
        confirmButton="Confirm"
        header={headerName}
        trigger={<Button content={buttonName} />}
      />
    </Provider>
  );
};

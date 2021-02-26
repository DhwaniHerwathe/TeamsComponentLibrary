import * as React from "react";
import { Provider, teamsTheme } from "@fluentui/react-northstar";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";

export interface ISidePanelProps {}

export const SidePanel: React.FC<ISidePanelProps> = ({ ...props }) => {
  return (
    <Provider theme={teamsTheme}>
      <Panel
        isLightDismiss
        headerText="Menu"
        isOpen={true}
        type={PanelType.smallFixedNear}
      >
        <p>Options</p>
      </Panel>
    </Provider>
  );
};

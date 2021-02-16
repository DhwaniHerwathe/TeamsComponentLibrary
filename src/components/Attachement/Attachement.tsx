import * as React from "react";
import { Attachment, Provider, teamsTheme } from "@fluentui/react-northstar";
import { DownloadIcon, WordColorIcon } from "@fluentui/react-icons-northstar";

export interface IAttachementProps {
  base64Data?: string;
  contentType?: string;
  fileName?: string;
}
/**
 *
 * An Attachment represents a file or media attachment, which may contain some metadata or actions.
 */

export const Attachement: React.FC<IAttachementProps> = ({
  base64Data,
  contentType,
  fileName,
  ...props
}) => {
  const [value, updateValue] = React.useState(0);
  return (
    <Provider theme={teamsTheme}>
      <Attachment
        actionable
        icon={<WordColorIcon />}
        header={`${fileName}.docx`}
        description="800 Kb"
        action={{
          icon: <DownloadIcon />,
          onClick: () => {
            const linkSource = `data:${contentType};base64,${base64Data}`;
            const downloadLink = document.createElement("a");
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
          },
          title: "Download",
        }}
        progress={value}
        onClick={() => {
          updateValue(0);
          const interval = setInterval(() => {
            updateValue((oldValue) => {
              const newValue = oldValue + 50;
              if (newValue === 100) {
                clearInterval(interval);
              }
              return newValue;
            });
          }, 300);
        }}
      />
    </Provider>
  );
};

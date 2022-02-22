import * as React from "react";
import { Provider, teamsTheme, Button } from "@fluentui/react-northstar";
import { CSVLink } from "react-csv";

export interface ExportProps {
    data?: [],
    header?: [],
    fileName?: string;
    fileExtension: string;
}

export const Export: React.FC<ExportProps> = ({ data, header, fileExtension, fileName, ...props }) => {
  // console.log({fileName},{fileExtension})
  // const fileValue = (fileName.fileExtension) ;
  return (
    <Provider theme={teamsTheme}>
      <div>
          <Button>
          <CSVLink data={data} style={{textDecoration: "none", color: 'black', fontWeight: "bold" }} headers={header} filename={fileName+fileExtension}>
            Export XLS
      </CSVLink>
          </Button>
      </div>
    </Provider>
  );
};
import * as React from "react";
import { Provider, Table, teamsTheme } from "@fluentui/react-northstar";

/**
 * Type checking for Component State
 */
type CompState = {
};

interface TableValues{
    headers: object;
    values: object[];
}
type CompProps = {
    tableData?: TableValues;
    attributes?: object;
}

/**
 * Component with a Fluent UI Table
 */

export default class TableComponent extends React.Component<CompProps, CompState> {

    constructor(props: CompProps, state: CompState) {
        super(props);
        this.state = {
        };
    }

    render() {
      const rows: object[] = [];
      this.props.tableData.values.map((val, idx) => {
        const key: number = idx + 1;
        const items: string[] = [];
        for(let key in val){
            items.push(val[key] ? val[key] : "");
        }
        const rowObject: object = {  key, items };
        rows.push(rowObject);
      });
      console.log(this.props.attributes);
      return  (<Provider theme={teamsTheme}>
                    <Table variables={this.props.attributes} color="#979593" className="table" header={this.props.tableData.headers} rows={rows} aria-label="Static table" />
                </Provider>)
    }
}

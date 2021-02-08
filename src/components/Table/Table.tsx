import * as React from "react";
import { Provider, Table, teamsTheme , teamsDarkTheme, teamsHighContrastTheme , ThemeInput} from "@fluentui/react-northstar";

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
    theme : string;
}

/**
 * Component with a Fluent UI Table and theme changes
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

      // update theme based on props
      const updateTheme = (themeStr?: string) : ThemeInput<any> => {
        let theme: ThemeInput<any>;
        switch (themeStr) {
            case "dark":
                theme = teamsDarkTheme;
                break;
            case "contrast":
                theme = teamsHighContrastTheme;
                break;
            case "light":
            default:
                theme = teamsTheme;
        }
        return theme
    }; 

    
      return  (<Provider theme={updateTheme(this.props.theme)}>
                    <Table variables={this.props.attributes} color="#979593" className="table" header={this.props.tableData.headers} rows={rows} aria-label="Static table" />
                </Provider>)
    }
}

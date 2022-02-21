import * as React from "react";
import {
  ComboBox,
  IComboBox,
  IComboBoxOption,
  IComboBoxStyles,
  SelectableOptionMenuItemType,
  initializeIcons
} from '@fluentui/react';
import {Provider, teamsTheme} from "@fluentui/react-northstar";
import { getThemeColor, getHoverThemeColor, getHoverThemeBg, getThemeBg } from "./ThemeConstants";
//import './combobox.css';

export interface IMultiSelectComboBoxProps {
  // buttonName?: string;
    headerName?: string;
    options: any;
    selectedKey: any;
    placeholder: string;
    disabled?: boolean;
    onChange: any;
    multiSelect?: boolean;
}
  /**
   *
   * A multi select combobox provides user to select multiple options from the dropdown
   */
   initializeIcons();
  const options: IComboBoxOption[] =  [
    { key: 'Header1', text: 'Select Languages', itemType: SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'English' },
    { key: 'B', text: 'Hindi' },
    { key: 'C', text: 'Spanish' },
    { key: 'D', text: 'French' },
    { key: 'E', text: 'German' },
    { key: 'F', text: 'Italian', disabled: true },
    { key: 'G', text: 'Danish' },
  ];
// The TooltipHost root uses display: inline by default.
// If that's causing sizing issues or tooltip positioning issues, try overriding to inline-block.
  export const MultiSelectComboBox: React.FC<IMultiSelectComboBoxProps> = ({
    // buttonName,
    headerName,
    ...props
  }) => {
  //const comboBoxRef = React.useRef<IComboBox>(null);
    return (
        <Provider theme={teamsTheme}>{
            console.log(options)
        }
           <div>
              {/* <ComboBox
                defaultSelectedKey="C"
                label="Basic multi-select ComboBox"
                multiSelect
                options={options}
                styles={comboBoxStyles}
              /> */}
              <ComboBox
            {...props}
            useComboBoxAsMenuWidth
            className="dropdownSelect"
            multiSelect
            //styles={comboBoxStyles}
            allowFreeform={false}
            options={options}
            caretDownButtonStyles={{
                root: {
                    background: getThemeBg(),
                    color: getThemeColor(),
                },
                rootHovered: {
                    background: getHoverThemeBg(),
                    color: getHoverThemeColor(),
                }
            }
            }
            styles={{
                root: {
                    width: "450px",
                    background: getThemeBg(),
                    color: getThemeColor(),
                    border: "none",
                    "::after": {
                        border: "none"
                    }
                },
                rootFocused: {
                    border: "none !important",
                    "::after": {
                        borderBottom: "2px solid #A6A7DC !important",
                    }
                },
                rootDisabled: {
                    "::after": {
                        borderBottom: "none !important",
                    }
                },
                input: {
                    background: getThemeBg(),
                    color: getThemeColor(),
                },
                optionsContainer: {
                    background: getThemeBg(),
                    color: getThemeColor(),
                },
                callout: {
                    background: getThemeBg(),
                    color: getThemeColor(),
                    left: "0 !important",
                    label: {
                        color: getThemeColor(),
                    },
                    button: {
                        background: getThemeBg(),
                        color: getThemeColor(),
                        ":hover": {
                            background: getHoverThemeBg(),
                            color: getHoverThemeColor(),
                        }
                    }
                }

            }}
        />
            </div>
        </Provider>
    );
  };
  
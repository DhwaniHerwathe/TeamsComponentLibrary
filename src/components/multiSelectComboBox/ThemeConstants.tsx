//import {useContext} from "react";
/**
 * This file contains functions that return colors
 * according to the theme set by the user
 */

/**
 * Adjusting background color according to theme
 * @returns color
 */
 export const getThemeBg = () => {
    let themeBg = "#F5F5F5 !important";
    /*remove the themeBg Value (= "#F5F5F5 !important") for teams theme and uncomment below lines*/
    // switch (themeString) {
    //   case "dark":
    //     themeBg = "#1f1f1f !important";
    //     break;
    //   case "contrast":
    //     themeBg = "rgb(0, 0, 0) !important";
    //     break;
    //   case "default":
    //   default:
    //     themeBg = "#F5F5F5 !important";
    // }
    return themeBg;
  };
  
  /**
   * Adjusting color according to theme
   * @returns color
   */
  export const getThemeColor = () => {
    let themeColor= "black !important";
    // switch (themeString) {
    //   case "dark":
    //     themeColor = "white !important";
    //     break;
    //   case "contrast":
    //     themeColor = "white !important";
    //     break;
    //   case "default":
    //   default:
    //     themeColor = "black !important";
    // }
    return themeColor;
  };
  /**
   * Adjusting background color on hover according to theme
   * @returns color
   */
  export const getHoverThemeBg = () => {
    let hoverThemeBg  = "rgb(243, 242, 241) !important";
    // switch (themeString) {
    //   case "dark":
    //     hoverThemeBg = "#1f1f1f !important";
    //     break;
    //   case "contrast":
    //     hoverThemeBg = "#1aebff !important";
    //     break;
    //   case "default":
    //   default:
    //     hoverThemeBg = "rgb(243, 242, 241) !important";
    // }
    return hoverThemeBg;
  };
  
  /**
   * Adjusting color on hover according to theme
   * @returns color
   */
  export const getHoverThemeColor = () => {
    let hoverThemeColor= "black !important";
    // switch (themeString) {
    //   case "dark":
    //     hoverThemeColor = "white !important";
    //     break;
    //   case "contrast":
    //     hoverThemeColor = "black !important";
    //     break;
    //   case "default":
    //   default:
    //     hoverThemeColor = "black !important";
    // }
    return hoverThemeColor;
  };
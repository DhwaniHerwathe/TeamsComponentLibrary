// .storybook/manager.js

import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import customTheme from "./customTheme";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  sidebarAnimations: true,
  enableShortcuts: false,
  isToolshown: true,
  theme: customTheme,
  selectedPanel: undefined,
  initialActive: "sidebar",
  showRoots: false,
});

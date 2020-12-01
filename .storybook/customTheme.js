import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#6264A7',
  colorSecondary: '#484644',

  // UI
  appBg: '#F3F2F1',
  appContentBg: 'silver',
  appBorderColor: '#F3F2F1',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#252423',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#252423',
  barSelectedColor: 'black',
  barBg: '#6264A7',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'XD React Component Factory',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});
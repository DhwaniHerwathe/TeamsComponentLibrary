import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#6264A7',
  colorSecondary: 'rgb(97,97,97)',

  // UI
  appBg: 'rgb(236,236,236)',
  appContentBg: 'white',
  appBorderColor: '#EBEBEB',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(36,36,36,0.5)',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#6264A7',
  barSelectedColor: '#6264A7',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'XD Teams Component Factory',
  brandUrl: '/',
  brandImage: 'logo.jpg',
});
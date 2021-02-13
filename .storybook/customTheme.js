import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#6264A7',
  colorSecondary: 'rgb(97,97,97)',

  // UI
  appBg: '#F5F5F5',
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
  barTextColor: 'rgb(97,97,97)',
  barSelectedColor: '#6264A7 !important',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'XD React Component Factory',
  brandUrl: '/',
  brandImage: '',
});
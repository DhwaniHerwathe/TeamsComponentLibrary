import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Logo, ILogoProps } from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    imageUrl:{
      controls :"string"
    } 
  }  
} as Meta;

const Template: Story<ILogoProps> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:"https://i.imgur.com/JPVaRvV.png"
};


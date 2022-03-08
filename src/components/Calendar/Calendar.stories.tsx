import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CalendarView, ICalendarProps } from './CalendarCustomized'
export default {
  title: 'Components/Calendar',
  component: CalendarView,
  argTypes: {
    imageUrl:{
      controls :"string"
    } 
  }  
} as Meta;

const Template: Story<ICalendarProps> = (args) => <CalendarView {...args} />;

export const CalendatNew = Template.bind({});
CalendatNew.args = {
  imageUrl:"https://i.imgur.com/JPVaRvV.png"
};


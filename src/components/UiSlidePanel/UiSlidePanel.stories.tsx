import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { UiSlidePanel, IUiSlidePanelProps } from './UiSlidePanel';

export default {
  title: 'Components/uiSlidePanel',
    component: UiSlidePanel, 
} as Meta;

const Template: Story<IUiSlidePanelProps> = (args) => <UiSlidePanel {...args} />;

export const PanelDefault = Template.bind({});
PanelDefault.args = {
};


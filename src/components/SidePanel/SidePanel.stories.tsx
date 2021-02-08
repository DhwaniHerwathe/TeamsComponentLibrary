import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SidePanel, ISidePanelProps } from './SidePanel';

export default {
  title: 'Components/SidePanel',
    component: SidePanel, 
} as Meta;

const Template: Story<ISidePanelProps> = (args) => <SidePanel {...args} />;

export const PanelDefault = Template.bind({});
PanelDefault.args = {
};


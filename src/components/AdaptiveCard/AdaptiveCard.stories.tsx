import * as React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AdaptiveCard, IAdaptiveCardProps } from './AdpativeCard';

export default {
  title: 'Components/AdaptiveCard',
  component: AdaptiveCard,
  argTypes: {
    primary:{
      controls :"color"
    },
    secondary:{
      controls : "color"
    },
    
  }  
} as Meta;

const Template: Story<IAdaptiveCardProps> = (args) => <AdaptiveCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  card:{
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.2",
    "body": [
        {
            "type": "TextBlock",
            "text": "BUILDING ACCESS",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "style": "warning",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Physical Experience",
                            "wrap": true,
                            "size": "Small"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "spacing": "Medium",
                    "separator": true
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "items": [
                        {
                            "type": "Image",
                            "url": "https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/24/12008-thumbs-up-icon.png"
                        }
                    ],
                    "verticalContentAlignment": "Center"
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://icons.iconarchive.com/icons/papirus-team/papirus-status/24/dialog-error-icon.png"
                                        }
                                    ],
                                    "verticalContentAlignment": "Center"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "verticalContentAlignment": "Center",
                                    "backgroundImage": {
                                        "verticalAlignment": "Center"
                                    },
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "HIGH IMPORTANCE",
                                            "wrap": true,
                                            "color": "Attention",
                                            "size": "Small"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "separator": true,
                                    "spacing": "Medium",
                                    "verticalContentAlignment": "Center"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "DUE ON:",
                                            "wrap": true,
                                            "spacing": "Medium",
                                            "separator": true,
                                            "size": "Small",
                                            "color": "Attention",
                                            "id": "ac-taglineText2"
                                        }
                                    ],
                                    "verticalContentAlignment": "Center"
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "10 AUG, 2020",
                                            "wrap": true,
                                            "fontType": "Default",
                                            "size": "Small",
                                            "color": "Attention"
                                        }
                                    ],
                                    "verticalContentAlignment": "Center"
                                }
                            ]
                        },
                        {
                            "type": "TextBlock",
                            "text": "I can see you have a meeting in the London office tomorrow.",
                            "wrap": true,
                            "separator": true,
                            "spacing": "Medium"
                        }
                    ]
                }
            ]
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "backgroundImage": {
                        "verticalAlignment": "Center"
                    },
                    "style": "default",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "I can see you have a meeting in the London office tomorrow.",
                            "wrap": true,
                            "fontType": "Default",
                            "spacing": "None"
                        },
                        {
                            "type": "ColumnSet",
                            "horizontalAlignment": "Right",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "90px",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "No, its ok",
                                                    "data": {
                                                        "answer": "No",
                                                        "knok": {
                                                            "removeFromDashboard": true
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "90px",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "Yes, Please",
                                                    "data": {
                                                        "answer": "yes",
                                                        "knok": {
                                                            "removeFromDashboard": true
                                                        }
                                                    },
                                                    "style": "positive"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "spacing": "Medium"
        }
    ]
},
  themeType : "dark"
  
};


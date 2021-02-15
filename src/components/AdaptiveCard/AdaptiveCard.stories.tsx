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
  card: {
    "type": "AdaptiveCard",
    "body": [
        {
            "type": "TextBlock",
            "text": "WELLNESS CHECK  - EMPLOYEE CONFIRMATION ",
            "size": "default",
            "weight": "Bolder"
        },
        {
            "type": "ColumnSet",
            "style": "default",
            "columns": [
                {
                    "type": "Column",
                    "width": "auto",
                    "style": "warning",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Organisational Wellbeing & Resilience",
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
                    "width": "stretch",
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
                    "width": "auto",
                    "verticalContentAlignment": "Center",
                    "items": [
                        {
                            "type": "Image",
                            "url": "https://icons.iconarchive.com/icons/papirus-team/papirus-status/24/dialog-error-icon.png"
                        }
                    ]
                },
                {
                    "type": "Column",
                    "width": "auto",
                    "verticalContentAlignment": "Center",
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
                    "spacing": "Medium",
                    "verticalContentAlignment": "Center",
                    "separator": true
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
                    "verticalContentAlignment": "Center",
                    "backgroundImage": {},
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "7 AUG, 2020",
                            "wrap": true,
                            "fontType": "Default",
                            "size": "Small",
                            "color": "Attention"
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
                            "type": "ColumnSet",
                            "separator": true,
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "spacing": "None",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Check the following statements only if they are true. If they are not true, tell the FSL immediately.",
                                            "wrap": true,
                                            "fontType": "Default",
                                            "spacing": "Large"
                                        }
                                    ]
                                }
                            ],
                            "spacing": "Medium"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Would you like to take the wellness check?",
                            "wrap": true,
                            "fontType": "Default",
                            "spacing": "None"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "Input.Toggle",
                                            "title": "I am not sick today and I am heathy to work on this shift",
                                            "id": "healthy-chckbox1",
                                            "wrap": true,
                                            "spacing": "Small"
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "width": "stretch",
                                                    "items": [
                                                        {
                                                            "type": "Input.Toggle",
                                                            "title": "I have not vomitted, had nausea, diarrhea or fever within the last 3 days or i have been cleared to SSR",
                                                            "id": "healthy-chkbox2",
                                                            "wrap": true
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
                }
            ],
            "separator": true,
            "spacing": "Medium"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Toggle",
                            "title": "I do not live with or care for anyone that has committed or had diarrhea today or in the last 3 days before today",
                            "wrap": true,
                            "id": "healthy-chkbox3"
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
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "The food safety leader for my shift is:",
                            "wrap": true,
                            "isSubtle": true,
                            "spacing": "Medium"
                        }
                    ]
                }
            ],
            "spacing": "Medium"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "placeholder": "Susanne Martha Smith",
                            "id": "foodSafetyInput"
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
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "I checked in at:",
                            "wrap": true,
                            "isSubtle": true
                        }
                    ]
                }
            ],
            "spacing": "Medium"
        },
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": "stretch",
                    "items": [
                        {
                            "type": "Input.Text",
                            "placeholder": "10:25 AM",
                            "id": "checkedInInput"
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
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "Input.Toggle",
                                            "title": "I certify that the above is true",
                                            "wrap": true,
                                            "value": "true",
                                            "id": "certifyChkBox"
                                        },
                                        {
                                            "type": "ColumnSet",
                                            "spacing": "Medium",
                                            "columns": [
                                                {
                                                    "type": "Column",
                                                    "width": "auto",
                                                    "items": [
                                                        {
                                                            "type": "ActionSet",
                                                            "actions": [
                                                                {
                                                                    "type": "Action.Submit",
                                                                    "title": "Submit",
                                                                    "data": {
                                                                        "answer": "No"
                                                                    },
                                                                    "style": "positive"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ],
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            "spacing": "Medium"
        },
        {
            "type": "ColumnSet"
        }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.2"
},
  themeType : "dark"
  
};


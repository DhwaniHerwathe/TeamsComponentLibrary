
export const CardConfig = (props):object => {

    const getTheme = (type:string) => {
        let theme;
        if (type === "warningBg")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#FFFFFF";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#FFE2B2";
            }
        }    
        else if (type === "goodBg")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#FFFFFF";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#CCFFCC";
            }
        }
        else if (type === "accentBg")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#FFFFFF";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#C7DEF9";
            }
        }
        else if (type === "lightColor")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#EBEBEB";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#969563";
            }
        }
        else if (type === "attentionColor")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#EBEBEB";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#C1400A";
            }
        }
        else if (type === "goodColor")
        {
            switch (props.theme) {
                case "dark":
                    theme = "#EBEBEB";
                    break;
                case "contrast":
                    theme = "#FFFFFF";
                    break;
                case "default":
                default:
                    theme = "#4C950D";
            }
        }
        return theme;
    };
    return {
        "spacing": {
            "small": 3,
            "default": 8,
            "medium": 20,
            "large": 30,
            "extraLarge": 40,
            "padding": 10
        },
        "separator": {
            "lineThickness": 1,
            "lineColor": "#bdbde6"
        },
        "supportsInteractivity": true,
        "fontTypes": {
            "default": {
                "fontFamily": "'Segoe UI'",
                "fontSizes": {
                    "small": 12,
                    "default": 14,
                    "medium": 18,
                    "large": 22,
                    "extraLarge": 26
                },
                "fontWeights": {
                    "lighter": 200,
                    "default": 400,
                    "bolder": 600
                }
            },
            "monospace": {
                "fontFamily": "'Courier New', Courier, monospace",
                "fontSizes": {
                    "small": 12,
                    "default": 14,
                    "medium": 18,
                    "large": 22,
                    "extraLarge": 26
                },
                "fontWeights": {
                    "lighter": 200,
                    "default": 400,
                    "bolder": 600
                }
            }
        },
        "containerStyles": {
            "default": {
                "backgroundColor": "transparent",
                "foregroundColors": {
                    "default": {
                        "default": props.secondaryColor,
                        "subtle": props.primaryColor
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": getTheme("lightColor"),
                        "subtle": getTheme("lightColor"),
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default":getTheme("attentionColor"),
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": getTheme("goodColor"), //"#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            },

            "accent": {
                "backgroundColor": getTheme("accentBg"),
                "foregroundColors": {
                    "default": {
                        "default": "#252423",
                        "subtle": "#000"
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": "#969563",
                        "subtle": "#969563"
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default": "#C1400A",
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": "#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            },
            "emphasis": {
                "backgroundColor": "#F0F0F0",
                "foregroundColors": {
                    "default": {
                        "default": "#252423",
                        "subtle": "#000"
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": "#969563",
                        "subtle": "#969563"
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default": "#C1400A",
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": "#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            },

            "good": {
                "backgroundColor": getTheme("goodBg"),
                "foregroundColors": {
                    "default": {
                        "default": "#252423",
                        "subtle": "#000"
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": "#969563",
                        "subtle": "#969563"
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default": "#C1400A",
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": "#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            },
            "attention": {
                "backgroundColor": "#FFC5B2",
                "foregroundColors": {
                    "default": {
                        "default": "#252423",
                        "subtle": "#000"
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": "#969563",
                        "subtle": "#969563"
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default": "#C1400A",
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": "#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            },
            "warning": {
                "backgroundColor": getTheme("warningBg"),
                "foregroundColors": {
                    "default": {
                        "default": "#252423",
                        "subtle": "#000"
                    },
                    "dark": {
                        "default": "#252423",
                        "subtle": "#66252423"
                    },
                    "light": {
                        "default": "#969563",
                        "subtle": "#969563"
                    },
                    "accent": {
                        "default": "#0063B1",
                        "subtle": "#0063B1"
                    },
                    "attention": {
                        "default": "#C1400A",
                        "subtle": "#DDFF0000"
                    },
                    "good": {
                        "default": "#4C950D",
                        "subtle": "#DD54a254"
                    },
                    "warning": {
                        "default": "#c3ab23",
                        "subtle": "#DDc3ab23"
                    }
                }
            }
        },
        "imageSizes": {
            "small": 40,
            "medium": 80,
            "large": 160
        },
        "actions": {
            "maxActions": 5,
            "spacing": "default",
            "buttonSpacing": 8,
            "showCard": {
                "actionMode": "inline",
                "inlineTopMargin": 8
            },
            "actionsOrientation": "horizontal",
            "actionAlignment": "stretch"
        },
        "adaptiveCard": {
            "allowCustomStyle": true
        },
        "imageSet": {
            "imageSize": "medium",
            "maxImageHeight": 100
        },
        "factSet": {
            "title": {
                "color": "default",
                "size": "default",
                "isSubtle": false,
                "weight": "bolder",
                "wrap": true,
                "maxWidth": 150
            },
            "value": {
                "color": "default",
                "size": "default",
                "isSubtle": false,
                "weight": "default",
                "wrap": true
            },
            "spacing": 8
        }
    };
};
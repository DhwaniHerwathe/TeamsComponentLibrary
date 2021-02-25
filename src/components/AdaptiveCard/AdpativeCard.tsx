import * as React from "react";
import * as AdaptiveCards from "adaptivecards";
import { useContext, useState } from "react";
import MarkdownIt from "markdown-it";
import { CardConfig }  from "./AdaptiveCardConfig";
import { Card, Flex, Button, ChevronStartIcon, ChevronEndIcon, ThumbtackSlashIcon, ThumbtackIcon, Loader, Text , Provider, ThemeInput, teamsDarkTheme, teamsHighContrastTheme, teamsTheme} from "@fluentui/react-northstar";
import "./AdaptiveCard.css";

export interface IAdaptiveCardProps {
    card: any;
    onExecuteAction: (action: AdaptiveCards.Action) => void;
    backgroundColor?: string;
    padding?: string;
    border?: string;
    primary?: string;
    secondary?: string;
    themeType?: string;
    
}

export const AdaptiveCard = (props: IAdaptiveCardProps) => {

    // states
    const [adaptiveCard, setAdaptiveCard] = React.useState<AdaptiveCards.AdaptiveCard>();
   
    // refs
    const cardElement = React.useRef<HTMLDivElement>(null);
    const firstUpdate = React.useRef(true);

    // effects
    React.useEffect(() => {
      
       
        firstUpdate.current = false;
        const card = new AdaptiveCards.AdaptiveCard();
        
         AdaptiveCards.AdaptiveCard.onProcessMarkdown = (md: string, result: any) => {
            // Don't stop parsing if there is invalid Markdown -- there's a lot of that in sample Adaptive Cards templates
            try {
                result.outputHtml = new MarkdownIt().render(md);
                result.didProcess = true;
            } catch (error) {
                console.error("Error parsing Markdown", error);
                result.didProcess = false;
            }
        };
        let errors;
        card.parse(props.card, errors);
        if(errors) {
            console.error(errors);
        }

        if (cardElement.current && adaptiveCard) {

            adaptiveCard.onExecuteAction = props.onExecuteAction;
            adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(CardConfig({ primaryColor: props.primary, secondaryColor: props.secondary, theme: props.themeType }));
            

            while (cardElement.current.firstChild) {
                cardElement.current.removeChild(cardElement.current.lastChild as Node);
            }
            
            const element = adaptiveCard.render();
            if (element) {
                if (props.backgroundColor) {
                    element.style.background = props.backgroundColor;
                }
                if (props.padding) {
                    element.style.padding = props.padding;
                }
                if (props.border) {
                    element.style.border = props.border;
                }
                cardElement.current.appendChild(element);
            }
        }

        setAdaptiveCard(card);

    }, [props.card, firstUpdate.current]);


    // for updating the theme       // update theme based on props
      const updateTheme = (themeStr?: string) : ThemeInput<any> => {
        let theme: ThemeInput<any>;
        switch (themeStr) {
            case "dark":
                theme = teamsDarkTheme;
                break;
            case "contrast":
                theme = teamsHighContrastTheme;
                break;
            case "light":
            default:
                theme = teamsTheme;
        }
        return theme
    }; 


    // render
    return (
        <Provider className="adaptiveCardDiv">
        <Card size="medium" className="nudge-style">
        <Card.Body fitted>
            <div 
            ref={cardElement}>
        </div>
            
        </Card.Body>
    </Card>
    </Provider>

       

    );
};

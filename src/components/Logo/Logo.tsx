import * as React from "react";
import { Flex, Image } from "@fluentui/react-northstar";

export interface ILogoProps {
    imageUrl?: string;

}
export const Logo : React.FC<ILogoProps> = ({
    imageUrl,
    ...props
  }) => {
    return (
        <Flex gap="gap.small" column className={"card-body"}  {...props}>
            <Image
                className={"logo-icon"}
                key="Logo image"
                alt="Logo image"
                src={imageUrl} />
        </Flex>
    );
};


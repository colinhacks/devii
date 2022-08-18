import React from "react"

interface IconLinkInterface {
    label: String;
}

export const IconLink: React.FC<IconLinkInterface> = (props: IconLinkInterface) => {
    return (
        <div>
            {props.label}
        </div>
    );
}
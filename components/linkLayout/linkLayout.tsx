import {useRouter} from "next/router";
import React from "react";
import {ActiveLinkType} from "types/shared.type";

export const ActiveLink: React.FC<ActiveLinkType> = (props) => {
    const {href, children} = {...props};
    const router = useRouter();
    const style = {
        color: router.asPath === href ? '#0070f3' : '#000000',
    };
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };
    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
};
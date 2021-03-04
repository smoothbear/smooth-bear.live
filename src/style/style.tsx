import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
    children: React.ReactNode
}

export function PC(props: Props) {
    const isMobile = useMediaQuery({
        query: "(min-width:1024px)"
    });

    return <React.Fragment>{isMobile && props.children}</React.Fragment>
}

export function Tablet(props: Props) {
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });

    return <React.Fragment>{isTablet && props.children} </React.Fragment>
}

export function Mobile(props: Props) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });

    return <React.Fragment>{isMobile && props.children}</React.Fragment>
}
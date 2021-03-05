import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
    children: React.ReactNode
}

export function PC({ children } : Props) {
    const isMobile = useMediaQuery({
        query: "(min-width:1024px)"
    });

    return <React.Fragment>{isMobile && children}</React.Fragment>
}

export function Tablet({ children }: Props) {
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)"
    });

    return <React.Fragment>{isTablet && children} </React.Fragment>
}

export function Mobile({ children }: Props) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });

    return <React.Fragment>{isMobile && children}</React.Fragment>
}
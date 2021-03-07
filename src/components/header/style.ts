import styled, { keyframes } from 'styled-components';

export const Div = styled.div<{ position: string, zIndex: number }>`
    width: 100%;
    position: ${({position}) => position};
    z-index: ${({zIndex}) => zIndex};
    top: 0;
`

export const HeaderWrapper = styled.header`
    position: fixed;
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-height: 100px;
`

export const PCBar = styled.div<{ color: string }>`
    background-color: ${({color}) => color};
    position: fixed;
    width: 100%;
    transition: 0.3s;
    height: 7.5%;
`

export const Categories = styled.ul`
    list-style: none;
    display: flex;
`

const rainbow = keyframes`
    0% { color: red; }
    10% { color: orange; }
    20% { color: #8d8d00; }
    30% { color: #258a25; }
    40% { color: #016080; }
    50% { color: blue; }
    60% { color: #f1a1f1; }
    70% { color: lightgrey; }
    80% { color: grey;}
    90% { color: gray; }
    100% { color: red; }
`

const svgRainbow = keyframes`
    0% { fill: red; }
    10% { fill: orange; }
    20% { fill: #8d8d00; }
    30% { fill: #258a25; }
    40% { fill: #016080; }
    50% { fill: blue; }
    60% { fill: #f1a1f1; }
    70% { fill: lightgrey; }
    80% { fill: grey;}
    90% { fill: gray; }
    100% { fill: red; }
`

export const Category = styled.li<{ opacity: string, visibility: string, borderBottom: string, animation: boolean }>`
    font-size: 1.5rem;
    padding-top: 0.4%;
    margin-left: 5%;
    color: ${(props) => props.color};
    opacity: ${(props) => props.opacity};
    transition: 0.3s;
    visibility: ${(props) => props.visibility};
    font-size: 1.3rem;
    border-bottom: ${(props) => props.borderBottom};

    &:hover {
        cursor: pointer;
        animation: ${({animation}) => animation ? rainbow : ""} 4s infinite;
    }
`
export const MenuImage = styled.svg<{fill: string, animation: boolean}>`
    padding-top: 0.6%;
    padding-left: 0.3%;
    height: 1.1rem;
    width: 1.1rem;
    fill: ${({fill}) => fill};

    &:hover {
        cursor: pointer;
        animation: ${({animation}) => animation ? svgRainbow : ""} 4s infinite;
    }
`
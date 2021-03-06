import styled from "styled-components";

export const Body = styled.div<{ marginTop: string}>`
    background-color: white;
    margin-right: 1rem;
    width: 98%;
    height: 100%;
    margin-top: ${({marginTop}) => marginTop}rem;
    transition: 0.3s;
`

export const TestDiv = styled.div`
    height: 500rem;
`
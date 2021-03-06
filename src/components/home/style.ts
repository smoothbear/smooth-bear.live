import styled from "styled-components";

export const Body = styled.div<{ marginTop: string}>`
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top: ${({marginTop}) => marginTop}rem;
    transition: 0.3s;
`

export const TestDiv = styled.div`
    height: 500rem;
`
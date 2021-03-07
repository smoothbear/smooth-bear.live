import styled from "styled-components";

export const Body = styled.div<{ marginTop: string}>`
    background-color: white;
    width: 100%;
    height: 100%;
    margin-top: 0rem;
    transition: 0.3s;
    z-index: -1;
`

export const Bear = styled.div`
    position : relative;
`

export const BearImg = styled.img`
    height: 100%;
    width: 100%;
    z-index: 0;
`

export const BearText = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    color: white;
    font-size: 4rem;
    padding-top: 27rem;
    padding-left: 6rem;
    font-weight: bold;
`

export const BearSubText = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    color: white;
    font-size: 2rem;
    padding-top: 33rem;
    padding-left: 6.1rem;
`

export const TestDiv = styled.div`
    height: 5000px;
`
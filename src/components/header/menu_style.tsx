import styled, { keyframes } from 'styled-components';

const menuFade = keyframes`
    0% {
        padding-top: -15%
    }

    50% {
        padding-top: -5%
    }

    100% {
        padding-top: 0.3%
    }
`

interface Props {
    visibility: string
}

export const Div = styled.div<Props>`
    z-index: 4;
    position: absolute;
    display: flex;
    visibility: ${(props: Props) => props.visibility && `animation: ${menuFade} 2s 1s infinite linear alternate;`};
`

export const Category = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.8rem;
`

export const CategoryList = styled.div`
`
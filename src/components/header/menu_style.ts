import styled from 'styled-components';

export const Div = styled.div<{ visibility: string }>`
    z-index: 4;
    position: absolute;
    display: flex;
    
`

export const Category = styled.div<{height: string, paddingTop: string}>`
    width: 100%;
    padding-top: ${({paddingTop}) => paddingTop}rem;
    height: ${({height}) => height}rem;
    display: flex;
    background-color: rgba(230, 255, 255, 0.5);
    border-radius: 0.6rem;
    overflow: hidden;
    transition: 0.3s;
`

export const CategoryList = styled.div`
`
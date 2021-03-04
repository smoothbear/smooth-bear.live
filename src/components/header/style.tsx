import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-height: 100px;
`

export const PCBar = styled.div`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 9.5%;
    box-shadow: 0rem 0rem 1rem 0rem #252525;
`

export const Categories = styled.ul`
    list-style: none;
    display: flex;
`

export const Category = styled.li`
    font-size: 1.5rem;
    padding-top: 0.9%;
    padding-left: 5%;
    color: black;
    
    &:hover {
        color: gray;
        cursor: pointer;
    }
`
export const MenuImage = styled.img`
    padding-top: 0.9%;
    padding-left: 0.5%;
    height: 1.8rem;
    width: 1.8rem;

    &:hover {
        cursor: pointer;
        fill: grey;
    }
`
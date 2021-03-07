import React, { useState } from 'react'; 
import { Mobile, PC, Tablet } from "../../style/style";
import { PCBar, Categories, Category, MenuImage, Div } from "./style";
import Menu from "./menu"; 

interface Props {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    color: string;
    height: string;
    setHeight: React.Dispatch<React.SetStateAction<string>>;
    opacity: string;
    setOpacity: React.Dispatch<React.SetStateAction<string>>;
    visibility: string;
    setVisibility: React.Dispatch<React.SetStateAction<string>>;
    categoryColor: string;
}

function Header({toggle, setToggle, color, height, setHeight, opacity, setOpacity, visibility, setVisibility, categoryColor }: Props) {
    const [categoryClicked, setCategoryClicked] = useState<number>(1);

    const borderBottom: string = "0.02rem solid";
    const menuIcon: string = "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z";
    const closeIcon: string = "m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"

    const onClicked = () => {
        setToggle(!toggle);
        if (window.pageYOffset > 20) {
            if (toggle) {
                window.scrollTo({top: 0, behavior: "smooth"});                
            }
        }
        toggle ? setHeight("5") : setHeight("0");
        toggle ? setOpacity("0") : setOpacity("1");
        toggle ? setVisibility("hidden") : setVisibility("visible");
    }

    const home = () => {
        setCategoryClicked(1);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <>
            <PC>
                <Div position = {toggle ? "fixed" : ""} zIndex={toggle ? 99 : 0}>
                    <PCBar color={color}>
                        <Categories>
                            <MenuImage viewBox={toggle ? "0 0 451.847 451.847" : "0 0 329.26933 329"}
                                       fill={toggle ? categoryColor : "dimgray"} animation={window.pageYOffset > 20} onClick={onClicked}>
                                <path d={toggle ? menuIcon : closeIcon}></path>
                            </MenuImage>
                            <Category opacity={opacity} visibility={visibility} 
                                      borderBottom={categoryClicked === 1 ? borderBottom : "none"}
                                      color={categoryColor} onClick={home}
                                      animation={window.pageYOffset > 20}>Home</Category>
                            <Category opacity={opacity} visibility={visibility} 
                                      borderBottom={categoryClicked === 2 ? borderBottom : "none"} 
                                      color={categoryColor} onClick={() => setCategoryClicked(2)}
                                      animation={window.pageYOffset > 20}>Introduce</Category>
                            <Category opacity={opacity} visibility={visibility} 
                                      borderBottom={categoryClicked === 3 ? borderBottom : "none"}
                                      color={categoryColor} onClick={() => setCategoryClicked(3)}
                                      animation={window.pageYOffset > 20}>Project</Category>
                        </Categories>
                    </PCBar>
                    
                    <Menu height={height} paddingTop={toggle ? "0" : "5"}></Menu>      
                    
                </Div>
            </PC>
            <Tablet>
                Tablet
            </Tablet>
            <Mobile>
                Mobile
            </Mobile>
        </>
    );
}

export default Header;
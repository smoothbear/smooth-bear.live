import React, { useState } from 'react'; 
import { Mobile, PC, Tablet } from "../../style/style";
import { PCBar, Categories, Category, MenuImage } from "./style";
import Menu from "./menu"; 

interface Props {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    color: string;
}

function Header({toggle, setToggle, color}: Props) {
    const [height, setHeight] = useState<string>("0");
    const [opacity, setOpacity] = useState<string>("1");
    const [visibility, setVisibility] = useState<string>("display");
    const [categoryClicked, setCategoryClicked] = useState<number>(1);

    const borderBottom: string = "0.02rem solid";
    const menuIcon: string = "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z";
    const closeIcon: string = "m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"

    const onClicked = () => {
        if (window.pageYOffset > 20) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        setToggle(!toggle);
        toggle ? setHeight("5") : setHeight("0");
        toggle ? setOpacity("0") : setOpacity("1");
        toggle ? setVisibility("hidden") : setVisibility("visible");
    }

    return (
        <>
            <PC>
                <div style={{width: "100%"}}>
                    <PCBar color={color}>
                        <Categories>
                            <MenuImage viewBox={toggle ? "0 0 451.847 451.847" : "0 0 329.26933 329"} onClick={onClicked}>
                                <path d={toggle ? menuIcon : closeIcon}></path>
                            </MenuImage>
                            <Category opacity={opacity} visibility={visibility} borderBottom={categoryClicked === 1 ? borderBottom : "none"} onClick={() => setCategoryClicked(1)}>Home</Category>
                            <Category opacity={opacity} visibility={visibility} borderBottom={categoryClicked === 2 ? borderBottom : "none"} onClick={() => setCategoryClicked(2)}>Introduce</Category>
                            <Category opacity={opacity} visibility={visibility} borderBottom={categoryClicked === 3 ? borderBottom : "none"} onClick={() => setCategoryClicked(3)}>Project</Category>
                        </Categories>
                    </PCBar>
                    
                    <Menu height={height} paddingTop={toggle ? "0" : "6"}></Menu>      
                    
                </div>
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
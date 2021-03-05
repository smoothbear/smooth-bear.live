import { useState } from 'react'; 
import { Mobile, PC, Tablet } from "../../style/style";
import { PCBar, Categories, Category, MenuImage } from "./style";
import menuImage from "./icons/menu.svg";
import closeImage from "./icons/close.svg";
import Menu from "./menu"; 

function Header() {
    const [toggle, setToggle] = useState(false);
    
    const onClicked = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <PC>
                <div style={{width: "100%"}}>
                    <PCBar>
                        <Categories>
                            <MenuImage src={toggle ? closeImage : menuImage} onClick={onClicked}></MenuImage>
                            <Category>Project</Category>
                            <Category>Location</Category>
                        </Categories>
                    </PCBar>
                    {
                        toggle ? <Menu></Menu> : null
                    }
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
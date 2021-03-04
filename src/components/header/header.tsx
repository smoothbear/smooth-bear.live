import { Mobile, PC, Tablet } from "../../style/style";
import { PCBar, Categories, Category, MenuImage } from "./style";
import { menuHandler } from './event_handler';
import menuImage from "./icons/menu.svg";

function Header() {
    return (
        <div style={{width: "100%"}}>
            <PC>
                <PCBar>
                    <Categories>
                        <MenuImage src={menuImage} onClick={menuHandler}></MenuImage>
                        <Category>Project</Category>
                        <Category>Location</Category>
                    </Categories>
                </PCBar>
            </PC>
            <Tablet>
                Tablet
            </Tablet>
            <Mobile>
                Mobile
            </Mobile>
        </div>
    );
}

export default Header;
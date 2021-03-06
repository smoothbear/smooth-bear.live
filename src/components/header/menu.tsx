import { Category } from "./menu_style";

function Menu(props: { height: string, paddingTop: string }) {
    return (
        <>
        <div>
            <Category height={props.height} paddingTop={props.paddingTop}>
                
            </Category>
        </div>
       </>
    )
}

export default Menu;
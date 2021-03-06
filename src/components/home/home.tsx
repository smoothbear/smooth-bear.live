import { useEffect } from "react";
import { Body, TestDiv } from "./style";

function Home({
    toggle, setColor, setToggle, setHeight, setOpacity, setVisibility}: 
    {
        toggle: boolean, 
        setColor: React.Dispatch<React.SetStateAction<string>>, 
        setToggle: React.Dispatch<React.SetStateAction<boolean>>,
        setHeight: React.Dispatch<React.SetStateAction<string>>,
        setOpacity: React.Dispatch<React.SetStateAction<string>>,
        setVisibility: React.Dispatch<React.SetStateAction<string>>
    }) {
    useEffect(() => {
            window.addEventListener('scroll', e => {
                if (window.pageYOffset > 20 && toggle) {
                    setToggle(true);
                    setColor("rgba(255, 255, 255, 0.9)");
                    setHeight("0");
                    setOpacity("1");
                    setVisibility("visible");
                }
                
                else if (window.pageYOffset > 20) {
                    setColor("rgba(255, 255, 255, 0.9)");
                }
                
                else {
                    setColor("transplant");
                }
            });
        }
    );

    return (
        <>
            <Body marginTop={toggle ? "4.5": "0"}>
                <p>
                    <TestDiv />
                    안녕하세요
                </p>
            </Body>
        </>
    );
}

export default Home;
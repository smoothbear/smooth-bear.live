import { useEffect } from "react";
import { Bear, BearImg, BearSubText, BearText, Body, TestDiv } from "./style";
import bear from "./image/bear.png";
import { PC } from "../../style/style";

function Home({
    toggle, setColor, setToggle, setHeight, setOpacity, setVisibility, setCategoryColor }: 
    {
        toggle: boolean, 
        setColor: React.Dispatch<React.SetStateAction<string>>, 
        setToggle: React.Dispatch<React.SetStateAction<boolean>>,
        setHeight: React.Dispatch<React.SetStateAction<string>>,
        setOpacity: React.Dispatch<React.SetStateAction<string>>,
        setVisibility: React.Dispatch<React.SetStateAction<string>>,
        setCategoryColor: React.Dispatch<React.SetStateAction<string>>
    }) {
    useEffect(() => {
            window.addEventListener('scroll', e => {
                if (window.pageYOffset > 20 && !toggle) {
                    setToggle(true);
                    setColor("rgba(255, 255, 255, 0.9)");
                    setHeight("0");
                    setOpacity("1");
                    setVisibility("visible");
                    setCategoryColor("dimgray");
                }
                
                else if (window.pageYOffset > 20) {
                    setColor("rgba(255, 255, 255, 0.9)");
                    setCategoryColor("dimgray");
                }
                
                else {
                    setColor("transplant");
                    setCategoryColor("#F5F5F5");
                }
            });
        }
    );

    return (
        <>
            <PC>
                <Body marginTop={toggle ? "4.5": "0"}>
                    <Bear>
                        <BearImg src={bear} alt="곰 사진" height="100%" width="100%"/>
                        <BearText>
                            PORTFOLIO
                        </BearText>
                        <BearSubText>
                            smoothbear's portfolio
                        </BearSubText>
                    </Bear>
                    <TestDiv />
                    aa
                </Body>
            </PC>
        </>
    );
}

export default Home;
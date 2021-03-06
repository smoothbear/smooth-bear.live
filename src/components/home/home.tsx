import { useEffect } from "react";
import { Body, TestDiv } from "./style";

function Home({toggle, setColor}: {toggle: boolean, setColor: React.Dispatch<React.SetStateAction<string>>}) {
    useEffect(() => {
            window.addEventListener('scroll', e => {
                if (window.pageYOffset > 20) {
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
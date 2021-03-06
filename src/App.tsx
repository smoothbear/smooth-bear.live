import Header from "./components/header/header";
import Home from "./components/home/home";
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [color, setColor] = useState<string>("transparent");
  const [height, setHeight] = useState<string>("0");
  const [opacity, setOpacity] = useState<string>("1");
  const [visibility, setVisibility] = useState<string>("display");

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle}
              color={color} height={height} setHeight={setHeight} 
              opacity={opacity} setOpacity={setOpacity} visibility={visibility} setVisibility={setVisibility}/>
      <Home toggle={toggle} setColor={setColor} setToggle={setToggle}
            setHeight={setHeight} setOpacity={setOpacity} setVisibility={setVisibility}/>
    </>
  );
}

export default App;

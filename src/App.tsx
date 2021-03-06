import Header from "./components/header/header";
import Home from "./components/home/home";
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [color, setColor] = useState<string>("transparent");

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} color={color}/>
      <Home toggle={toggle} setColor={setColor}/>
    </>
  );
}

export default App;

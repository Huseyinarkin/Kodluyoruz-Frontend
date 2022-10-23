import './App.css';

import React, { useEffect, useState } from 'react';
import { init, subscribe } from './socketApi'
import Palette from './components/Palette';

function App() {
  const [activeColor, setActiveColor] = useState("#282c34");

  useEffect(() => {
    console.log("sayac")
    init();
    subscribe((color) => {
      setActiveColor(color);
    });
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Palette activeColor={activeColor}/>
    </div>
  );
}

export default App;

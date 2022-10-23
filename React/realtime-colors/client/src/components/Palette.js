import React, { useState, useEffect } from 'react'
import { send } from "../socketApi";

function Palette({ activeColor }) {    
    const [color, setColor] = useState("#000000");
    useEffect(()=>setColor(activeColor),[activeColor]);

    return (
        <div className='palette'>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => send(color)}>Click</button>
        </div>
    )
}

export default Palette
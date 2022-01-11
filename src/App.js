import "./App.css";
import React, { useState } from "react";
import Values from "values.js";
import SingleColor from './SingleColor.js';

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      document.getElementById("input").style.borderColor = "var(--secondary-color)";
    } catch (error) {
      document.getElementById("input").style.borderColor = "#cc0000";
    }
  };

  return (
    <>
      <div id="top">
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="input"
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>
      </div>
      <div id="bottom">
        {list.map((color, index)=> {
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          })}
      </div>
    </>
  );
}

export default App;

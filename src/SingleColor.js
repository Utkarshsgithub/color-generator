import React, { useState, useEffect } from "react";

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
      const timeout = setTimeout(() => {
          setAlert(false);
      }, 2000);
      return () => clearTimeout(timeout)
  }, [alert])

  return (
    <div
      id="color"
      className={`dark-color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={()=>{
          setAlert(true)
          navigator.clipboard.writeText(hexValue)
      }}
    >
      <div className="text">
        <p>{weight}%</p>
        <p>{hexValue}</p>
        {alert && <p className="alert">
            copied to clipboard</p>}
      </div>
    </div>
  );
}

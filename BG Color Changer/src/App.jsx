import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const colorData = [
    { color: "Blue" },
    { color: "Green" },
    { color: "Yellow" },
    { color: "Pink" },
    { color: "Skyblue" },
    { color: "Brown" },
    { color: "Orange" },
    { color: "Limegreen" },
    { color: "Gray" },
    { color: "White" },
  ];

  const [color, setColor] = useState("Blue");

  return (
    <div
      className={`h-screen w-full flex flex-col items-center justify-end gap-3 pb-10`}
      style={{ background: color }}
    >
      <h1 className="text-5xl text-black font-bold">Click On Button</h1>
      <div className="flex gap-4 bg-slate-400 px-4 py-2">
        {colorData.map((e, i) => {
          return (
            <Button key={i} text={e.color} bg={e.color} setColor={setColor} />
          );
        })}
      </div>
    </div>
  );
};

export default App;

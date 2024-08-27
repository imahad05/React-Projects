import React from "react";

const Button = ({ text, bg, setColor }) => {
  return (
    <button
      className={`px-10 py-5 rounded-2xl font-semibold capitalize ${
        bg == "White" || bg == "Yellow" ? "text-black" : "text-white"
      } `}
      style={{ background: bg }}
      onClick={() => setColor(bg)}
    >
      {text}
    </button>
  );
};

export default Button;

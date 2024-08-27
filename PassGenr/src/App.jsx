import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const CopyClipBoardText = () => [
    window.navigator.clipboard.writeText(password),
    passwordRef.current?.select(),
  ];

  useEffect(() => {
    generatePassword();
  }, [length, setCharAllowed, setNumberAllowed, generatePassword]);

  return (
    <div className="bg-slate-500 h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-2/6 bg-gray-800 p-4 rounded-md">
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full text-xl text-black px-4 py-2 rounded-sm border-none outline-none focus:border-2 focus:border-black "
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="px-6 bg-blue-400 rounded-sm font-semibold"
            onClick={CopyClipBoardText}
          >
            Copy
          </button>
        </div>
        <div className="my-4 flex items-center justify-between">
          <div className="flex gap-2 items-center text-lg font-semibold text-white">
            <input
              type="range"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length ({length})</label>
          </div>
          <div className="flex gap-2 items-center text-lg font-semibold text-white ">
            <input
              type="checkbox"
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Character</label>
          </div>
          <div className="flex gap-2 items-center text-lg font-semibold text-white">
            <input
              type="checkbox"
              id="number"
              value={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Number</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

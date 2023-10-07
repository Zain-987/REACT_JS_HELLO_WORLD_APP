import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordChanger = () => {
  const [passwordLength, setPasswordLength] = useState(8);

  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let char = "POIUYTREWQASDFGHJKLMNBVCXZ";
    let numbers = "0987123456";
    let special = "+=-:;>.<,/?!@#$%^&*()~";

    let str = "";
    str += charAllowed && char;
    str += numberAllowed && numbers;
    str += specialAllowed && special;

    let result = "";
    for (let i = 1; i <= passwordLength; i++) {
      result += str.charAt(Math.round(Math.random() * str.length));
    }
    setPassword(result);
  }, [
    setPassword,
    setPasswordLength,
    numberAllowed,
    specialAllowed,
    charAllowed,
  ]);

  const inputRef = useRef(null);
  const copyToClipBoard = () => {
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 20);

    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    generatePassword();
  }, [setPassword, passwordLength, numberAllowed, specialAllowed, charAllowed]);
  return (
    <section className="flex  justify-center items-center min-h-screen">
      <section className=" border flex flex-col max-w-[450px] w-[96%]">
        <h2 className="text-2xl font-[600]">Password Changer</h2>
        <section className="flex items-center mt-3 p-[10px]">
          <input
            type="text"
            className="flex-1 outline-none p-2 border"
            value={password}
            readOnly
            multiple
            ref={inputRef}
          />
          <button
            className="px-4 py-2 bg-blue-500 rounded text-white"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </section>

        <section>
          <section className="flex space-x-3">
            <input
              type="range"
              value={passwordLength}
              onChange={(text) => {
                setPasswordLength(text.target.value);
              }}
            />
            <p>Length : {passwordLength}</p>
          </section>
          <section className="flex space-x-3 items-center">
            <label htmlFor="number">Number </label>
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </section>
          <section className="flex space-x-3 items-center">
            <label htmlFor="char">Special Characters </label>
            <input
              type="checkbox"
              id="char"
              defaultChecked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
            />
          </section>
          <section className="flex space-x-3 items-center">
            <label htmlFor="ch">Characters </label>
            <input
              type="checkbox"
              id="ch"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default PasswordChanger;

/*
Things i had learnt from Here 
defaultChecked Feild in input (checkbox)
useCallBack()
useRef Hook()
little bit about window object
*/

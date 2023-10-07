import React, { useState } from "react";

let arr = ["Blue", "Green", "Yellow", "Black", "Red", "Orange", "Pink"];
const Bg_Changer = () => {
  const [bgSet, setBg] = useState("gray");
  return (
    <section className={`min-h-screen relative  bg-${bgSet}-500`}>
      <section className="absolute bottom-5 w-full bg-gray-500 mx-auto">
        {arr.map((item) => {
          return (
            <button
              className={` rounded-md m-2 px-4 py-2 bg-${item.toLocaleLowerCase()}-500`}
              onClick={() => setBg(item.toLocaleLowerCase())}
            >
              {item}
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default Bg_Changer;

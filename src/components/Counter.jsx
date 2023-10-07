import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increament = () => {
    setValue((prev) => prev + 1);
  };

  const decreament = () => {
    value >= 1 && setValue((prev) => prev - 1);
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <section>
        <h2>Counter App</h2>
        <p>Current Value : {value}</p>
        <span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={increament}
          >
            Increament
          </button>{" "}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={decreament}
          >
            Decreament
          </button>
        </span>
      </section>
    </section>
  );
};

export default Counter;

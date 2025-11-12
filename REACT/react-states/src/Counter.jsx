import React, { useState } from "react";

function init() {
  console.log("init");
  return Math.random();
}
export default function counter() {
  let [count, setCount] = useState(init ); //initialization

  function incount() {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incount}>count</button>
    </div>
  );
}

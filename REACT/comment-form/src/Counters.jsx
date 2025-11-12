import { useState, useEffect } from "react";

export default function Counter() {
  let [count, setcount] = useState(0);

  let inCount = () => {
    setcount((curreCount) => curreCount + 1);
  };

  useEffect(function printSomething() {
    console.log("this is side-effect");
  });

  return (
    <div>
      count = {count}
      <button onClick={inCount}>+1</button>
    </div>
  );
}

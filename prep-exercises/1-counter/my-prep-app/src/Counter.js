import React, { useState } from "react";
import Count from "./Count.js";
import Button from "./Button.js";

function Counter() {
  const [count, setCount] = useState(0);
  const addOne = () => setCount(count + 1);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} />
      <p>{feedback}</p>
      <Button addOne={addOne} />
    </div>
  );
}
export default Counter;

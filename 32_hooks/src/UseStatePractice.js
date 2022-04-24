import React, { useState } from 'react';
import useCustomHook from './useCustomHook';

export default function UseStatePractice() {
  const [count, setCount] = useState(0);
  const [isHappy, toggleHappy] = useCustomHook(true);
  return (
    <div>
      <h1>custom hook</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>count</button>
      <h2 onClick={toggleHappy}>{isHappy ? 'happyuu' : 'not happy'}</h2>
    </div>
  );
}

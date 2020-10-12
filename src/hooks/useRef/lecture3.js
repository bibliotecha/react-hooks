import React, { useState, useRef } from 'react';

/**
 * useRefを使えば何回レンダリングされたかを記録できます。
 */
export const Lecture3 = () => {
  const [count, setCount] = useState(0);
  // useRefの特徴としてはstateと違い再レンダリングに影響を受けないことです
  const numberRef = useRef(0);
  return (
    <>
      {console.log('読み込まれました')}
      <div>stateの数字：{count}</div>
      <div>refの数字：{numberRef.current++}</div>
      {console.log('numberRef.current', numberRef.current)}
      <button onClick={() => setCount(count + 1)}>countを増やす</button>
    </>
  );
};

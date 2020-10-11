import React, { useState } from 'react';

/**
 * SetStateでstateを変える方法
 */
export const Lecture3 = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <p>{state}</p>
      {/* 方法１-> 別の変数に割り当ててその値を増やす */}
      <button onClick={() => setState((s) => s + 1)}>方法１</button>
      {/* 方法２ -> stateに直接働きかける */}
      <button onClick={() => setState(state + 1)}>方法２</button>
    </div>
  );
};

import React, { useState } from 'react';

/**
 * 複数のstateを管理する方法
 */
export const Lecture4 = () => {
  /**
   * 方法１　一つのstateにオブジェクトとしてまとめる
   */
  const [state, setState] = useState({
    count1: 0,
    count2: 0,
  });

  /**
   * 方法２　それぞれのstateを分ける
   */
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      {/* 方法１の時のcount1の表示の仕方 */}
      <p>方法１：{state.count1}</p>
      {/* 方法２の時のcount2の表示の仕方 */}
      <p>方法２：{count1}</p>
      {/* 方法１でcount1のstateを変える */}
      <button onClick={() => setState({ ...state, count1: state.count1 + 1 })}>
        方法１
      </button>
      <button onClick={() => setState((s) => ({ ...s, count1: s.count1 + 1 }))}>
        方法１
      </button>
      {/* 方法2でcount1のstateを変える */}
      <button onClick={() => setCount1(count1 + 1)}>方法２</button>
    </div>
  );
};

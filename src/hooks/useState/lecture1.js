import React, { useState } from 'react';

/**
 * 基本的な型
 */
export function Lecture1() {
  // useStateはarray（配列）を返します
  // const arr = useState('stateの初期値が入る');

  // しかし上記のような書き方は稀で普通は配列を分割代入します
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  // [stateの中身, stateの中身を変えるための関数]
  const [state, setState] = useState('stateの初期値が入る');

  return <div>{state}</div>;
}
